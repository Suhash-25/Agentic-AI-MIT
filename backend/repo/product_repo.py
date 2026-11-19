import aiosqlite
from typing import List, Optional
from fastapi import HTTPException
from models.product_model import Product
from constants import DB_NAME, PRODUCTS_TABLE_NAME
from datetime import datetime

class ProductRepo:
    def __init__(self, db_path: str = DB_NAME):
        self.db_path = db_path

    async def init_db(self):
        """Initialize table if not exists."""
        async with aiosqlite.connect(self.db_path) as db:
            await db.execute(
                f"""
                CREATE TABLE IF NOT EXISTS {PRODUCTS_TABLE_NAME} (
                    id TEXT PRIMARY KEY,
                    name TEXT,
                    description TEXT,
                    carbon_savings TEXT,
                    incentive TEXT,
                    price TEXT,
                    last_updated TEXT 
                )
            """
            )
            await db.commit()

    async def create_product(self, product: Product) -> Product:
        if isinstance(product, dict):
            product = Product(**product)
        
        last_updated_time = datetime.now().isoformat()
        product.last_updated = last_updated_time
        
        async with aiosqlite.connect(self.db_path) as db:
            try:
                await db.execute(
                    f"""
                    INSERT INTO {PRODUCTS_TABLE_NAME} (id, name, description, carbon_savings, incentive, price, last_updated)
                    VALUES (?, ?, ?, ?, ?, ?, ?)
                """,
                    (
                        product.id,
                        product.name,
                        product.description,
                        product.carbon_savings,
                        product.incentive,
                        product.price,
                        product.last_updated,
                    ),
                )
                await db.commit()
                return product
            except aiosqlite.IntegrityError:
                raise HTTPException(status_code=409, detail="Product already exists")

    async def get_all_products(self) -> List[Product]:
        """Ignore SQL query string; just return all products."""
        async with aiosqlite.connect(self.db_path) as db:
            cursor = await db.execute(f"SELECT * FROM {PRODUCTS_TABLE_NAME}")
            rows = await cursor.fetchall()
            products = [
                Product(
                    id=row[0],
                    name=row[1],
                    description=row[2],
                    carbon_savings=row[3],
                    incentive=row[4],
                    price=row[5],
                    last_updated=row[6] if len(row) > 6 else None, # Handle old records
                )
                for row in rows
            ]
            return products

    async def get_product_by_name(self, name: str) -> List[Product]:
        async with aiosqlite.connect(self.db_path) as db:
            cursor = await db.execute(
                f"""
                SELECT id, name, description, carbon_savings, incentive, price, last_updated
                FROM {PRODUCTS_TABLE_NAME}
                WHERE name = ?
            """,
                (name,),
            )
            row = await cursor.fetchone()
            if not row:
                raise HTTPException(status_code=404, detail="Product not found")

            return [
                Product(
                    id=row[0],
                    name=row[1],
                    description=row[2],
                    carbon_savings=row[3],
                    incentive=row[4],
                    price=row[5],
                    last_updated=row[6],
                )
            ]

    async def delete_product(self, product_id: str) -> bool:
        async with aiosqlite.connect(self.db_path) as db:
            cursor = await db.execute(
                f"""
                DELETE FROM {PRODUCTS_TABLE_NAME} WHERE id = ?
            """,
                (product_id,),
            )
            await db.commit()
            if cursor.rowcount == 0:
                raise HTTPException(status_code=404, detail="Product not found")
            return True

    async def update_product(self, product_id: str, product: Product) -> Product:
        if isinstance(product, dict):
            product = Product(**product)
            
        last_updated_time = datetime.now().isoformat()
        product.last_updated = last_updated_time

        async with aiosqlite.connect(self.db_path) as db:
            try:
                cursor = await db.execute(
                    f"""
                    UPDATE {PRODUCTS_TABLE_NAME}
                    SET name = ?,
                        description = ?,
                        carbon_savings = ?,
                        incentive = ?,
                        price = ?,
                        last_updated = ?
                    WHERE id = ?
                    """,
                    (
                        product.name,
                        product.description,
                        product.carbon_savings,
                        product.incentive,
                        product.price,
                        product.last_updated,
                        product_id,
                    ),
                )
                await db.commit()

                if cursor.rowcount == 0:
                    raise HTTPException(status_code=404, detail="Product not found")

                return product

            except Exception as e:
                raise HTTPException(
                    status_code=500, detail=f"Error updating product: {str(e)}"
                )

    async def get_last_updated_product(self) -> Product:
        """Finds the product with the most recent 'last_updated' timestamp."""
        async with aiosqlite.connect(self.db_path) as db:
            cursor = await db.execute(
                f"""
                SELECT * FROM {PRODUCTS_TABLE_NAME}
                ORDER BY last_updated DESC
                LIMIT 1
            """
            )
            row = await cursor.fetchone()
            if not row:
                raise HTTPException(status_code=404, detail="No products found")

            return Product(
                id=row[0],
                name=row[1],
                description=row[2],
                carbon_savings=row[3],
                incentive=row[4],
                price=row[5],
                last_updated=row[6],
            )