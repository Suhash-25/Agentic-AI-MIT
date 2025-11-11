from services.product_service import ProductService
from services.incentive_service import IncentiveService
from services.user_service import UserService
from repo.user_repo import UserRepo
from repo.incentive_repo import IncentiveRepo
from repo.product_repo import ProductRepo
from constants import DB_NAME


incentive_repo = IncentiveRepo(DB_NAME)
incentive_service = IncentiveService(incentive_repo)

product_repo = ProductRepo(DB_NAME)
product_service = ProductService(product_repo)

user_repo = UserRepo(DB_NAME)
user_service = UserService(user_repo)


async def fetch_all_products() -> dict:
    return await product_service.get_all_products()


async def fetch_product_by_name(name: str) -> dict:
    return await product_service.get_product_by_name(name)


async def fetch_all_incentives() -> dict:
    return await incentive_service.get_all_incentive()


async def fetch_incentives_by_zip_code(zip_code: str) -> dict:
    return await incentive_service.get_incentive_by_zip_code(zip_code)


async def fetch_all_users() -> dict:
    return await user_service.get_all_users()


async def fetch_user_by_email(email: str) -> dict:
    return await user_service.get_user_by_email(email)
