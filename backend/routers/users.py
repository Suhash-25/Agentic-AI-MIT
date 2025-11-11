from fastapi import APIRouter, status
from typing import List
from models.user_model import User
from services.user_service import UserService
from services import user_service
from repo.user_repo import UserRepo
from constants import DB_NAME

router = APIRouter()
user_repo = UserRepo(DB_NAME)
user_service = UserService(user_repo)


@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_user_endpoint(user: User):
    await user_service.create_user(user)
    return {"message": "User added successfully"}


@router.put("/{email}", status_code=status.HTTP_200_OK)
async def update_kyc(email: str, user: User):
    """Update an existing user record"""
    return await user_service.update_user(email, user)


@router.get("/", response_model=List[User])
async def search_users_endpoint():
    return await user_service.get_all_users()


@router.get("/{email}", response_model=User)
async def get_users_endpoint(email: str):
    return await user_service.get_user_by_email(email)


@router.delete("/{email}")
async def delete_user_endpoint(
    email: str,
):
    await user_service.delete_user(email)
    return {"message": "User deleted successfully"}
