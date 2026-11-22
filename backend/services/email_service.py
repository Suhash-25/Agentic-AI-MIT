import os
import re
import smtplib
import logging
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Tuple, Optional
from fastapi import HTTPException

try:
    import dns.resolver
    DNS_AVAILABLE = True
except ImportError:
    DNS_AVAILABLE = False

logger = logging.getLogger("clean_energy.email")
logging.basicConfig(level=logging.INFO)

EMAIL_REGEX = re.compile(
    r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
)

# Common disposable/temporary email domains to block
DISPOSABLE_DOMAINS = {
    "mailinator.com", "guerrillamail.com", "tempmail.com", "10minutemail.com",
    "sharklasers.com", "yopmail.com", "dispostable.com", "trashmail.com",
    "fakeinbox.com", "getairmail.com", "throwawaymail.com"
}


def validate_email_address(email: str) -> Tuple[bool, str]:
    """
    Strict validation of email address:
    1. RFC regex check
    2. Disposable email block
    3. DNS MX record validation (checks if the domain has real mail exchangers)
    """
    email = email.strip().lower()
    if not email:
        return False, "Email address is required."

    if not EMAIL_REGEX.match(email):
        return False, "Invalid email address format (e.g. name@domain.com)."

    parts = email.split("@")
    if len(parts) != 2:
        return False, "Invalid email address structure."

    domain = parts[1]

    # Block disposable email services
    if domain in DISPOSABLE_DOMAINS:
        return False, f"The email provider '@{domain}' is not accepted. Please use a legitimate email provider."

    # DNS MX lookup with fallback to reliable public DNS
    if DNS_AVAILABLE:
        try:
            resolver = dns.resolver.Resolver()
            resolver.nameservers = ["8.8.8.8", "1.1.1.1", "8.8.4.4"]
            resolver.timeout = 2.5
            resolver.lifetime = 2.5
            # Check MX records
            mx_answers = resolver.resolve(domain, "MX")
            if not mx_answers:
                return False, f"The domain '@{domain}' cannot receive emails (no MX records found)."
        except dns.resolver.NXDOMAIN:
            return False, f"The email domain '@{domain}' does not exist. Please check your spelling."
        except dns.resolver.NoAnswer:
            # Check for fallback A record
            try:
                a_answers = resolver.resolve(domain, "A")
                if not a_answers:
                    return False, f"The email domain '@{domain}' has no active mail server."
            except Exception:
                return False, f"The email domain '@{domain}' has no active mail or web host."
        except (dns.resolver.Timeout, Exception) as e:
            # In case DNS servers are unreachable from container/sandbox, log and allow legitimate common domains
            logger.warning(f"DNS lookup warning for {domain}: {e}")

    return True, "Valid"


def send_otp_email(to_email: str, code: str) -> bool:
    """
    Sends a high-grade HTML verification email to the user.
    If SMTP credentials are provided in environment variables, sends via SMTP.
    If not configured, logs to server console for developer verification.
    """
    smtp_host = os.getenv("SMTP_HOST", "smtp.gmail.com")
    smtp_port = int(os.getenv("SMTP_PORT", "587"))
    smtp_user = os.getenv("SMTP_USER", "").strip()
    smtp_password = os.getenv("SMTP_PASSWORD", "").strip()
    smtp_from_email = os.getenv("SMTP_FROM_EMAIL", smtp_user or "noreply@cleanenergy-eia.org").strip()
    smtp_from_name = os.getenv("SMTP_FROM_NAME", "Clean Energy Advisory Platform").strip()

    subject = f"Your Verification Code: {code} - Clean Energy Advisory"

    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Email Verification</title>
      <style>
        body {{
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          background-color: #f6f9f7;
          margin: 0;
          padding: 30px 10px;
          color: #123d2f;
        }}
        .container {{
          max-width: 540px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid #d2e4dc;
          box-shadow: 0 4px 16px rgba(14, 56, 43, 0.06);
          overflow: hidden;
        }}
        .header {{
          background: linear-gradient(135deg, #0e382b 0%, #1b5e43 100%);
          padding: 28px 24px;
          text-align: center;
          color: #ffffff;
        }}
        .header h1 {{
          margin: 0;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }}
        .header p {{
          margin: 6px 0 0 0;
          font-size: 13px;
          color: #9fe2c8;
        }}
        .content {{
          padding: 32px 28px;
          text-align: center;
        }}
        .title {{
          font-size: 18px;
          font-weight: 600;
          color: #0b2119;
          margin-bottom: 12px;
        }}
        .desc {{
          font-size: 14px;
          line-height: 1.6;
          color: #48695d;
          margin-bottom: 24px;
        }}
        .code-box {{
          background: #f0f7f3;
          border: 2px dashed #2ea37d;
          border-radius: 10px;
          padding: 18px;
          margin: 20px 0;
          display: inline-block;
          min-width: 220px;
        }}
        .code {{
          font-size: 34px;
          font-weight: 800;
          letter-spacing: 6px;
          color: #0e382b;
          font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
        }}
        .validity {{
          font-size: 12px;
          color: #55756a;
          margin-top: 6px;
        }}
        .warning {{
          font-size: 12px;
          color: #7b8f87;
          border-top: 1px solid #e7efe9;
          padding-top: 20px;
          margin-top: 24px;
          line-height: 1.5;
        }}
        .footer {{
          background: #fcfdfc;
          border-top: 1px solid #e7efe9;
          padding: 16px;
          text-align: center;
          font-size: 11px;
          color: #8aa096;
        }}
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Clean Energy Advisory Platform</h1>
          <p>Intelligence Architecture &amp; Enterprise Transition</p>
        </div>
        <div class="content">
          <div class="title">Verify Your Email Address</div>
          <div class="desc">
            Use the following one-time verification code to confirm ownership of <strong>{to_email}</strong> and complete your registration.
          </div>
          <div class="code-box">
            <div class="code">{code}</div>
            <div class="validity">Expires in 10 minutes</div>
          </div>
          <div class="warning">
            Never share this code with anyone. If you did not initiate this registration, please disregard this email.
          </div>
        </div>
        <div class="footer">
          &copy; Clean Energy Intelligence Architecture &bull; Official Advisory Platform
        </div>
      </div>
    </body>
    </html>
    """

    plain_content = f"""Clean Energy Advisory Platform - Email Verification

Your one-time email verification code is: {code}

This code will expire in 10 minutes.
Enter this code in the registration form to verify your email address.

If you did not request this code, please ignore this email.
"""

    # If SMTP is configured, send the live email
    if smtp_user and smtp_password:
        try:
            msg = MIMEMultipart("alternative")
            msg["Subject"] = subject
            msg["From"] = f"{smtp_from_name} <{smtp_from_email}>"
            msg["To"] = to_email

            part1 = MIMEText(plain_content, "plain")
            part2 = MIMEText(html_content, "html")
            msg.attach(part1)
            msg.attach(part2)

            if smtp_port == 465:
                server = smtplib.SMTP_SSL(smtp_host, smtp_port, timeout=10)
            else:
                server = smtplib.SMTP(smtp_host, smtp_port, timeout=10)
                server.starttls()

            server.login(smtp_user, smtp_password)
            server.send_message(msg)
            server.quit()
            logger.info(f"✓ Real email successfully dispatched via SMTP to {to_email}")
            return True
        except Exception as e:
            logger.error(f"SMTP delivery failed to {to_email}: {e}")
            # Raise an informative error so the client knows SMTP delivery had an issue
            raise HTTPException(
                status_code=502,
                detail=f"Failed to dispatch verification email to {to_email}: {str(e)}. Please verify your SMTP settings."
            )
    else:
        # Developer/Console Mode:
        # Securely log to the server console only (never in API response)
        logger.info(
            f"\n"
            f"==========================================================\n"
            f"[EMAIL SERVICE DISPATCH] (SMTP_USER/SMTP_PASSWORD not configured)\n"
            f"To: {to_email}\n"
            f"Code: {code}\n"
            f"Subject: {subject}\n"
            f"To send real live emails, set SMTP_USER and SMTP_PASSWORD in .env or Railway variables.\n"
            f"==========================================================\n"
        )
        return True
