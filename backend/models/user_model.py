from pydantic import BaseModel, ConfigDict
from datetime import datetime


class User(BaseModel):
    model_config = ConfigDict(json_encoders={datetime: lambda dt: dt.isoformat()})
    email: str
    zip_code: str
