import os

# Agent details
AGENT_NAME = "energy_saving_agent"
AGENT_DESCRIPTION = "ESA is an agent that helps users explore clean energy appliances, incentives and rebates in an area and more."
AGENT_MODEL = os.environ.get("AGENT_MODEL", "gemini-2.5-flash")

# DB Details
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_NAME = os.path.join(BASE_DIR, "clean_energy.db")
INCENTIVE_TABLE_NAME = "incentives"
PRODUCTS_TABLE_NAME = "products"
USER_TABLE_NAME = "users"
