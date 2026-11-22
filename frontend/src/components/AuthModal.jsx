import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Lock,
  Mail,
  User,
  MapPin,
  Eye,
  EyeOff,
  AlertCircle,
  ShieldCheck,
  CheckCircle,
  KeyRound,
} from "lucide-react";
import { api } from "../services/api";

const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

export default function AuthModal({
  isOpen,
  initialMode = "login",
  promptText = "",
  onClose,
  onAuthSuccess,
}) {
  const [mode, setMode] = useState(initialMode); // "login" | "register"
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Form fields
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [fullName, setFullName] = useState("");

  // Email verification OTP states
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  // Google OAuth states
  const [googleClientId, setGoogleClientId] = useState("");
  const googleModalBtnRef = useRef(null);

  useEffect(() => {
    setMode(initialMode);
    setError("");
    setSuccessMsg("");
  }, [initialMode, isOpen]);

  // Fetch Google client configuration
  useEffect(() => {
    api.auth
      .getGoogleConfig()
      .then((cfg) => {
        if (cfg && cfg.client_id) {
          setGoogleClientId(cfg.client_id);
        }
      })
      .catch(() => {});
  }, []);

  // Initialize official Google Identity Services in Modal
  useEffect(() => {
    if (isOpen && googleClientId && window.google && window.google.accounts) {
      try {
        window.google.accounts.id.initialize({
          client_id: googleClientId,
          callback: async (response) => {
            if (response.credential) {
              setLoading(true);
              setError("");
              try {
                const res = await api.auth.google({ id_token: response.credential });
                if (res && res.token) {
                  localStorage.setItem("eia_auth_token", res.token);
                  onAuthSuccess(res.user, res.token);
                  onClose();
                }
              } catch (err) {
                setError(err.message || "Google authentication rejected.");
              } finally {
                setLoading(false);
              }
            }
          },
        });

        if (googleModalBtnRef.current) {
          googleModalBtnRef.current.innerHTML = "";
          window.google.accounts.id.renderButton(googleModalBtnRef.current, {
            theme: "outline",
            size: "large",
            width: 380,
            text: "continue_with",
            shape: "rectangular",
          });
        }
      } catch (e) {
        console.warn("Google Identity initialization in modal error:", e);
      }
    }
  }, [isOpen, googleClientId, onAuthSuccess, onClose]);

  if (!isOpen) return null;

  // Request 6-digit OTP code to user's real email
  const handleSendOtp = async () => {
    setError("");
    setSuccessMsg("");
    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail)) {
      setError("Please provide a valid email address with a domain (e.g. name@domain.com).");
      return;
    }

    setOtpLoading(true);
    try {
      const res = await api.auth.sendOtp(trimmedEmail);
      setOtpSent(true);
      setSuccessMsg(res.message || `A 6-digit verification code has been dispatched to ${trimmedEmail}. Please check your inbox or spam folder.`);
    } catch (err) {
      setError(err.message || "Could not dispatch verification code. Please ensure the email address is valid.");
    } finally {
      setOtpLoading(false);
    }
  };

  // Verify the 6-digit OTP code from user's email
  const handleVerifyOtp = async () => {
    setError("");
    setSuccessMsg("");
    const trimmedEmail = email.trim().toLowerCase();
    const code = otpCode.trim();

    if (!code || code.length !== 6) {
      setError("Please enter the 6-digit verification code sent to your email.");
      return;
    }

    setOtpLoading(true);
    try {
      await api.auth.verifyOtp(trimmedEmail, code);
      setIsEmailVerified(true);
      setSuccessMsg("✓ Email ownership confirmed! Now create your password and username to complete registration.");
    } catch (err) {
      setError(err.message || "Verification code is incorrect or expired. Please check your inbox or resend code.");
    } finally {
      setOtpLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedEmail) {
      setError("Please provide your email address.");
      return;
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setError("Please enter a valid email address with a domain (e.g. name@domain.com).");
      return;
    }

    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (mode === "register" && !isEmailVerified) {
      setError("Email ownership must be verified before registration. Please click 'Send Code' and enter the 6-digit code sent to your email.");
      return;
    }

    setLoading(true);

    try {
      let res;
      if (mode === "register") {
        const trimmedUser = username.trim().toLowerCase();
        if (!trimmedUser || trimmedUser.length < 3) {
          throw new Error("Username must be between 3 and 30 characters.");
        }
        res = await api.auth.register({
          email: trimmedEmail,
          username: trimmedUser,
          password,
          zip_code: zipCode.trim() || "00000",
          full_name: fullName.trim() || trimmedUser,
          verification_code: otpCode.trim(),
        });
      } else {
        res = await api.auth.login({
          credential: trimmedEmail,
          password,
        });
      }

      if (res && res.token) {
        localStorage.setItem("eia_auth_token", res.token);
        onAuthSuccess(res.user, res.token);
        onClose();
      }
    } catch (err) {
      console.error("Auth error:", err);
      setError(err.message || "Authentication failed. Please verify credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleClick = () => {
    setError("");
    setSuccessMsg("");

    if (googleClientId && window.google && window.google.accounts) {
      window.google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
          const btn = googleModalBtnRef.current?.querySelector("div[role='button']");
          if (btn) btn.click();
        }
      });
    } else {
      setError("Google Sign-In requires GOOGLE_CLIENT_ID configured on the server. Please sign in or register with verified email below.");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(11, 33, 25, 0.65)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "1rem",
      }}
    >
      <div
        className="card animate-fade-in"
        style={{
          width: "100%",
          maxWidth: "460px",
          background: "#ffffff",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-xl)",
          padding: "2rem",
          position: "relative",
          maxHeight: "92vh",
          overflowY: "auto",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-muted)",
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
          <div
            style={{
              width: "3.2rem",
              height: "3.2rem",
              borderRadius: "var(--radius-md)",
              background: "linear-gradient(135deg, var(--emerald-50) 0%, var(--emerald-100) 100%)",
              border: "1px solid var(--border-medium)",
              color: "var(--emerald-800)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 0.75rem auto",
            }}
          >
            <Lock size={22} />
          </div>
          <h3 style={{ fontSize: "1.5rem", color: "var(--emerald-950)", marginBottom: "0.25rem", fontWeight: 700 }}>
            {mode === "login" ? "Sign In to Access" : "Create Verified Account"}
          </h3>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            {promptText ||
              (mode === "login"
                ? "Enter your credentials or use Google to access platform features."
                : "Verify your email to unlock AI energy advisor, ROI calculator and grants.")}
          </p>
        </div>

        {/* Google OAuth Section */}
        <div style={{ marginBottom: "1rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div ref={googleModalBtnRef} style={{ width: "100%", display: googleClientId ? "block" : "none" }} />

          {!googleClientId && (
            <button
              type="button"
              onClick={handleGoogleClick}
              disabled={loading}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                padding: "0.75rem 1rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid #dadce0",
                background: "#ffffff",
                color: "#3c4043",
                fontWeight: 600,
                fontSize: "0.9375rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: "0 1px 3px rgba(60,64,67,0.08)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f8f9fa")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
            >
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path
                  fill="#4285F4"
                  d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.616z"
                />
                <path
                  fill="#34A853"
                  d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
                />
                <path
                  fill="#FBBC05"
                  d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z"
                />
                <path
                  fill="#EA4335"
                  d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z"
                />
              </svg>
              Continue with Google
            </button>
          )}
        </div>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0.75rem 0 1rem 0",
            color: "var(--text-subtle)",
            fontSize: "0.75rem",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "var(--border-subtle)" }} />
          <span style={{ padding: "0 0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
            or with verified email credentials
          </span>
          <div style={{ flex: 1, height: "1px", background: "var(--border-subtle)" }} />
        </div>

        {/* Mode Switcher Tabs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            background: "var(--bg-canvas)",
            padding: "0.25rem",
            borderRadius: "var(--radius-md)",
            marginBottom: "1.25rem",
          }}
        >
          <button
            type="button"
            onClick={() => {
              setMode("login");
              setError("");
              setSuccessMsg("");
            }}
            style={{
              padding: "0.5rem",
              borderRadius: "calc(var(--radius-md) - 2px)",
              border: "none",
              fontWeight: 600,
              fontSize: "0.875rem",
              cursor: "pointer",
              background: mode === "login" ? "#ffffff" : "transparent",
              color: mode === "login" ? "var(--emerald-900)" : "var(--text-muted)",
              boxShadow: mode === "login" ? "var(--shadow-sm)" : "none",
            }}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setMode("register");
              setError("");
              setSuccessMsg("");
            }}
            style={{
              padding: "0.5rem",
              borderRadius: "calc(var(--radius-md) - 2px)",
              border: "none",
              fontWeight: 600,
              fontSize: "0.875rem",
              cursor: "pointer",
              background: mode === "register" ? "#ffffff" : "transparent",
              color: mode === "register" ? "var(--emerald-900)" : "var(--text-muted)",
              boxShadow: mode === "register" ? "var(--shadow-sm)" : "none",
            }}
          >
            Create Account
          </button>
        </div>

        {/* Feedback Messages */}
        {error && (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.5rem",
              padding: "0.75rem",
              borderRadius: "var(--radius-md)",
              backgroundColor: "var(--danger-soft)",
              color: "var(--danger)",
              fontSize: "0.8125rem",
              marginBottom: "1rem",
              border: "1px solid rgba(207, 60, 60, 0.2)",
              lineHeight: 1.4,
            }}
          >
            <AlertCircle size={16} style={{ flexShrink: 0, marginTop: "2px" }} />
            <span>{error}</span>
          </div>
        )}

        {successMsg && (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.5rem",
              padding: "0.75rem",
              borderRadius: "var(--radius-md)",
              backgroundColor: "var(--emerald-50)",
              color: "var(--emerald-900)",
              fontSize: "0.8125rem",
              marginBottom: "1rem",
              border: "1px solid var(--border-medium)",
              lineHeight: 1.4,
            }}
          >
            <CheckCircle size={16} color="var(--emerald-700)" style={{ flexShrink: 0, marginTop: "2px" }} />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Credentials Form */}
        <form onSubmit={handleSubmit}>
          {/* Email field + OTP Verification */}
          <div className="form-group" style={{ marginBottom: "0.875rem" }}>
            <label className="form-label" style={{ fontSize: "0.8125rem" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <Mail size={13} /> {mode === "register" ? "Email Address" : "Email Address"}
                </span>
                {mode === "register" && isEmailVerified && (
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--emerald-700)",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.2rem",
                    }}
                  >
                    <CheckCircle size={12} /> Verified
                  </span>
                )}
              </span>
            </label>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="email"
                required
                disabled={mode === "register" && isEmailVerified}
                className="form-input"
                style={{ padding: "0.65rem 0.875rem", flex: 1 }}
                placeholder="name@company.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (mode === "register") {
                    setIsEmailVerified(false);
                    setOtpSent(false);
                  }
                }}
              />
              {mode === "register" && !isEmailVerified && (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={otpLoading || !email}
                  className="btn btn-secondary"
                  style={{
                    padding: "0 0.85rem",
                    fontSize: "0.8125rem",
                    whiteSpace: "nowrap",
                    fontWeight: 600,
                  }}
                >
                  {otpLoading ? "Sending..." : otpSent ? "Resend" : "Send Code"}
                </button>
              )}
            </div>
            {mode === "register" && !isEmailVerified && (
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem", display: "block" }}>
                A 6-digit verification code will be sent to your real inbox to prove ownership.
              </span>
            )}
          </div>

          {/* OTP Input box when sent */}
          {mode === "register" && otpSent && !isEmailVerified && (
            <div
              style={{
                marginBottom: "0.875rem",
                padding: "0.75rem",
                borderRadius: "var(--radius-md)",
                background: "var(--emerald-50)",
                border: "1px dashed var(--emerald-400)",
              }}
            >
              <label
                className="form-label"
                style={{ fontSize: "0.8125rem", color: "var(--emerald-950)", marginBottom: "0.35rem" }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <KeyRound size={13} color="var(--emerald-700)" /> Enter 6-Digit Code from Email
                </span>
              </label>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <input
                  type="text"
                  maxLength={6}
                  className="form-input"
                  style={{
                    padding: "0.55rem 0.75rem",
                    letterSpacing: "0.2em",
                    fontWeight: 700,
                    fontSize: "1rem",
                    textAlign: "center",
                    flex: 1,
                    background: "#ffffff",
                  }}
                  placeholder="123456"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ""))}
                />
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  disabled={otpLoading || otpCode.length !== 6}
                  className="btn btn-primary"
                  style={{ padding: "0 1rem", fontSize: "0.8125rem" }}
                >
                  {otpLoading ? "Checking..." : "Verify Code"}
                </button>
              </div>
            </div>
          )}

          {/* Register-only additional fields */}
          {mode === "register" && (
            <>
              <div className="form-group" style={{ marginBottom: "0.875rem" }}>
                <label className="form-label" style={{ fontSize: "0.8125rem" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                    <User size={13} /> Username
                  </span>
                </label>
                <input
                  type="text"
                  required
                  className="form-input"
                  style={{ padding: "0.65rem 0.875rem" }}
                  placeholder="e.g. suhash25"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem", marginBottom: "0.875rem" }}>
                <div>
                  <label className="form-label" style={{ fontSize: "0.8125rem" }}>Full Name</label>
                  <input
                    type="text"
                    className="form-input"
                    style={{ padding: "0.65rem 0.875rem" }}
                    placeholder="Suhas G"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="form-label" style={{ fontSize: "0.8125rem" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      <MapPin size={12} /> ZIP Code
                    </span>
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    style={{ padding: "0.65rem 0.875rem" }}
                    placeholder="e.g. 560001"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}

          {/* Password field */}
          <div className="form-group" style={{ marginBottom: "1.25rem" }}>
            <label className="form-label" style={{ fontSize: "0.8125rem" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <Lock size={13} /> Password
              </span>
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                required
                className="form-input"
                style={{ padding: "0.65rem 2.25rem 0.65rem 0.875rem" }}
                placeholder="At least 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "0.65rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--text-muted)",
                }}
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || (mode === "register" && !isEmailVerified)}
            className="btn btn-primary"
            style={{
              width: "100%",
              padding: "0.75rem",
              fontSize: "0.9375rem",
              opacity: mode === "register" && !isEmailVerified ? 0.6 : 1,
              cursor: mode === "register" && !isEmailVerified ? "not-allowed" : "pointer",
            }}
          >
            {loading ? (
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                <ShieldCheck size={16} /> Verifying Credentials...
              </span>
            ) : mode === "register" ? (
              isEmailVerified ? "Complete Verified Registration" : "Verify Email Above to Register"
            ) : (
              "Sign In to Account"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
