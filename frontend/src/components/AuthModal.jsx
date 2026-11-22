import React, { useState } from "react";
import { X, Lock, Mail, User, MapPin, Eye, EyeOff, AlertCircle } from "lucide-react";
import { api } from "../services/api";

export default function AuthModal({
  isOpen,
  initialMode = "login",
  onClose,
  onAuthSuccess,
}) {
  const [mode, setMode] = useState(initialMode); // "login" | "register"
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Form fields
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [fullName, setFullName] = useState("");

  if (!isOpen) return null;

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
          throw new Error("Please provide your credential and password.");
        }
        res = await api.auth.login({
          credential: email.trim(),
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
      setError(err.message || "Authentication failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  // Google OAuth connector
  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      // Prompt for simulated or real Google OAuth connector
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
        onClose();
      }
    } catch (err) {
      console.error("Google OAuth error:", err);
      setError(err.message || "Google OAuth sign-in encountered an issue.");
    } finally {
      setLoading(false);
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
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "var(--radius-md)",
              background: "var(--emerald-50)",
              border: "1px solid var(--border-medium)",
              color: "var(--emerald-700)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 0.75rem auto",
            }}
          >
            <Lock size={22} />
          </div>
          <h3 style={{ fontSize: "1.5rem", color: "var(--emerald-950)", marginBottom: "0.25rem" }}>
            {mode === "login" ? "Welcome Back" : "Create Clean Energy Account"}
          </h3>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            {mode === "login"
              ? "Access your saved incentives and intelligent agent sessions."
              : "Join the verified clean energy platform for rebates and modeling."}
          </p>
        </div>

        {/* Google OAuth Connector Button */}
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
          Continue with Google
        </button>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "1.25rem 0",
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

        {error && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem",
              borderRadius: "var(--radius-md)",
              backgroundColor: "var(--danger-soft)",
              color: "var(--danger)",
              fontSize: "0.8125rem",
              marginBottom: "1rem",
              border: "1px solid rgba(207, 60, 60, 0.2)",
            }}
          >
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">
              <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <Mail size={14} /> {mode === "register" ? "Email Address" : "Email or Username"}
              </span>
            </label>
            <input
              type={mode === "register" ? "email" : "text"}
              required
              className="form-input"
              placeholder={mode === "register" ? "alex@domain.com" : "alex@domain.com or alex"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {mode === "register" && (
            <>
              <div className="form-group">
                <label className="form-label">
                  <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                    <User size={14} /> Username
                  </span>
                </label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="e.g. greenarchitect"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Alex Morgan"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      <MapPin size={13} /> ZIP Code
                    </span>
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. 42561"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}

          <div className="form-group">
            <label className="form-label">
              <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <Lock size={14} /> Password
              </span>
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                required
                className="form-input"
                placeholder="At least 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingRight: "2.5rem" }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--text-muted)",
                }}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            style={{ width: "100%", marginTop: "0.5rem", padding: "0.75rem" }}
          >
            {loading ? (
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <i className="fa fa-spinner fa-spin" /> Verifying...
              </span>
            ) : mode === "register" ? (
              "Complete Registration"
            ) : (
              "Sign In to Account"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
