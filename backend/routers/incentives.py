from fastapi import APIRouter, status
from typing import List, Optional
from models.incentive_model import Incentive
from services.incentive_service import IncentiveService
from services import incentive_service
from repo.incentive_repo import IncentiveRepo
from constants import DB_NAME

router = APIRouter()
incentive_repo = IncentiveRepo(DB_NAME)
incentive_service = IncentiveService(incentive_repo)


@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_incentive_endpoint(incentive: Incentive):
    await incentive_service.create_product(incentive)
    return {"message": "Incentive added successfully"}


@router.put("/{incentive_id}", status_code=status.HTTP_200_OK)
async def update_kyc(incentive_id: str, incentive: Incentive):
    """Update an existing incentive record"""
    return await incentive_service.update_incentive(incentive_id, incentive)


@router.get("/", response_model=List[Incentive])
async def search_products_endpoint(zip_code: Optional[str] = None):
    if zip_code:
        return await incentive_service.get_incentive_by_zip_code(zip_code)
    else:
        return await incentive_service.get_all_incentive()


@router.delete("/{incentive_id}")
async def delete_incentive_endpoint(
    incentive_id: str,
):
    await incentive_service.delete_incentive(incentive_id)
    return {"message": "Incentive deleted successfully"}
