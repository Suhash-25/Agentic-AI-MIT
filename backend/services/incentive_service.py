from typing import List
from fastapi import HTTPException
from models.incentive_model import Incentive
from repo.incentive_repo import IncentiveRepo


class IncentiveService:
    def __init__(self, incentive_repo: IncentiveRepo):
        self.repo = incentive_repo

    async def create_incentive(self, incentive: Incentive) -> Incentive:
        await self.repo.init_db()
        await self.repo.create_incentive(incentive)
        return incentive

    async def get_all_incentive(self) -> List[Incentive]:
        """Ignore SQL query string; just return all incentives."""
        await self.repo.init_db()
        return await self.repo.get_all_incentive()

    async def get_incentives_by_org(self, org: str) -> List[Incentive]:
        """Get all incentives from a specific organization."""
        await self.repo.init_db()
        return await self.repo.get_incentives_by_org(org)

    async def get_incentive_by_zip_code(self, zip_code: str) -> List[Incentive]:
        await self.repo.init_db()
        return await self.repo.get_incentive_by_zip_code(zip_code)

    async def delete_incentive(self, incentive_id: str) -> bool:
        await self.repo.init_db()
        return await self.repo.delete_incentive(incentive_id)

    async def update_incentive(
        self, incentive_id: str, incentive: Incentive
    ) -> Incentive:
        await self.repo.init_db()
        updated = await self.repo.update_incentive(incentive_id, incentive)
        if not updated:
            raise HTTPException(status_code=404, detail="Incentive not found to update")
        return incentive