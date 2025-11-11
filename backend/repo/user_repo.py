import aiosqlite
from typing import List, Optional
from fastapi import HTTPException
from models.user_model import User
from constants import DB_NAME, USER_TABLE_NAME


class UserRepo:
    def __init__(self, db_path: str = DB_NAME):
        self.db_path = db_path

    async def init_db(self):
        """Initialize table if not exists."""
        async with aiosqlite.connect(self.db_path) as db:
            await db.execute(
                f"""
                CREATE TABLE IF NOT EXISTS {USER_TABLE_NAME} (
                    email TEXT PRIMARY KEY,
                    zip_code TEXT
                )
            """
            )
            await db.commit()

    async def create_user(self, user: User) -> User:
        if isinstance(user, dict):
            user = User(**user)
        async with aiosqlite.connect(self.db_path) as db:
            try:
                await db.execute(
                    f"""
                    INSERT INTO {USER_TABLE_NAME} (email, zip_code)
                    VALUES (?, ?)
                """,
                    (
                        user.email,
                        user.zip_code,
                    ),
                )
                await db.commit()
                return user
            except aiosqlite.IntegrityError:
                raise HTTPException(status_code=409, detail="User already exists")

    async def get_all_users(self) -> List[User]:
        """Ignore SQL query string; just return all users."""
        async with aiosqlite.connect(self.db_path) as db:
            cursor = await db.execute(f"SELECT * FROM {USER_TABLE_NAME}")
            rows = await cursor.fetchall()
            users = [
                User(
                    email=row[0],
                    zip_code=row[1],
                )
                for row in rows
            ]
            return users

    async def get_user_by_email(self, email: str) -> User:
        async with aiosqlite.connect(self.db_path) as db:
            cursor = await db.execute(
                f"""
                SELECT email, zip_code
                FROM {USER_TABLE_NAME}
                WHERE email = ?
            """,
                (email,),
            )
            row = await cursor.fetchone()
            if not row:
                raise HTTPException(status_code=404, detail="User not found")

            return User(
                email=row[0],
                zip_code=row[1],
            )

    async def delete_user(self, email: str) -> bool:
        async with aiosqlite.connect(self.db_path) as db:
            cursor = await db.execute(
                f"""
                DELETE FROM {USER_TABLE_NAME} WHERE email = ?
            """,
                (email,),
            )
            await db.commit()
            if cursor.rowcount == 0:
                raise HTTPException(status_code=404, detail="User not found")
            return True

    async def update_user(self, email: str, user: User) -> User:
        if isinstance(user, dict):
            user = User(**user)

        async with aiosqlite.connect(self.db_path) as db:
            try:
                cursor = await db.execute(
                    f"""
                    UPDATE {USER_TABLE_NAME}
                    SET zip_code = ?
                    WHERE email = ?
                    """,
                    (
                        user.zip_code,
                        email,
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
