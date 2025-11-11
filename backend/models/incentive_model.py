from pydantic import BaseModel, ConfigDict
from datetime import datetime


class Incentive(BaseModel):
    model_config = ConfigDict(json_encoders={datetime: lambda dt: dt.isoformat()})
    id: str
    total_incentive: str
    org: str
    zip_code: str
