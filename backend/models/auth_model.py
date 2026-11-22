from pydantic import BaseModel
from typing import Optional, Dict, Any


class SendOtpRequest(BaseModel):
    email: str


class VerifyOtpRequest(BaseModel):
    email: str
    code: str


class UserRegisterRequest(BaseModel):
    email: str
    username: str
    password: str
    zip_code: Optional[str] = "00000"
    full_name: Optional[str] = None
    verification_code: Optional[str] = None


class UserLoginRequest(BaseModel):
    credential: str  # email or username
    password: str


class GoogleAuthRequest(BaseModel):
    id_token: str
    email: Optional[str] = None
    name: Optional[str] = None
    picture: Optional[str] = None
    sub: Optional[str] = None


class AuthResponse(BaseModel):
    token: str
    token_type: str = "bearer"
    user: Dict[str, Any]
