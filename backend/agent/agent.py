from google.adk.agents import LlmAgent
from .tools import (
    # Challenge 1-2
    fetch_all_products,
    fetch_product_by_name,
    fetch_incentives_by_zip_code,
    fetch_all_incentives,
    fetch_all_users,
    fetch_user_by_email,
    add_product,
    add_incentive,
    add_user,
    fetch_incentives_by_organization,
    update_product_incentive,
    delete_product_by_name,
    # Challenge 3
    get_incentive_product_count,
    get_total_incentives_by_org,
    get_user_count_by_zip_code,
    # Challenge 4
    get_last_updated_product,
    list_incentives_above_amount,
    get_org_with_most_high_value_incentives,
    # Challenge 5
    find_users_with_no_incentives,
    get_zip_code_with_highest_carbon_savings,
    get_org_with_best_cost_incentive_ratio,
)
from constants import AGENT_NAME, AGENT_DESCRIPTION, AGENT_MODEL

from . import prompt


root_agent = LlmAgent(
    name=AGENT_NAME,
    model=AGENT_MODEL,
    description=AGENT_DESCRIPTION,
    instruction=prompt.ROOT_AGENT_PROMPT,
    tools=[
        # Challenge 1-2
        fetch_all_products,
        fetch_product_by_name,
        fetch_incentives_by_zip_code,
        fetch_all_incentives,
        fetch_all_users,
        fetch_user_by_email,
        add_product,
        add_incentive,
        add_user,
        fetch_incentives_by_organization,
        update_product_incentive,
        delete_product_by_name,
        # Challenge 3
        get_incentive_product_count,
        get_total_incentives_by_org,
        get_user_count_by_zip_code,
        # Challenge 4
        get_last_updated_product,
        list_incentives_above_amount,
        get_org_with_most_high_value_incentives,
        # Challenge 5
        find_users_with_no_incentives,
        get_zip_code_with_highest_carbon_savings,
        get_org_with_best_cost_incentive_ratio,
    ],
)