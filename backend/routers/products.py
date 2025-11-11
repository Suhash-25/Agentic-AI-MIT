from fastapi import APIRouter, Depends, status
from typing import List, Optional
from models.product_model import Product
from services.product_service import ProductService
from services import product_service
from repo.product_repo import ProductRepo
from constants import DB_NAME

router = APIRouter()
product_repo = ProductRepo(DB_NAME)
product_service = ProductService(product_repo)


@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_product_endpoint(product: Product):
    await product_service.create_product(product)
    return {"message": "Product added successfully"}


@router.put("/{product_id}", status_code=status.HTTP_200_OK)
async def update_kyc(product_id: str, product: Product):
    """Update an existing incentive record"""
    return await product_service.update_product(product_id, product)


@router.get("/", response_model=List[Product])
async def search_products_endpoint(productname: Optional[str] = None):
    if productname:
        return await product_service.get_product_by_name(productname)
    else:
        return await product_service.get_all_products()


@router.delete("/{product_id}")
async def delete_product_endpoint(
    product_id: str,
):
    await product_service.delete_product(product_id)
    return {"message": "Product deleted successfully"}
