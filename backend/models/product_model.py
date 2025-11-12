from pydantic import BaseModel, ConfigDict, Field
from datetime import datetime
from typing import Optional


class Product(BaseModel):
    model_config = ConfigDict(json_encoders={datetime: lambda dt: dt.isoformat()})
    id: str
    name: str
    description: str
    carbon_savings: str
    incentive: str
    price: str
    last_updated: Optional[str] = Field(default=None)
