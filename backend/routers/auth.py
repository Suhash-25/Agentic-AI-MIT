from fastapi import APIRouter, HTTPException, Header, status
from typing import Optional
from models.auth_model import (
    UserRegisterRequest,
    UserLoginRequest,
    GoogleAuthRequest,
    AuthResponse,
)
from services.auth_service import AuthService, GOOGLE_CLIENT_ID
from repo.user_repo import UserRepo
from constants import DB_NAME

router = APIRouter()
user_repo = UserRepo(DB_NAME)
auth_service = AuthService(user_repo)


@router.post("/register", response_model=AuthResponse, status_code=status.HTTP_201_CREATED)
async def register_endpoint(payload: UserRegisterRequest):
    """Registers a new user with email, username, and password."""
    result = await auth_service.register(
        email=payload.email,
        username=payload.username,
        password=payload.password,
        zip_code=payload.zip_code,
        full_name=payload.full_name,
    )
    return result


@router.post("/login", response_model=AuthResponse)
async def login_endpoint(payload: UserLoginRequest):
    """Authenticates a user with credential (email or username) and password."""
    result = await auth_service.login(
        credential=payload.credential,
        password=payload.password,
    )
    return result


@router.post("/google", response_model=AuthResponse)
async def google_auth_endpoint(payload: GoogleAuthRequest):
    """Cryptographically verifies real Google OAuth ID token."""
    result = await auth_service.authenticate_google(
        id_token=payload.id_token,
        email=payload.email,
        name=payload.name,
        picture=payload.picture,
        sub=payload.sub,
    )
    return result


@router.get("/me")
async def get_current_user_endpoint(authorization: Optional[str] = Header(None)):
    """Verifies token and returns the current user profile."""
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing or invalid Authorization header")

    token = authorization.split(" ")[1]
    payload = AuthService.verify_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Token has expired or is invalid")

    email = payload.get("sub")
    user = await user_repo.get_user_by_email(email)
    return {
        "email": user.email,
        "username": user.username or user.email.split("@")[0],
        "zip_code": user.zip_code,
        "full_name": user.full_name or "",
        "avatar_url": user.avatar_url or "",
        "provider": user.provider or "local",
        "created_at": user.created_at,
    }


@router.get("/google-config")
async def get_google_config():
    """Returns Google OAuth Client configuration."""
    return {
        "client_id": GOOGLE_CLIENT_ID,
        "enabled": bool(GOOGLE_CLIENT_ID),
        "supported_scopes": ["openid", "email", "profile"],
    }
