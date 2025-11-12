from collections import Counter, defaultdict
from services.product_service import ProductService
from services.incentive_service import IncentiveService
from services.user_service import UserService
from repo.user_repo import UserRepo
from repo.incentive_repo import IncentiveRepo
from repo.product_repo import ProductRepo
from constants import DB_NAME
from models.product_model import Product
from models.incentive_model import Incentive
from models.user_model import User 
from fastapi import HTTPException


incentive_repo = IncentiveRepo(DB_NAME)
incentive_service = IncentiveService(incentive_repo)

product_repo = ProductRepo(DB_NAME)
product_service = ProductService(product_repo)

user_repo = UserRepo(DB_NAME)
user_service = UserService(user_repo)


# --- CHALLENGE 1-2 TOOLS (Fetch & Add) ---

async def fetch_all_products() -> dict:
    """Fetches all available products from the database."""
    return await product_service.get_all_products()


async def fetch_product_by_name(name: str) -> dict:
    """Fetches a specific product by its name. Use this to check if a product exists."""
    return await product_service.get_product_by_name(name)


async def fetch_all_incentives() -> dict:
    """Fetches all available incentives from the database."""
    return await incentive_service.get_all_incentive()


async def fetch_incentives_by_zip_code(zip_code: str) -> dict:
    """Fetches all incentives available for a specific zip code."""
    return await incentive_service.get_incentive_by_zip_code(zip_code)


async def fetch_incentives_by_organization(org_name: str) -> dict:
    """Fetches all incentives offered by a specific organization."""
    try:
        return await incentive_service.get_incentives_by_org(org_name)
    except HTTPException as e:
        return {"error": e.detail, "status_code": e.status_code}


async def fetch_all_users() -> dict:
    """Fetches a list of all registered users and their details. Use this if the user wants to see a list of users."""
    return await user_service.get_all_users()


async def fetch_user_by_email(email: str) -> dict:
    """Fetches a specific user by their email address."""
    return await user_service.get_user_by_email(email)


async def add_product(
    id: str, name: str, description: str, carbon_savings: str, incentive: str, price: str
) -> dict:
    """Adds a new product to the database."""
    try:
        product = Product(
            id=id,
            name=name,
            description=description,
            carbon_savings=carbon_savings,
            incentive=incentive,
            price=price,
        )
        await product_service.create_product(product)
        return {"message": "Product added successfully", "product": product.model_dump()}
    except HTTPException as e:
        return {"error": e.detail, "status_code": e.status_code}
    except Exception as e:
        return {"error": f"An unexpected error occurred: {str(e)}"}


async def add_incentive(
    id: str, total_incentive: str, org: str, zip_code: str, product_id: str
) -> dict:
    """Adds a new incentive to the database. Requires: id, total_incentive, org, zip_code, and product_id."""
    try:
        incentive = Incentive(
            id=id,
            total_incentive=total_incentive,
            org=org,
            zip_code=zip_code,
            product_id=product_id,
        )
        await incentive_service.create_incentive(incentive)
        return {
            "message": "Incentive added successfully",
            "incentive": incentive.model_dump(),
        }
    except HTTPException as e:
        return {"error": e.detail, "status_code": e.status_code}
    except Exception as e:
        return {"error": f"An unexpected error occurred: {str(e)}"}


async def add_user(email: str, zip_code: str) -> dict:
    """Adds a new user to the database with their email and zip code."""
    try:
        user = User(email=email, zip_code=zip_code)
        await user_service.create_user(user)
        return {"message": "User added successfully", "user": user.model_dump()}
    except HTTPException as e:
        return {"error": e.detail, "status_code": e.status_code}
    except Exception as e:
        return {"error": f"An unexpected error occurred: {str(e)}"}


async def update_product_incentive(
    product_name: str, new_incentive: str
) -> dict:
    """Updates the incentive value for a specific product, identified by its name."""
    try:
        products = await product_service.get_product_by_name(product_name)
        if not products:
            return {"error": "Product not found", "status_code": 404}
        product_to_update = products[0]
        updated_product_data = product_to_update.model_dump()
        updated_product_data["incentive"] = new_incentive
        updated_product = Product(**updated_product_data)
        await product_service.update_product(product_to_update.id, updated_product)
        return {
            "message": "Product incentive updated successfully",
            "product": updated_product.model_dump(),
        }
    except HTTPException as e:
        return {"error": e.detail, "status_code": e.status_code}
    except Exception as e:
        return {"error": f"An unexpected error occurred: {str(e)}"}


async def delete_product_by_name(product_name: str) -> dict:
    """Deletes a product from the database, identified by its name."""
    try:
        products = await product_service.get_product_by_name(product_name)
        if not products:
            return {"error": "Product not found", "status_code": 404}
        product_id_to_delete = products[0].id
        await product_service.delete_product(product_id_to_delete)
        return {"message": f"Product '{product_name}' deleted successfully."}
    except HTTPException as e:
        return {"error": e.detail, "status_code": e.status_code}
    except Exception as e:
        return {"error": f"An unexpected error occurred: {str(e)}"}


# --- CHALLENGE 3 TOOLS (ANALYTICS) ---

async def get_incentive_product_count() -> dict:
    """Counts how many products qualify for an incentive."""
    try:
        all_products = await product_service.get_all_products()
        count = 0
        for product in all_products:
            try:
                incentive_val = float(product.incentive.replace("$", "").replace(",", ""))
                if incentive_val > 0:
                    count += 1
            except (ValueError, AttributeError):
                continue
        return {
            "total_products_with_incentives": count,
            "total_products_scanned": len(all_products),
        }
    except Exception as e:
        return {"error": f"An unexpected error occurred: {str(e)}"}


async def get_total_incentives_by_org() -> dict:
    """Calculates the sum of all incentive amounts, grouped by organization."""
    try:
        all_incentives = await incentive_service.get_all_incentive()
        org_totals = {}
        for incentive in all_incentives:
            org_name = incentive.org
            try:
                incentive_val = float(incentive.total_incentive.replace("$", "").replace(",", ""))
                if org_name not in org_totals:
                    org_totals[org_name] = 0.0
                org_totals[org_name] += incentive_val
            except (ValueError, AttributeError):
                continue
        formatted_totals = {
            org: f"${total:,.2f}" for org, total in org_totals.items()
        }
        return {"incentive_totals_by_organization": formatted_totals}
    except Exception as e:
        return {"error": f"An unexpected error occurred: {str(e)}"}

async def get_user_count_by_zip_code() -> dict:
    """Returns a complete dictionary list of all zip codes and the number of registered users in each. Use this to answer any question about user counts by zip code."""
    try:
        all_users = await user_service.get_all_users()
        if not all_users:
            return {"error": "No users found in the database."}
        zip_code_counts = Counter(user.zip_code for user in all_users)
        return {
            "user_count_by_zip_code": dict(zip_code_counts)
        }
    except Exception as e:
        return {"error": f"An unexpected error occurred: {str(e)}"}


# --- CHALLENGE 4 TOOLS (AUDITING) ---

async def get_last_updated_product() -> dict:
    """Finds and returns the single product record that was most recently updated."""
    try:
        # Note: Assumes product_service.get_last_updated_product() exists
        product = await product_service.get_last_updated_product()
        return product.model_dump()
    except HTTPException as e:
        return {"error": e.detail, "status_code": e.status_code}
    except Exception as e:
        return {"error": f"An unexpected error occurred: {str(e)}"}


async def list_incentives_above_amount(amount: float) -> dict:
    """Finds and returns a list of all incentives where the total_incentive is greater than the specified amount."""
    try:
        all_incentives = await incentive_service.get_all_incentive()
        high_value_incentives = []
        for incentive in all_incentives:
            try:
                incentive_val = float(incentive.total_incentive.replace("$", "").replace(",", ""))
                if incentive_val > amount:
                    high_value_incentives.append(incentive.model_dump())
            except (ValueError, AttributeError):
                continue
        if not high_value_incentives:
            return {"message": f"No incentives found exceeding ${amount:,.2f}."}
        return {"incentives_found": high_value_incentives}
    except Exception as e:
        return {"error": f"An unexpected error occurred: {str(e)}"}


async def get_org_with_most_high_value_incentives(threshold: float = 1000.0) -> dict:
    """
    Analyzes incentives to find which organization offers the most *high-value* incentives.
    An incentive is high-value if it is above the 'threshold' (defaulting to 1000).
    """
    try:
        all_incentives = await incentive_service.get_all_incentive()
        if not all_incentives:
            return {"error": "No incentives found."}
        high_value_incentives = []
        for incentive in all_incentives:
            try:
                incentive_val = float(incentive.total_incentive.replace("$", "").replace(",", ""))
                if incentive_val > threshold:
                    high_value_incentives.append(incentive)
            except (ValueError, AttributeError):
                continue
        if not high_value_incentives:
            return {"message": f"No organizations found offering incentives above ${threshold:,.2f}."}
        org_counts = Counter(incentive.org for incentive in high_value_incentives)
        most_common_org = org_counts.most_common(1)[0]
        org_name = most_common_org[0]
        incentive_count = most_common_org[1]
        return {
            "organization_with_most_high_value_incentives": org_name,
            "number_of_high_value_incentives": incentive_count,
            "threshold_used": f"${threshold:,.2f}"
        }
    except Exception as e:
        return {"error": f"An unexpected error occurred: {str(e)}"}


# --- CHALLENGE 5 TOOLS (MULTI-MODAL) ---

# --- Helper functions for Challenge 5 ---
def _parse_carbon(carbon_str: str) -> float:
    """Helper to convert '1200lbs' to 1200.0"""
    try:
        return float(carbon_str.lower().replace("lbs", "").replace(",", ""))
    except (ValueError, AttributeError):
        return 0.0

def _parse_currency(currency_str: str) -> float:
    """Helper to convert '$1200.00' to 1200.0"""
    try:
        return float(currency_str.replace("$", "").replace(",", ""))
    except (ValueError, AttributeError):
        return 0.0
# --- End helper functions ---

async def get_zip_code_with_highest_carbon_savings() -> dict:
    """
    Finds which user zip code has the highest potential total carbon savings.
    Links Users -> Zip Codes -> Incentives -> Products -> Carbon Savings.
    """
    try:
        all_products = await product_service.get_all_products()
        all_incentives = await incentive_service.get_all_incentive()
        all_users = await user_service.get_all_users()
        if not all_users:
            return {"error": "No users found in the database."}
        user_zip_codes = {user.zip_code for user in all_users}
        product_savings_map = {
            prod.id: _parse_carbon(prod.carbon_savings) for prod in all_products
        }
        zip_savings = defaultdict(float)
        for incentive in all_incentives:
            if hasattr(incentive, 'product_id') and incentive.product_id in product_savings_map:
                savings = product_savings_map[incentive.product_id]
                zip_savings[incentive.zip_code] += savings
        user_zip_savings = {
            zip: total
            for zip, total in zip_savings.items()
            if zip in user_zip_codes
        }
        if not user_zip_savings:
            return {"error": "Could not map any user zip codes to carbon savings."}
        best_zip = max(user_zip_savings, key=user_zip_savings.get)
        return {
            "zip_code": best_zip,
            "total_carbon_savings": f"{user_zip_savings[best_zip]:,.0f}lbs",
        }
    except Exception as e:
        return {"error": f"An unexpected error occurred: {str(e)}"}


async def get_org_with_best_cost_incentive_ratio() -> dict:
    """
    Finds which organization has the best cost-to-incentive ratio.
    Links Organizations -> Incentives -> Products -> Price.
    A lower ratio is better.
    """
    try:
        all_products = await product_service.get_all_products()
        all_incentives = await incentive_service.get_all_incentive()
        product_price_map = {
            prod.id: _parse_currency(prod.price) for prod in all_products
        }
        org_data = defaultdict(lambda: {"total_cost": 0.0, "total_incentive": 0.0})
        for incentive in all_incentives:
            if not hasattr(incentive, 'product_id') or incentive.product_id not in product_price_map:
                continue
            product_id = incentive.product_id
            cost = product_price_map[product_id]
            incentive_amount = _parse_currency(incentive.total_incentive)
            if incentive_amount > 0:
                org_data[incentive.org]["total_cost"] += cost
                org_data[incentive.org]["total_incentive"] += incentive_amount
        if not org_data:
            return {"error": "Could not map any organizations to products/incentives."}
        org_ratios = {}
        for org, data in org_data.items():
            if data["total_incentive"] > 0:
                org_ratios[org] = data["total_cost"] / data["total_incentive"]
        if not org_ratios:
            return {"error": "No organizations found with valid incentives to calculate ratio."}
        best_org = min(org_ratios, key=org_ratios.get)
        return {
            "organization": best_org,
            "cost_to_incentive_ratio": f"{org_ratios[best_org]:.2f}",
        }
    except Exception as e:
        return {"error": f"An unexpected error occurred: {str(e)}"}


async def find_users_with_no_incentives() -> dict:
    """
    Finds users who live in a zip code where no incentives are available.
    Compares the Users table and the Incentives table.
    """
    try:
        all_incentives = await incentive_service.get_all_incentive()
        all_users = await user_service.get_all_users()
        if not all_users:
            return {"error": "No users found in the database."}
        incentive_zip_codes = {incentive.zip_code for incentive in all_incentives}
        users_without_incentives = [
            user.model_dump()
            for user in all_users
            if user.zip_code not in incentive_zip_codes
        ]
        if not users_without_incentives:
            return {
                "message": "All registered users live in zip codes with available incentives."
            }
        return {"users_found": users_without_incentives}
    except Exception as e:
        return {"error": f"An unexpected error occurred: {str(e)}"}