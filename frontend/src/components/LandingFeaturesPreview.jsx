import React from "react";
import { Lock, MessageSquare, Zap, ShoppingBag, Calculator, ArrowRight, ShieldCheck } from "lucide-react";

export default function LandingFeaturesPreview({ onOpenAuth }) {
  const features = [
    {
      id: "agent",
      icon: <MessageSquare size={22} color="var(--emerald-700)" />,
      tag: "Agentic Intelligence",
      title: "Gemini 2.5 Energy Agent",
      desc: "Autonomous reasoning engine with real-time tools for incentive matching, equipment evaluation, and carbon modeling.",
      actionText: "Sign In to Launch Agent",
      tab: "chat",
    },
    {
      id: "incentives",
      icon: <Zap size={22} color="var(--accent-sun)" />,
      tag: "Regional Database",
      title: "Incentive Discovery Engine",
      desc: "Instant lookup across federal Section 25D, state tax credits, and utility rebates tailored to your exact ZIP code.",
      actionText: "Sign In to Check Incentives",
      tab: "incentives",
    },
    {
      id: "products",
      icon: <ShoppingBag size={22} color="var(--emerald-600)" />,
      tag: "Certified Systems",
      title: "Equipment & Storage Catalog",
      desc: "Curated residential and commercial solar panels, microinverters, battery reserves, and heat pumps with verified metrics.",
      actionText: "Sign In to Browse Catalog",
      tab: "products",
    },
    {
      id: "calculator",
      icon: <Calculator size={22} color="var(--accent-wind)" />,
      tag: "Financial Modeling",
      title: "25-Year Solar & Carbon ROI",
      desc: "Dynamic simulation of monthly electric bill savings, recommended kW array sizing, and verifiable lifetime carbon offset.",
      actionText: "Sign In to Run Simulation",
      tab: "calculator",
    },
  ];

  return (
    <section style={{ padding: "4rem 0 5rem 0", background: "#ffffff" }}>
      <div className="container">
        <div className="section-header">
          <span className="tag">Platform Capabilities</span>
          <h2>Intelligent Infrastructure at Your Fingertips</h2>
          <p>
            Authenticate with your credentials or Google account to unlock full access to our applied clean energy suite.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {features.map((feat) => (
            <div
              key={feat.id}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "1px solid var(--border-medium)",
                background: "var(--bg-canvas)",
                position: "relative",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "var(--radius-md)",
                      background: "#ffffff",
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    {feat.icon}
                  </div>
                  <span
                    className="badge"
                    style={{
                      background: "#ffffff",
                      color: "var(--emerald-850)",
                      border: "1px solid var(--border-medium)",
                      fontSize: "0.6875rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    <Lock size={11} color="var(--emerald-700)" /> Requires Login
                  </span>
                </div>

                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--emerald-700)",
                    marginBottom: "0.35rem",
                  }}
                >
                  {feat.tag}
                </div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--emerald-950)", marginBottom: "0.5rem" }}>
                  {feat.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-body)", lineHeight: 1.5, marginBottom: "1.5rem" }}>
                  {feat.desc}
                </p>
              </div>

              <button
                onClick={() => onOpenAuth("login", `Sign in to access ${feat.title}`)}
                className="btn btn-primary"
                style={{
                  width: "100%",
                  fontSize: "0.875rem",
                  padding: "0.75rem",
                  justifyContent: "center",
                }}
              >
                <Lock size={14} /> {feat.actionText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
