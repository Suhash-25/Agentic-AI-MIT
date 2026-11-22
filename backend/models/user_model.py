from pydantic import BaseModel, ConfigDict
from datetime import datetime
from typing import Optional


class User(BaseModel):
    model_config = ConfigDict(json_encoders={datetime: lambda dt: dt.isoformat()})
    email: str
    zip_code: str = "00000"
    username: Optional[str] = None
    full_name: Optional[str] = None
    avatar_url: Optional[str] = None
    provider: Optional[str] = "local"
    created_at: Optional[str] = None
