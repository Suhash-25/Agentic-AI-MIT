import React, { useState, useEffect, useRef } from "react";
import {
  Lock,
  Mail,
  User,
  MapPin,
  Eye,
  EyeOff,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  KeyRound,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { api } from "../services/api";

const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

export default function LandingAuthGateway({ onAuthSuccess }) {
  const [mode, setMode] = useState("login"); // "login" | "register"
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
  const [issuedCode, setIssuedCode] = useState("");

  // Google OAuth states
  const [googleClientId, setGoogleClientId] = useState("");
  const [showGoogleHelp, setShowGoogleHelp] = useState(false);
  const googleBtnRef = useRef(null);

  // Fetch Google config
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

  // Initialize official Google Identity Services
  useEffect(() => {
    if (googleClientId && window.google && window.google.accounts) {
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
                }
              } catch (err) {
                setError(err.message || "Google authentication rejected.");
              } finally {
                setLoading(false);
              }
            }
          },
        });

        if (googleBtnRef.current) {
          googleBtnRef.current.innerHTML = "";
          window.google.accounts.id.renderButton(googleBtnRef.current, {
            theme: "outline",
            size: "large",
            width: 380,
            text: "continue_with",
            shape: "rectangular",
          });
        }
      } catch (e) {
        console.warn("Google Identity error:", e);
      }
    }
  }, [googleClientId, onAuthSuccess]);

  // Request 6-digit OTP code
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
      if (res.verification_code) {
        setIssuedCode(res.verification_code);
        setSuccessMsg(`Verification code sent! Code: ${res.verification_code}`);
      } else {
        setSuccessMsg(`A 6-digit verification code has been dispatched to ${trimmedEmail}.`);
      }
    } catch (err) {
      setError(err.message || "Could not generate verification code.");
    } finally {
      setOtpLoading(false);
    }
  };

  // Verify the 6-digit OTP code
  const handleVerifyOtp = async () => {
    setError("");
    setSuccessMsg("");
    const trimmedEmail = email.trim().toLowerCase();
    const code = otpCode.trim();

    if (!code || code.length !== 6) {
      setError("Please enter the full 6-digit verification code.");
      return;
    }

    setOtpLoading(true);
    try {
      await api.auth.verifyOtp(trimmedEmail, code);
      setIsEmailVerified(true);
      setSuccessMsg("✓ Email ownership confirmed! Complete the fields below to register.");
    } catch (err) {
      setError(err.message || "Verification code is incorrect or expired.");
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
      setError("Please enter your email address.");
      return;
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setError("Please enter a valid email address (e.g. name@domain.com).");
      return;
    }

    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (mode === "register" && !isEmailVerified) {
      setError("Email ownership must be verified before registration. Please verify with the 6-digit code.");
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
      }
    } catch (err) {
      console.error("Auth error:", err);
      setError(err.message || "Authentication failed. Please check credentials.");
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
          const btn = googleBtnRef.current?.querySelector("div[role='button']");
          if (btn) btn.click();
        }
      });
    } else {
      setShowGoogleHelp(!showGoogleHelp);
    }
  };

  return (
    <section
      id="auth-gateway"
      style={{
        padding: "4rem 0",
        background: "radial-gradient(ellipse at 50% 0%, rgba(85, 207, 168, 0.09) 0%, rgba(246, 249, 247, 0) 80%)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "2.5rem",
            alignItems: "center",
          }}
        >
          {/* Left Pitch */}
          <div>
            <div
              className="badge badge-emerald"
              style={{ marginBottom: "1rem", padding: "0.3rem 0.75rem" }}
            >
              <ShieldCheck size={14} /> Verified Energy Intelligence Access
            </div>
            <h2 style={{ fontSize: "2.35rem", color: "var(--emerald-950)", lineHeight: 1.2, marginBottom: "1rem" }}>
              Authenticate to Unlock Your Applied Energy Suite
            </h2>
            <p style={{ color: "var(--text-body)", fontSize: "1.0625rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              Access the autonomous Gemini 2.5 Energy Agent, certified regional incentive database, and live carbon offset modeling with verified credentials.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9375rem", color: "var(--text-main)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--emerald-600)", fontWeight: 800 }}>✓</span>
                <span>Cryptographic verification: Only real, verified emails can register</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--emerald-600)", fontWeight: 800 }}>✓</span>
                <span>Strict account existence checks on sign-in (no fake bypasses)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--emerald-600)", fontWeight: 800 }}>✓</span>
                <span>6-Digit Verification Code (OTP) for instant identity proof</span>
              </div>
            </div>
          </div>

          {/* Right Auth Box */}
          <div
            className="card"
            style={{
              background: "#ffffff",
              padding: "2rem",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-xl)",
              border: "1px solid var(--border-medium)",
            }}
          >
            {/* Google OAuth Section */}
            <div style={{ marginBottom: "1.25rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div ref={googleBtnRef} style={{ width: "100%", display: googleClientId ? "block" : "none" }} />

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
                  <span>Continue with Google</span>
                  {showGoogleHelp ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              )}

              {/* Google OAuth Help / Configuration Dropdown */}
              {showGoogleHelp && (
                <div
                  className="card animate-fade-in"
                  style={{
                    marginTop: "0.75rem",
                    padding: "1rem",
                    background: "var(--bg-canvas)",
                    fontSize: "0.8125rem",
                    border: "1px solid var(--border-medium)",
                    width: "100%",
                  }}
                >
                  <div style={{ fontWeight: 700, color: "var(--emerald-950)", marginBottom: "0.35rem" }}>
                    Google OAuth Setup Note:
                  </div>
                  <p style={{ color: "var(--text-body)", marginBottom: "0.5rem", lineHeight: 1.4 }}>
                    Google OAuth requires a Web Client ID registered in Google Cloud Console with this domain. If you have created a Client ID, paste it below:
                  </p>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <input
                      type="text"
                      placeholder="e.g. 12345...apps.googleusercontent.com"
                      className="form-input"
                      style={{ fontSize: "0.75rem", padding: "0.4rem 0.6rem" }}
                      onChange={(e) => setGoogleClientId(e.target.value.trim())}
                    />
                    <button
                      type="button"
                      onClick={() => setShowGoogleHelp(false)}
                      className="btn btn-primary"
                      style={{ fontSize: "0.75rem", padding: "0.4rem 0.75rem" }}
                    >
                      Save
                    </button>
                  </div>
                  <div style={{ marginTop: "0.5rem", color: "var(--text-muted)", fontSize: "0.75rem" }}>
                    Alternatively, register below with email and 6-digit verification code.
                  </div>
                </div>
              )}
            </div>

            {/* Divider */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "1rem 0",
                color: "var(--text-subtle)",
                fontSize: "0.8125rem",
              }}
            >
              <div style={{ flex: 1, height: "1px", background: "var(--border-subtle)" }} />
              <span style={{ padding: "0 0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                or with credentials
              </span>
              <div style={{ flex: 1, height: "1px", background: "var(--border-subtle)" }} />
            </div>

            {/* Mode Switcher */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                background: "var(--bg-canvas)",
                padding: "0.25rem",
                borderRadius: "var(--radius-md)",
                marginBottom: "1rem",
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
                  padding: "0.45rem",
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
                  padding: "0.45rem",
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

            {successMsg && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.65rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--emerald-50)",
                  color: "var(--emerald-850)",
                  fontSize: "0.8125rem",
                  marginBottom: "1rem",
                  border: "1px solid var(--border-medium)",
                }}
              >
                <CheckCircle size={15} color="var(--emerald-700)" />
                <span>{successMsg}</span>
              </div>
            )}

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
                <AlertCircle size={15} style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Email Field with Verification Button (on Register) */}
              <div className="form-group" style={{ marginBottom: "0.875rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <label className="form-label" style={{ fontSize: "0.8125rem" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                      <Mail size={13} /> {mode === "register" ? "Email Address" : "Email or Username"}
                    </span>
                  </label>
                  {mode === "register" && isEmailVerified && (
                    <span style={{ color: "var(--emerald-700)", fontSize: "0.75rem", fontWeight: 700 }}>
                      ✓ Verified
                    </span>
                  )}
                </div>

                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type={mode === "register" ? "email" : "text"}
                    required
                    disabled={isEmailVerified && mode === "register"}
                    className="form-input"
                    style={{ padding: "0.65rem 0.875rem", flex: 1 }}
                    placeholder={mode === "register" ? "yourname@domain.com" : "yourname@domain.com or username"}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsEmailVerified(false);
                      setOtpSent(false);
                    }}
                  />
                  {mode === "register" && !isEmailVerified && (
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      disabled={otpLoading || !email.trim()}
                      className="btn btn-outline-emerald"
                      style={{ padding: "0.45rem 0.75rem", fontSize: "0.75rem", whiteSpace: "nowrap" }}
                    >
                      {otpLoading ? <i className="fa fa-spinner fa-spin" /> : otpSent ? "Resend Code" : "Send Code"}
                    </button>
                  )}
                </div>
              </div>

              {/* 6-Digit OTP Verification Box on Register */}
              {mode === "register" && otpSent && !isEmailVerified && (
                <div
                  className="card animate-fade-in"
                  style={{
                    background: "var(--bg-canvas)",
                    padding: "0.875rem",
                    borderRadius: "var(--radius-md)",
                    marginBottom: "1rem",
                    border: "1px solid var(--border-medium)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.8125rem", fontWeight: 700, color: "var(--emerald-950)", marginBottom: "0.35rem" }}>
                    <KeyRound size={14} color="var(--emerald-700)" />
                    <span>Enter 6-Digit Verification Code</span>
                  </div>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.6rem" }}>
                    To confirm ownership, enter the code dispatched for <strong>{email}</strong>:
                  </p>

                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <input
                      type="text"
                      maxLength={6}
                      placeholder="123456"
                      className="form-input"
                      style={{
                        padding: "0.5rem",
                        letterSpacing: "0.3em",
                        textAlign: "center",
                        fontWeight: 800,
                        fontSize: "1rem",
                      }}
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ""))}
                    />
                    <button
                      type="button"
                      onClick={handleVerifyOtp}
                      disabled={otpLoading || otpCode.length !== 6}
                      className="btn btn-primary"
                      style={{ padding: "0.5rem 1rem", fontSize: "0.8125rem" }}
                    >
                      {otpLoading ? <i className="fa fa-spinner fa-spin" /> : "Verify Code"}
                    </button>
                  </div>

                  {issuedCode && (
                    <div style={{ marginTop: "0.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "0.75rem", color: "var(--emerald-800)" }}>
                        Code: <strong>{issuedCode}</strong>
                      </span>
                      <button
                        type="button"
                        onClick={() => setOtpCode(issuedCode)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "var(--emerald-700)",
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        Auto-Fill
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Remaining Registration Fields */}
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
                      placeholder="e.g. greenarchitect"
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
                        placeholder="Alex Morgan"
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
                        placeholder="e.g. 42561"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Password Field */}
              <div className="form-group" style={{ marginBottom: "1rem" }}>
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
                  <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <i className="fa fa-spinner fa-spin" /> Verifying...
                  </span>
                ) : mode === "register" ? (
                  isEmailVerified ? "Complete Registration" : "Verify Email with Code Above First"
                ) : (
                  "Sign In & Enter Dashboard"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
