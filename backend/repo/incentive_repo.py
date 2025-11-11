import aiosqlite
from typing import List, Optional
from fastapi import HTTPException
from models.incentive_model import Incentive
from constants import DB_NAME, INCENTIVE_TABLE_NAME


class IncentiveRepo:
    def __init__(self, db_path: str = DB_NAME):
        self.db_path = db_path

    async def init_db(self):
        """Initialize table if not exists."""
        async with aiosqlite.connect(self.db_path) as db:
            await db.execute(
                f"""
                CREATE TABLE IF NOT EXISTS {INCENTIVE_TABLE_NAME} (
                    id TEXT PRIMARY KEY,
                    total_incentive TEXT,
                    org TEXT,
                    zip_code TEXT
                )
            """
            )
            await db.commit()

    async def create_incentive(self, incentive: Incentive) -> Incentive:
        if isinstance(incentive, dict):
            incentive = Incentive(**incentive)
        async with aiosqlite.connect(self.db_path) as db:
            try:
                await db.execute(
                    f"""
                    INSERT INTO {INCENTIVE_TABLE_NAME} (id, total_incentive, org, zip_code)
                    VALUES (?, ?, ?, ?)
                """,
                    (
                        incentive.id,
                        incentive.total_incentive,
                        incentive.org,
                        incentive.zip_code,
                    ),
                )
                await db.commit()
                return incentive
            except aiosqlite.IntegrityError:
                raise HTTPException(status_code=409, detail="Incentive already exists")

    async def get_all_incentive(self) -> List[Incentive]:
        """Ignore SQL query string; just return all incentives."""
        async with aiosqlite.connect(self.db_path) as db:
            cursor = await db.execute(f"SELECT * FROM {INCENTIVE_TABLE_NAME}")
            rows = await cursor.fetchall()
            incentive = [
                Incentive(
                    id=row[0],
                    total_incentive=row[1],
                    org=row[2],
                    zip_code=row[3],
                )
                for row in rows
            ]
            return incentive

    async def get_incentive_by_zip_code(self, zip_code: str) -> List[Incentive]:
        async with aiosqlite.connect(self.db_path) as db:
            cursor = await db.execute(
                f"""
                SELECT id, total_incentive, org, zip_code
                FROM {INCENTIVE_TABLE_NAME}
                WHERE zip_code = ?
            """,
                (zip_code,),
            )
            row = await cursor.fetchone()
            if not row:
                raise HTTPException(status_code=404, detail="Incentive not found")

            return [
                Incentive(
                    id=row[0],
                    total_incentive=row[1],
                    org=row[2],
                    zip_code=row[3],
                )
            ]

    async def delete_incentive(self, incentive_id: str) -> bool:
        async with aiosqlite.connect(self.db_path) as db:
            cursor = await db.execute(
                f"""
                DELETE FROM {INCENTIVE_TABLE_NAME} WHERE id = ?
            """,
                (incentive_id,),
            )
            await db.commit()
            if cursor.rowcount == 0:
                raise HTTPException(status_code=404, detail="Incentive not found")
            return True

    async def update_incentive(
        self, incentive_id: str, incentive: Incentive
    ) -> Incentive:
        if isinstance(incentive, dict):
            incentive = Incentive(**incentive)

        async with aiosqlite.connect(self.db_path) as db:
            try:
                cursor = await db.execute(
                    f"""
                    UPDATE {INCENTIVE_TABLE_NAME}
                    SET total_incentive = ?,
                        org = ?,
                        zip_code = ?
                    WHERE id = ?
                    """,
                    (
                        incentive.total_incentive,
                        incentive.org,
                        incentive.zip_code,
                        incentive_id,
                    ),
                )
                await db.commit()

                if cursor.rowcount == 0:
                    raise HTTPException(status_code=404, detail="Incentive not found")

                return incentive

            except Exception as e:
                raise HTTPException(
                    status_code=500, detail=f"Error updating incentive: {str(e)}"
                )
