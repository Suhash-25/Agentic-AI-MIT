from dotenv import load_dotenv
load_dotenv()

import os
import uvicorn
from google.adk.cli.fast_api import get_fast_api_app
from services.product_service import ProductService
from services.incentive_service import IncentiveService
from services.user_service import UserService
from routers import products, incentives, users
from constants import DB_NAME
from repo.incentive_repo import IncentiveRepo
from repo.product_repo import ProductRepo
from repo.user_repo import UserRepo
from constants import AGENT_MODEL
print(f"\n\n---> DEBUG: The Agent is trying to load model: {AGENT_MODEL}\n\n")

incentive_repo = IncentiveRepo(DB_NAME)
incentive_service = IncentiveService(incentive_repo)

product_repo = ProductRepo(DB_NAME)
product_service = ProductService(product_repo)

user_repo = UserRepo(DB_NAME)
user_service = UserService(user_repo)


# Get the directory where main.py is located
AGENT_DIR = os.path.dirname(os.path.abspath(__file__))

# Session service URI (e.g., SQLite)
# SESSION_SERVICE_URI = "sqlite:///./sessions.db"

# Configure allowed origins for CORS - Add your domains here
ALLOWED_ORIGINS = ["*"]  # Only use this for development - remove for production

# Set web=True if you intend to serve a web interface, False otherwise
SERVE_WEB_INTERFACE = False

# Call the function to get the FastAPI app instance
# The agent_dir should point to the directory containing main.py
# ADK will automatically discover the agent folder within it
app = get_fast_api_app(
    agents_dir=AGENT_DIR,
    # session_service_uri=SESSION_SERVICE_URI,
    allow_origins=ALLOWED_ORIGINS,  # This is the key CORS configuration
    web=SERVE_WEB_INTERFACE,
)

app.include_router(products.router, prefix="/products", tags=["Products"])
app.include_router(incentives.router, prefix="/incentive", tags=["Incentive"])
app.include_router(users.router, prefix="/user", tags=["Users"])

frontend_dir = os.environ.get("FRONTEND_DIR")
if not frontend_dir:
    candidate = os.path.abspath(os.path.join(AGENT_DIR, "..", "frontend"))
    if os.path.isdir(candidate):
        frontend_dir = candidate
    else:
        candidate_sub = os.path.abspath(os.path.join(AGENT_DIR, "frontend"))
        if os.path.isdir(candidate_sub):
            frontend_dir = candidate_sub

if frontend_dir and os.path.isdir(frontend_dir):
    from fastapi.staticfiles import StaticFiles
    app.mount("/", StaticFiles(directory=frontend_dir, html=True), name="frontend")

if __name__ == "__main__":

    # Use the PORT environment variable provided by Cloud Run, defaulting to 8080
    uvicorn.run(app, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
