from pydantic import BaseModel, ConfigDict
from datetime import datetime


class Product(BaseModel):
    model_config = ConfigDict(json_encoders={datetime: lambda dt: dt.isoformat()})
    id: str
    name: str
    description: str
    carbon_savings: str
    incentive: str
    price: str
