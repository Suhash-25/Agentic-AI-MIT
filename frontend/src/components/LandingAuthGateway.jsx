import React, { useState } from "react";
import { Lock, Mail, User, MapPin, Eye, EyeOff, ShieldCheck, ArrowRight, AlertCircle } from "lucide-react";
import { api } from "../services/api";

export default function LandingAuthGateway({ onAuthSuccess }) {
  const [mode, setMode] = useState("login"); // "login" | "register"
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      let res;
      if (mode === "register") {
        if (!email || !username || !password) {
          throw new Error("Please complete all required fields.");
        }
        res = await api.auth.register({
          email: email.trim(),
          username: username.trim(),
          password,
          zip_code: zipCode.trim() || "00000",
          full_name: fullName.trim() || username.trim(),
        });
      } else {
        if (!email || !password) {
          throw new Error("Please enter your email/username and password.");
        }
        res = await api.auth.login({
          credential: email.trim(),
          password,
        });
      }

      if (res && res.token) {
        localStorage.setItem("eia_auth_token", res.token);
        onAuthSuccess(res.user, res.token);
      }
    } catch (err) {
      console.error("Auth error:", err);
      setError(err.message || "Authentication failed. Please verify credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      const promptEmail = prompt(
        "Sign in with Google Account\nEnter Google Account Email:",
        email || "suhasacharya0525@gmail.com"
      );
      if (!promptEmail) {
        setLoading(false);
        return;
      }

      const res = await api.auth.google({
        email: promptEmail.trim(),
        name: promptEmail.split("@")[0].replace(".", " ").toUpperCase(),
        picture: `https://api.dicebear.com/7.x/initials/svg?seed=${promptEmail}`,
        provider: "google",
      });

      if (res && res.token) {
        localStorage.setItem("eia_auth_token", res.token);
        onAuthSuccess(res.user, res.token);
      }
    } catch (err) {
      console.error("Google OAuth error:", err);
      setError(err.message || "Google OAuth sign-in encountered an issue.");
    } finally {
      setLoading(false);
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
            maxWidth: "960px",
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
              <ShieldCheck size={14} /> Unified Clean Energy Gateway
            </div>
            <h2 style={{ fontSize: "2.35rem", color: "var(--emerald-950)", lineHeight: 1.2, marginBottom: "1rem" }}>
              Authenticate to Unlock Your Intelligent Energy Suite
            </h2>
            <p style={{ color: "var(--text-body)", fontSize: "1.0625rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              Sign in with your verified credentials or Google account to interact directly with the Gemini 2.5 Energy Agent, unlock localized incentive matrices, and model 25-year carbon ROI.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9375rem", color: "var(--text-main)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--emerald-600)", fontWeight: 800 }}>✓</span>
                <span>Direct session orchestration with Google ADK Gemini 2.5 Agent</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--emerald-600)", fontWeight: 800 }}>✓</span>
                <span>Verified federal Section 25D and regional utility rebates</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--emerald-600)", fontWeight: 800 }}>✓</span>
                <span>Full access to add, edit, and evaluate equipment savings</span>
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
            {/* Google OAuth Button */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
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
                marginBottom: "1.25rem",
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
              Continue with Google Account
            </button>

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

            {/* Mode Selector */}
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

            {error && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.65rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--danger-soft)",
                  color: "var(--danger)",
                  fontSize: "0.8125rem",
                  marginBottom: "1rem",
                  border: "1px solid rgba(207, 60, 60, 0.2)",
                }}
              >
                <AlertCircle size={15} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: "0.875rem" }}>
                <label className="form-label" style={{ fontSize: "0.8125rem" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                    <Mail size={13} /> {mode === "register" ? "Email Address" : "Email or Username"}
                  </span>
                </label>
                <input
                  type={mode === "register" ? "email" : "text"}
                  required
                  className="form-input"
                  style={{ padding: "0.65rem 0.875rem" }}
                  placeholder={mode === "register" ? "alex@domain.com" : "alex@domain.com or alex"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

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
                disabled={loading}
                className="btn btn-primary"
                style={{ width: "100%", padding: "0.75rem", fontSize: "0.9375rem" }}
              >
                {loading ? (
                  <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <i className="fa fa-spinner fa-spin" /> Authenticating...
                  </span>
                ) : mode === "register" ? (
                  "Create Account & Unlock Platform"
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
