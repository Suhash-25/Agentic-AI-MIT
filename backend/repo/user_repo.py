import aiosqlite
import datetime
from typing import List, Optional, Dict, Any
from fastapi import HTTPException
from models.user_model import User
from constants import DB_NAME, USER_TABLE_NAME


class UserRepo:
    def __init__(self, db_path: str = DB_NAME):
        self.db_path = db_path

    async def init_db(self):
        """Initialize table and run migrations if columns are missing."""
        async with aiosqlite.connect(self.db_path) as db:
            await db.execute(
                f"""
                CREATE TABLE IF NOT EXISTS {USER_TABLE_NAME} (
                    email TEXT PRIMARY KEY,
                    zip_code TEXT,
                    username TEXT UNIQUE,
                    password_hash TEXT,
                    salt TEXT,
                    full_name TEXT,
                    avatar_url TEXT,
                    provider TEXT DEFAULT 'local',
                    created_at TEXT
                )
            """
            )
            await db.commit()

            # Run safe migrations for existing tables that may only have (email, zip_code)
            cursor = await db.execute(f"PRAGMA table_info({USER_TABLE_NAME})")
            columns = [row[1] for row in await cursor.fetchall()]

            migrations = [
                ("username", "TEXT"),
                ("password_hash", "TEXT"),
                ("salt", "TEXT"),
                ("full_name", "TEXT"),
                ("avatar_url", "TEXT"),
                ("provider", "TEXT DEFAULT 'local'"),
                ("created_at", "TEXT"),
            ]

            for col_name, col_type in migrations:
                if col_name not in columns:
                    try:
                        await db.execute(
                            f"ALTER TABLE {USER_TABLE_NAME} ADD COLUMN {col_name} {col_type}"
                        )
                    except Exception:
                        pass

            await db.commit()

    async def create_user(self, user: User) -> User:
        """Original create_user for legacy router/agent compatibility."""
        if isinstance(user, dict):
            user = User(**user)
        await self.init_db()
        async with aiosqlite.connect(self.db_path) as db:
            try:
                now = datetime.datetime.utcnow().isoformat()
                await db.execute(
                    f"""
                    INSERT INTO {USER_TABLE_NAME} (email, zip_code, username, full_name, avatar_url, provider, created_at)
                    VALUES (?, ?, ?, ?, ?, ?, ?)
                """,
                    (
                        user.email,
                        user.zip_code,
                        user.username or user.email.split("@")[0],
                        user.full_name or "",
                        user.avatar_url or "",
                        user.provider or "local",
                        now,
                    ),
                )
                await db.commit()
                return user
            except aiosqlite.IntegrityError:
                raise HTTPException(status_code=409, detail="User already exists")

    async def create_user_with_auth(
        self,
        email: str,
        username: str,
        password_hash: str,
        salt: str,
        zip_code: str = "00000",
        full_name: Optional[str] = None,
        avatar_url: Optional[str] = None,
        provider: str = "local",
    ) -> Dict[str, Any]:
        """Creates user with full auth credentials."""
        await self.init_db()
        async with aiosqlite.connect(self.db_path) as db:
            try:
                now = datetime.datetime.utcnow().isoformat()
                await db.execute(
                    f"""
                    INSERT INTO {USER_TABLE_NAME} 
                    (email, zip_code, username, password_hash, salt, full_name, avatar_url, provider, created_at)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                    (
                        email.lower().strip(),
                        zip_code.strip() if zip_code else "00000",
                        username.lower().strip(),
                        password_hash,
                        salt,
                        full_name or "",
                        avatar_url or "",
                        provider,
                        now,
                    ),
                )
                await db.commit()
                return {
                    "email": email.lower().strip(),
                    "username": username.lower().strip(),
                    "zip_code": zip_code.strip() if zip_code else "00000",
                    "full_name": full_name or "",
                    "avatar_url": avatar_url or "",
                    "provider": provider,
                    "created_at": now,
                }
            except aiosqlite.IntegrityError as e:
                err_msg = str(e).lower()
                if "username" in err_msg:
                    raise HTTPException(
                        status_code=409, detail="Username is already taken"
                    )
                raise HTTPException(
                    status_code=409, detail="Email is already registered"
                )

    async def get_user_auth_by_credential(
        self, credential: str
    ) -> Optional[Dict[str, Any]]:
        """Finds user by either email or username for login."""
        await self.init_db()
        cred = credential.lower().strip()
        async with aiosqlite.connect(self.db_path) as db:
            db.row_factory = aiosqlite.Row
            cursor = await db.execute(
                f"""
                SELECT email, zip_code, username, password_hash, salt, full_name, avatar_url, provider, created_at
                FROM {USER_TABLE_NAME}
                WHERE lower(email) = ? OR lower(username) = ?
                LIMIT 1
            """,
                (cred, cred),
            )
            row = await cursor.fetchone()
            if not row:
                return None
            return dict(row)

    async def upsert_oauth_user(
        self,
        email: str,
        full_name: Optional[str] = None,
        avatar_url: Optional[str] = None,
        provider: str = "google",
        zip_code: str = "00000",
    ) -> Dict[str, Any]:
        """Creates or updates an OAuth user (e.g. Google Sign-In)."""
        await self.init_db()
        email_clean = email.lower().strip()
        now = datetime.datetime.utcnow().isoformat()

        async with aiosqlite.connect(self.db_path) as db:
            db.row_factory = aiosqlite.Row
            cursor = await db.execute(
                f"SELECT * FROM {USER_TABLE_NAME} WHERE lower(email) = ?",
                (email_clean,),
            )
            existing = await cursor.fetchone()

            if existing:
                # Update existing user profile with latest OAuth name/avatar if not set
                current = dict(existing)
                updated_name = full_name or current.get("full_name") or ""
                updated_avatar = avatar_url or current.get("avatar_url") or ""
                await db.execute(
                    f"""
                    UPDATE {USER_TABLE_NAME}
                    SET full_name = ?, avatar_url = ?, provider = ?
                    WHERE lower(email) = ?
                """,
                    (updated_name, updated_avatar, provider, email_clean),
                )
                await db.commit()
                return {
                    "email": current["email"],
                    "username": current.get("username")
                    or email_clean.split("@")[0],
                    "zip_code": current.get("zip_code") or "00000",
                    "full_name": updated_name,
                    "avatar_url": updated_avatar,
                    "provider": provider,
                    "created_at": current.get("created_at") or now,
                }
            else:
                # Insert new OAuth user
                base_username = email_clean.split("@")[0]
                username = base_username
                # Check for username collision
                counter = 1
                while True:
                    check_cur = await db.execute(
                        f"SELECT email FROM {USER_TABLE_NAME} WHERE lower(username) = ?",
                        (username.lower(),),
                    )
                    if not await check_cur.fetchone():
                        break
                    username = f"{base_username}{counter}"
                    counter += 1

                await db.execute(
                    f"""
                    INSERT INTO {USER_TABLE_NAME}
                    (email, zip_code, username, password_hash, salt, full_name, avatar_url, provider, created_at)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                    (
                        email_clean,
                        zip_code,
                        username,
                        "",
                        "",
                        full_name or "",
                        avatar_url or "",
                        provider,
                        now,
                    ),
                )
                await db.commit()
                return {
                    "email": email_clean,
                    "username": username,
                    "zip_code": zip_code,
                    "full_name": full_name or "",
                    "avatar_url": avatar_url or "",
                    "provider": provider,
                    "created_at": now,
                }

    async def get_all_users(self) -> List[User]:
        await self.init_db()
        async with aiosqlite.connect(self.db_path) as db:
            cursor = await db.execute(f"SELECT * FROM {USER_TABLE_NAME}")
            rows = await cursor.fetchall()
            users = []
            for row in rows:
                # row[0]=email, row[1]=zip_code
                users.append(
                    User(
                        email=row[0],
                        zip_code=row[1] or "00000",
                        username=row[2] if len(row) > 2 and row[2] else None,
                        full_name=row[5] if len(row) > 5 and row[5] else None,
                        avatar_url=row[6] if len(row) > 6 and row[6] else None,
                        provider=row[7] if len(row) > 7 and row[7] else "local",
                        created_at=row[8] if len(row) > 8 and row[8] else None,
                    )
                )
            return users

    async def get_user_by_email(self, email: str) -> User:
        await self.init_db()
        async with aiosqlite.connect(self.db_path) as db:
            cursor = await db.execute(
                f"""
                SELECT *
                FROM {USER_TABLE_NAME}
                WHERE lower(email) = ?
            """,
                (email.lower().strip(),),
            )
            row = await cursor.fetchone()
            if not row:
                raise HTTPException(status_code=404, detail="User not found")

            return User(
                email=row[0],
                zip_code=row[1] or "00000",
                username=row[2] if len(row) > 2 and row[2] else None,
                full_name=row[5] if len(row) > 5 and row[5] else None,
                avatar_url=row[6] if len(row) > 6 and row[6] else None,
                provider=row[7] if len(row) > 7 and row[7] else "local",
                created_at=row[8] if len(row) > 8 and row[8] else None,
            )

    async def delete_user(self, email: str) -> bool:
        await self.init_db()
        async with aiosqlite.connect(self.db_path) as db:
            cursor = await db.execute(
                f"""
                DELETE FROM {USER_TABLE_NAME} WHERE lower(email) = ?
            """,
                (email.lower().strip(),),
            )
            await db.commit()
            if cursor.rowcount == 0:
                raise HTTPException(status_code=404, detail="User not found")
            return True

    async def update_user(self, email: str, user: User) -> User:
        if isinstance(user, dict):
            user = User(**user)

        await self.init_db()
        async with aiosqlite.connect(self.db_path) as db:
            try:
                cursor = await db.execute(
                    f"""
                    UPDATE {USER_TABLE_NAME}
                    SET zip_code = ?, full_name = COALESCE(?, full_name), avatar_url = COALESCE(?, avatar_url)
                    WHERE lower(email) = ?
                    """,
                    (
                        user.zip_code,
                        user.full_name,
                        user.avatar_url,
                        email.lower().strip(),
                    ),
                )
                await db.commit()

                if cursor.rowcount == 0:
                    raise HTTPException(status_code=404, detail="User not found")

                return user

            except Exception as e:
                raise HTTPException(
                    status_code=500, detail=f"Error updating user: {str(e)}"
                )
