import React, { useState, useEffect, useRef } from "react";
import { X, Lock, Mail, User, MapPin, Eye, EyeOff, AlertCircle, Info } from "lucide-react";
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
  const [infoNotice, setInfoNotice] = useState("");

  // Form fields
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [fullName, setFullName] = useState("");

  const [googleClientId, setGoogleClientId] = useState("");
  const googleModalBtnRef = useRef(null);

  useEffect(() => {
    setMode(initialMode);
    setError("");
    setInfoNotice("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setInfoNotice("");

    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedEmail) {
      setError("Please provide your email address.");
      return;
    }

    if (mode === "register" || trimmedEmail.includes("@")) {
      if (!EMAIL_REGEX.test(trimmedEmail)) {
        setError("Please enter a valid email address with a domain (e.g. name@domain.com).");
        return;
      }
    }

    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters long.");
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
    setInfoNotice("");

    if (googleClientId && window.google && window.google.accounts) {
      window.google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
          const btn = googleModalBtnRef.current?.querySelector("div[role='button']");
          if (btn) btn.click();
        }
      });
    } else {
      const customId = prompt(
        "Google OAuth Configuration Required\n\nTo enable Google Sign-In, enter your Google OAuth 2.0 Web Client ID:\n(Leave empty to cancel)"
      );

      if (customId && customId.trim()) {
        setGoogleClientId(customId.trim());
        setInfoNotice("Google Client ID saved. Click Continue with Google to proceed.");
      } else {
        setError(
          "Google OAuth requires an authentic Google Client ID. Please use Email and Password registration below to proceed immediately."
        );
      }
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
          maxHeight: "90vh",
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
            {mode === "login" ? "Sign In to Access" : "Create Account"}
          </h3>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            {promptText ||
              (mode === "login"
                ? "Enter your credentials or use Google to enter the platform."
                : "Create your account to unlock AI Agent and clean energy tools.")}
          </p>
        </div>

        {/* Google OAuth Section */}
        <div style={{ marginBottom: "1.25rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
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

        {/* Mode Switcher Tabs */}
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
              setInfoNotice("");
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
              setInfoNotice("");
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

        {infoNotice && (
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
            <Info size={15} color="var(--emerald-700)" />
            <span>{infoNotice}</span>
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

        {/* Form */}
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
