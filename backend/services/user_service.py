import aiosqlite
from typing import List
from fastapi import HTTPException
from models.user_model import User
from repo.user_repo import UserRepo


class UserService:
    def __init__(self, repo: UserRepo):
        self.repo = repo

    async def create_user(self, user: User) -> User:
        await self.repo.init_db()
        await self.repo.create_user(user)

    async def get_all_users(self) -> List[User]:
        """Ignore SQL query string; just return all users."""
        await self.repo.init_db()
        return await self.repo.get_all_users()

    async def get_user_by_email(self, email: str) -> User:
        await self.repo.init_db()
        return await self.repo.get_user_by_email(email)

    async def delete_user(self, email: str) -> bool:
        await self.repo.init_db()
        return await self.repo.delete_user(email)

    async def update_user(self, email: str, user: User) -> User:
        await self.repo.init_db()
        if isinstance(user, dict):
            user = User(**user)
        updated = await self.repo.update_user(email, user)
        if not updated:
            raise HTTPException(status_code=404, detail="User not found to update")
        return user
