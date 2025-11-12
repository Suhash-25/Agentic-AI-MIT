import aiosqlite
from typing import List
from fastapi import HTTPException
from models.product_model import Product
from repo.product_repo import ProductRepo

class ProductService:
    def __init__(self, repo: ProductRepo):
        self.repo = repo

    async def create_product(self, product: Product) -> Product:
        await self.repo.init_db()
        await self.repo.create_product(product)

    async def get_all_products(self) -> List[Product]:
        """Ignore SQL query string; just return all products."""
        await self.repo.init_db()
        return await self.repo.get_all_products()

    async def get_product_by_name(self, name: str) -> List[Product]:
        await self.repo.init_db()
        return await self.repo.get_product_by_name(name)

    async def delete_product(self, product_id: str) -> bool:
        await self.repo.init_db()
        return await self.repo.delete_product(product_id)

    async def update_product(self, product_id: str, product: Product) -> Product:
        await self.repo.init_db()
        if isinstance(product, dict):
            product = Product(**product)
        updated = await self.repo.update_product(product_id, product)
        if not updated:
            raise HTTPException(status_code=404, detail="Product not found to update")
        return product

    async def get_last_updated_product(self) -> Product:
        """Gets the most recently updated product."""
        await self.repo.init_db()
        return await self.repo.get_last_updated_product()