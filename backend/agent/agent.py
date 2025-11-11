from google.adk.agents import LlmAgent
from .tools import (
    fetch_all_products,
    fetch_product_by_name,
    fetch_incentives_by_zip_code,
    fetch_all_incentives,
    fetch_all_users,
    fetch_user_by_email,
)
from constants import AGENT_NAME, AGENT_DESCRIPTION, AGENT_MODEL

from . import prompt


root_agent = LlmAgent(
    name=AGENT_NAME,
    model=AGENT_MODEL,
    description=AGENT_DESCRIPTION,
    instruction=prompt.ROOT_AGENT_PROMPT,
    tools=[
        fetch_all_products,
        fetch_product_by_name,
        fetch_all_incentives,
        fetch_incentives_by_zip_code,
        fetch_all_users,
        fetch_user_by_email,
    ],
)
