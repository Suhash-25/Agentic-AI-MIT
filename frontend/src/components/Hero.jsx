import React from "react";
import { ArrowRight, ShieldCheck, Zap, Leaf, DollarSign, Lock, Sparkles } from "lucide-react";
import ThreeGlobe from "./ThreeGlobe";

export default function Hero({ onNavigate, onSelectNode, user, onOpenAuth }) {
  return (
    <section
      style={{
        position: "relative",
        padding: "4rem 0 3.5rem 0",
        overflow: "hidden",
        background: "radial-gradient(ellipse at 80% 20%, rgba(85, 207, 168, 0.08) 0%, rgba(246, 249, 247, 0) 70%)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: "2.5rem",
            alignItems: "center",
          }}
        >
          {/* Left Column: Value Proposition */}
          <div>
            <div
              className="badge badge-emerald"
              style={{
                marginBottom: "1.25rem",
                padding: "0.35rem 0.75rem",
                fontSize: "0.8125rem",
              }}
            >
              <Zap size={13} />
              Applied Clean Energy Agentic Platform
            </div>

            <h1
              style={{
                fontSize: "3.25rem",
                lineHeight: 1.12,
                color: "var(--emerald-950)",
                marginBottom: "1.25rem",
              }}
            >
              Intelligent Energy Solutions for a Sustainable Future.
            </h1>

            <p
              style={{
                fontSize: "1.1875rem",
                lineHeight: 1.6,
                color: "var(--text-body)",
                marginBottom: "2rem",
                maxWidth: "540px",
              }}
            >
              Unite real-time federal and state incentive discovery with generative AI energy modeling.
              Track verifiable carbon offsets, maximize clean technology rebates, and accelerate your path to net-zero.
            </p>

            {user ? (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <button
                  onClick={() => onNavigate("chat")}
                  className="btn btn-primary"
                  style={{ padding: "0.875rem 1.75rem", fontSize: "1rem" }}
                >
                  Launch Intelligence Agent <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => onNavigate("incentives")}
                  className="btn btn-secondary"
                  style={{ padding: "0.875rem 1.5rem", fontSize: "1rem" }}
                >
                  Check Regional Incentives
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <button
                  onClick={() => onOpenAuth("login", "Sign in to launch Gemini Energy Agent and full suite")}
                  className="btn btn-primary"
                  style={{ padding: "0.875rem 1.75rem", fontSize: "1rem" }}
                >
                  <Lock size={16} /> Sign In to Access Platform
                </button>
                <button
                  onClick={() => onOpenAuth("register", "Create your clean energy account")}
                  className="btn btn-secondary"
                  style={{ padding: "0.875rem 1.5rem", fontSize: "1rem" }}
                >
                  Create Account
                </button>
              </div>
            )}

            {/* Enterprise Trust Metric Strip */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1.25rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--border-subtle)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "var(--emerald-700)" }}>
                  <Leaf size={16} />
                  <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--emerald-950)" }}>4.8M+</span>
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: 500 }}>
                  lbs CO2 Tracked
                </div>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "var(--accent-sun)" }}>
                  <DollarSign size={16} />
                  <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--emerald-950)" }}>$1.4M+</span>
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: 500 }}>
                  Rebates Unlocked
                </div>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "var(--emerald-600)" }}>
                  <ShieldCheck size={16} />
                  <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--emerald-950)" }}>99.4%</span>
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: 500 }}>
                  Incentive Matching
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Three.js Interactive 3D Eco-Globe */}
          <div
            style={{
              position: "relative",
              height: "560px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ThreeGlobe onSelectNode={onSelectNode} />

            {/* Interactive hint badge */}
            <div
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "rgba(255, 255, 255, 0.88)",
                backdropFilter: "blur(8px)",
                padding: "0.35rem 0.75rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--emerald-800)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "var(--shadow-sm)",
                pointerEvents: "none",
              }}
            >
              Interactive 3D Clean Energy Grid • Drag to rotate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
