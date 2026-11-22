import os
import time
import json
import base64
import hmac
import hashlib
import secrets
import re
import urllib.request
import urllib.parse
from typing import Optional, Dict, Any, Tuple
from fastapi import HTTPException
from repo.user_repo import UserRepo

AUTH_SECRET = os.environ.get("AUTH_SECRET_KEY", "clean-energy-insights-secure-key-2025")
GOOGLE_CLIENT_ID = os.environ.get("GOOGLE_CLIENT_ID", "")

# Strict format regex
EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")
USERNAME_REGEX = re.compile(r"^[a-zA-Z0-9_]{3,30}$")


class AuthService:
    def __init__(self, user_repo: UserRepo):
        self.user_repo = user_repo

    @staticmethod
    def hash_password(password: str, salt: Optional[str] = None) -> Tuple[str, str]:
        """Hash password using PBKDF2-HMAC-SHA256 with 100,000 iterations."""
        if not salt:
            salt = secrets.token_hex(16)
        salt_bytes = bytes.fromhex(salt)
        pwd_hash = hashlib.pbkdf2_hmac(
            "sha256", password.encode("utf-8"), salt_bytes, 100000
        ).hex()
        return pwd_hash, salt

    @staticmethod
    def verify_password(password: str, stored_hash: str, salt: str) -> bool:
        """Constant-time verification of password against hash."""
        if not stored_hash or not salt:
            return False
        try:
            salt_bytes = bytes.fromhex(salt)
            calc_hash = hashlib.pbkdf2_hmac(
                "sha256", password.encode("utf-8"), salt_bytes, 100000
            ).hex()
            return hmac.compare_digest(calc_hash, stored_hash)
        except Exception:
            return False

    @staticmethod
    def _b64encode(data: bytes) -> str:
        return base64.urlsafe_b64encode(data).decode("utf-8").rstrip("=")

    @staticmethod
    def _b64decode(s: str) -> bytes:
        padding = 4 - (len(s) % 4)
        if padding != 4:
            s += "=" * padding
        return base64.urlsafe_b64decode(s)

    @classmethod
    def create_token(cls, user_data: Dict[str, Any], expires_in_sec: int = 86400 * 7) -> str:
        """Create a signed JWT-compatible HMAC token."""
        header = {"alg": "HS256", "typ": "JWT"}
        payload = {
            "sub": user_data.get("email"),
            "username": user_data.get("username"),
            "name": user_data.get("full_name"),
            "zip_code": user_data.get("zip_code"),
            "avatar": user_data.get("avatar_url"),
            "provider": user_data.get("provider", "local"),
            "iat": int(time.time()),
            "exp": int(time.time()) + expires_in_sec,
        }

        h_bytes = cls._b64encode(json.dumps(header).encode("utf-8"))
        p_bytes = cls._b64encode(json.dumps(payload).encode("utf-8"))
        signing_input = f"{h_bytes}.{p_bytes}"
        sig = hmac.new(
            AUTH_SECRET.encode("utf-8"), signing_input.encode("utf-8"), hashlib.sha256
        ).digest()
        s_bytes = cls._b64encode(sig)

        return f"{signing_input}.{s_bytes}"

    @classmethod
    def verify_token(cls, token: str) -> Optional[Dict[str, Any]]:
        """Verify signature and expiration of token."""
        try:
            parts = token.split(".")
            if len(parts) != 3:
                return None
            h_b64, p_b64, s_b64 = parts
            signing_input = f"{h_b64}.{p_b64}"
            expected_sig = hmac.new(
                AUTH_SECRET.encode("utf-8"), signing_input.encode("utf-8"), hashlib.sha256
            ).digest()
            actual_sig = cls._b64decode(s_b64)

            if not hmac.compare_digest(expected_sig, actual_sig):
                return None

            payload_raw = cls._b64decode(p_b64)
            payload = json.loads(payload_raw.decode("utf-8"))

            if payload.get("exp", 0) < int(time.time()):
                return None

            return payload
        except Exception:
            return None

    @staticmethod
    def verify_google_id_token(id_token: str) -> Dict[str, Any]:
        """Cryptographically verifies a Google ID token against Google's OAuth2 API."""
        if not id_token or len(id_token) < 20:
            raise HTTPException(
                status_code=401,
                detail="Google OAuth authentication failed: Missing or invalid Google token.",
            )

        token_url = f"https://oauth2.googleapis.com/tokeninfo?id_token={urllib.parse.quote(id_token)}"
        try:
            req = urllib.request.Request(
                token_url,
                headers={"User-Agent": "CleanEnergyInsights-Auth/2.0"},
            )
            with urllib.request.urlopen(req, timeout=10) as resp:
                data = json.loads(resp.read().decode("utf-8"))
        except urllib.error.HTTPError as e:
            err_msg = "Google token verification failed"
            try:
                err_data = json.loads(e.read().decode("utf-8"))
                err_msg = err_data.get("error_description", err_msg)
            except Exception:
                pass
            raise HTTPException(
                status_code=401,
                detail=f"Google OAuth rejected: {err_msg}. Only authentic, verified Google accounts can sign in.",
            )
        except Exception as e:
            raise HTTPException(
                status_code=401,
                detail=f"Unable to reach Google OAuth service: {str(e)}",
            )

        # Validate issuer
        iss = data.get("iss", "")
        if iss not in ["accounts.google.com", "https://accounts.google.com"]:
            raise HTTPException(
                status_code=401,
                detail="Invalid Google token: Issuer mismatch.",
            )

        email = data.get("email")
        email_verified = data.get("email_verified")
        if not email or str(email_verified).lower() not in ["true", "1"]:
            raise HTTPException(
                status_code=401,
                detail="Google account email is not verified or could not be found.",
            )

        return data

    async def register(
        self,
        email: str,
        username: str,
        password: str,
        zip_code: str = "00000",
        full_name: Optional[str] = None,
    ) -> Dict[str, Any]:
        """Strictly validate and register a new local user."""
        email = email.strip().lower()
        username = username.strip().lower()

        # 1. Strict Email Check
        if not email or not EMAIL_REGEX.match(email):
            raise HTTPException(
                status_code=400,
                detail="Invalid email format. Please provide a valid email address with a domain (e.g. name@domain.com).",
            )

        # 2. Strict Username Check
        if not username or not USERNAME_REGEX.match(username):
            raise HTTPException(
                status_code=400,
                detail="Username must be between 3 and 30 characters and contain only letters, numbers, or underscores.",
            )

        # 3. Password Check
        if not password or len(password) < 6:
            raise HTTPException(
                status_code=400,
                detail="Password must be at least 6 characters long.",
            )

        # 4. Check if account already exists
        existing_email = await self.user_repo.get_user_auth_by_credential(email)
        if existing_email:
            raise HTTPException(
                status_code=409,
                detail="An account with this email is already registered. Please sign in instead.",
            )

        existing_user = await self.user_repo.get_user_auth_by_credential(username)
        if existing_user:
            raise HTTPException(
                status_code=409,
                detail="This username is already taken. Please choose another username.",
            )

        pwd_hash, salt = self.hash_password(password)
        avatar = f"https://api.dicebear.com/7.x/bottts/svg?seed={username}"

        user = await self.user_repo.create_user_with_auth(
            email=email,
            username=username,
            password_hash=pwd_hash,
            salt=salt,
            zip_code=zip_code or "00000",
            full_name=full_name or username.capitalize(),
            avatar_url=avatar,
            provider="local",
        )

        token = self.create_token(user)
        return {
            "token": token,
            "token_type": "bearer",
            "user": user,
        }

    async def login(self, credential: str, password: str) -> Dict[str, Any]:
        """Strictly authenticate user. Rejects non-existent accounts or bad passwords."""
        credential = credential.strip()
        if not credential:
            raise HTTPException(status_code=400, detail="Please enter your email or username.")
        if not password:
            raise HTTPException(status_code=400, detail="Please enter your password.")

        if "@" in credential and not EMAIL_REGEX.match(credential.lower()):
            raise HTTPException(
                status_code=400,
                detail="Invalid email format. Please check the spelling of your email address.",
            )

        user_auth = await self.user_repo.get_user_auth_by_credential(credential)
        if not user_auth:
            raise HTTPException(
                status_code=404,
                detail=f"No account found for '{credential}'. Please check your spelling or register a new account.",
            )

        # If user registered via OAuth only and has no password
        if not user_auth.get("password_hash") or not user_auth.get("salt"):
            raise HTTPException(
                status_code=400,
                detail=f"This account was registered using Google Sign-In. Please sign in with your Google account.",
            )

        if not self.verify_password(password, user_auth["password_hash"], user_auth["salt"]):
            raise HTTPException(
                status_code=401,
                detail="Incorrect password. Please verify your password and try again.",
            )

        user_info = {
            "email": user_auth["email"],
            "username": user_auth.get("username") or user_auth["email"].split("@")[0],
            "zip_code": user_auth.get("zip_code") or "00000",
            "full_name": user_auth.get("full_name") or "",
            "avatar_url": user_auth.get("avatar_url") or "",
            "provider": user_auth.get("provider") or "local",
            "created_at": user_auth.get("created_at"),
        }

        token = self.create_token(user_info)
        return {
            "token": token,
            "token_type": "bearer",
            "user": user_info,
        }

    async def authenticate_google(
        self,
        id_token: str,
        email: Optional[str] = None,
        name: Optional[str] = None,
        picture: Optional[str] = None,
        sub: Optional[str] = None,
    ) -> Dict[str, Any]:
        """Cryptographically verifies Google ID Token. Rejects fake/forged tokens."""
        if not id_token:
            raise HTTPException(
                status_code=400,
                detail="Google OAuth requires an authentic ID token from Google Sign-In.",
            )

        # Real verification with Google OAuth2 servers
        verified_data = self.verify_google_id_token(id_token)

        verified_email = verified_data["email"].strip().lower()
        verified_name = verified_data.get("name") or verified_email.split("@")[0].capitalize()
        verified_picture = (
            verified_data.get("picture")
            or f"https://api.dicebear.com/7.x/initials/svg?seed={verified_email}"
        )

        user = await self.user_repo.upsert_oauth_user(
            email=verified_email,
            full_name=verified_name,
            avatar_url=verified_picture,
            provider="google",
        )

        token = self.create_token(user)
        return {
            "token": token,
            "token_type": "bearer",
            "user": user,
        }
