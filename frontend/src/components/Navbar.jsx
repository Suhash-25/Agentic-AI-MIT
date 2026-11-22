import React, { useState } from "react";
import {
  Sun,
  MessageSquare,
  Zap,
  ShoppingBag,
  Calculator,
  User as UserIcon,
  LogOut,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";

export default function Navbar({
  activeTab,
  setActiveTab,
  user,
  onOpenAuth,
  onLogout,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255, 255, 255, 0.88)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--border-subtle)",
        transition: "all 0.2s ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "4.25rem",
        }}
      >
        {/* Brand */}
        <div
          onClick={() => setActiveTab("home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "var(--radius-md)",
              background: "linear-gradient(135deg, var(--emerald-800) 0%, var(--emerald-600) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              boxShadow: "0 4px 10px rgba(14, 56, 43, 0.18)",
            }}
          >
            <Sun size={20} />
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.125rem",
                color: "var(--emerald-950)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Clean Energy Insights
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "var(--emerald-700)",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Applied AI Intelligence
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
          <button
            onClick={() => setActiveTab("home")}
            className={`btn btn-ghost ${activeTab === "home" ? "active-nav" : ""}`}
            style={{
              fontWeight: 600,
              color: activeTab === "home" ? "var(--emerald-800)" : "var(--text-body)",
              backgroundColor: activeTab === "home" ? "var(--emerald-50)" : "transparent",
            }}
          >
            <Sun size={16} /> Overview
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`btn btn-ghost ${activeTab === "products" ? "active-nav" : ""}`}
            style={{
              fontWeight: 600,
              color: activeTab === "products" ? "var(--emerald-800)" : "var(--text-body)",
              backgroundColor: activeTab === "products" ? "var(--emerald-50)" : "transparent",
            }}
          >
            <ShoppingBag size={16} /> Products
          </button>
          <button
            onClick={() => setActiveTab("incentives")}
            className={`btn btn-ghost ${activeTab === "incentives" ? "active-nav" : ""}`}
            style={{
              fontWeight: 600,
              color: activeTab === "incentives" ? "var(--emerald-800)" : "var(--text-body)",
              backgroundColor: activeTab === "incentives" ? "var(--emerald-50)" : "transparent",
            }}
          >
            <Zap size={16} /> Incentives
          </button>
          <button
            onClick={() => setActiveTab("calculator")}
            className={`btn btn-ghost ${activeTab === "calculator" ? "active-nav" : ""}`}
            style={{
              fontWeight: 600,
              color: activeTab === "calculator" ? "var(--emerald-800)" : "var(--text-body)",
              backgroundColor: activeTab === "calculator" ? "var(--emerald-50)" : "transparent",
            }}
          >
            <Calculator size={16} /> ROI Simulator
          </button>
          <button
            onClick={() => setActiveTab("chat")}
            className={`btn ${activeTab === "chat" ? "btn-primary" : "btn-outline-emerald"}`}
            style={{
              fontWeight: 600,
              marginLeft: "0.5rem",
              position: "relative",
            }}
          >
            <MessageSquare size={16} />
            <span>AI Energy Agent</span>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#4ec291",
                display: "inline-block",
                boxShadow: "0 0 6px #4ec291",
              }}
            />
          </button>
        </nav>

        {/* User & Auth Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", position: "relative" }}>
          {user ? (
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.375rem 0.75rem",
                  borderRadius: "var(--radius-full)",
                  background: "var(--emerald-50)",
                  border: "1px solid var(--border-medium)",
                  cursor: "pointer",
                }}
              >
                <img
                  src={
                    user.avatar_url ||
                    `https://api.dicebear.com/7.x/initials/svg?seed=${user.username || user.email}`
                  }
                  alt={user.username || "User"}
                  style={{
                    width: "1.75rem",
                    height: "1.75rem",
                    borderRadius: "50%",
                    objectFit: "cover",
                    background: "var(--emerald-200)",
                  }}
                />
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    color: "var(--emerald-950)",
                    maxWidth: "100px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {user.username || user.email.split("@")[0]}
                </span>
                {user.zip_code && user.zip_code !== "00000" && (
                  <span
                    className="badge badge-emerald"
                    style={{ fontSize: "0.6875rem", padding: "0.15rem 0.4rem" }}
                  >
                    {user.zip_code}
                  </span>
                )}
                <ChevronDown size={14} color="var(--text-muted)" />
              </button>

              {dropdownOpen && (
                <div
                  className="card animate-fade-in"
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "calc(100% + 8px)",
                    width: "240px",
                    padding: "0.75rem",
                    zIndex: 100,
                    boxShadow: "var(--shadow-xl)",
                  }}
                >
                  <div
                    style={{
                      padding: "0.5rem 0.75rem",
                      borderBottom: "1px solid var(--border-subtle)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "var(--emerald-950)" }}>
                      {user.full_name || user.username}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", wordBreak: "break-all" }}>
                      {user.email}
                    </div>
                    <div style={{ marginTop: "0.35rem" }}>
                      <span className="badge badge-emerald" style={{ fontSize: "0.6875rem" }}>
                        <ShieldCheck size={12} /> {user.provider === "google" ? "Google Connected" : "Verified Account"}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      onLogout();
                    }}
                    className="btn btn-ghost"
                    style={{
                      width: "100%",
                      justifyContent: "flex-start",
                      color: "var(--danger)",
                      fontSize: "0.875rem",
                      padding: "0.5rem 0.75rem",
                    }}
                  >
                    <LogOut size={16} /> Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <button
                onClick={() => onOpenAuth("login")}
                className="btn btn-ghost"
                style={{ fontWeight: 600 }}
              >
                Sign In
              </button>
              <button
                onClick={() => onOpenAuth("register")}
                className="btn btn-primary"
                style={{ padding: "0.5rem 1rem" }}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
