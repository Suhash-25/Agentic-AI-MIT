import React, { useState } from "react";
import { Calculator, Leaf, DollarSign, ArrowRight, ShieldCheck } from "lucide-react";

export default function CarbonCalculator({ onAskAgent }) {
  const [monthlyBill, setMonthlyBill] = useState(240);
  const [sunlightHours, setSunlightHours] = useState(4.8);

  // Calculations
  const estMonthlyKwh = Math.round(monthlyBill / 0.18);
  const recommendedKwSystem = ((estMonthlyKwh / 30) / sunlightHours).toFixed(1);
  const annualSavings = Math.round(monthlyBill * 12 * 0.85);
  const twentyFiveYearSavings = Math.round(annualSavings * 25 * 1.03);
  const annualCarbonLbs = Math.round(estMonthlyKwh * 12 * 0.88);

  return (
    <section id="calculator" style={{ padding: "5rem 0", background: "#ffffff" }}>
      <div className="container">
        <div className="section-header">
          <span className="tag">ROI & Impact Modeling</span>
          <h2>Solar & Carbon Savings Simulator</h2>
          <p>
            Estimate your 25-year financial returns and lifecycle carbon reduction based on regional grid emission factors.
          </p>
        </div>

        <div
          className="card"
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.1fr 1.3fr",
            gap: "2.5rem",
            padding: "2.5rem",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid var(--border-medium)",
          }}
        >
          {/* Controls */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
              <Calculator size={20} color="var(--emerald-700)" />
              <h3 style={{ fontSize: "1.25rem", color: "var(--emerald-950)" }}>Energy Parameters</h3>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <label style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-main)" }}>
                  Average Monthly Electricity Bill
                </label>
                <span style={{ fontWeight: 800, color: "var(--emerald-800)", fontSize: "1.125rem" }}>
                  ${monthlyBill} / mo
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="800"
                step="10"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                style={{ width: "100%", accentColor: "var(--emerald-600)", cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                <span>$50</span>
                <span>$400</span>
                <span>$800</span>
              </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <label style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-main)" }}>
                  Daily Peak Sunlight Hours
                </label>
                <span style={{ fontWeight: 800, color: "var(--emerald-800)", fontSize: "1.125rem" }}>
                  {sunlightHours} hrs / day
                </span>
              </div>
              <input
                type="range"
                min="3.0"
                max="6.5"
                step="0.1"
                value={sunlightHours}
                onChange={(e) => setSunlightHours(Number(e.target.value))}
                style={{ width: "100%", accentColor: "var(--emerald-600)", cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                <span>3.0 (Northeast)</span>
                <span>4.8 (Midwest)</span>
                <span>6.5 (Southwest)</span>
              </div>
            </div>

            <div
              style={{
                background: "var(--bg-canvas)",
                padding: "1rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-subtle)",
                fontSize: "0.875rem",
                color: "var(--text-body)",
              }}
            >
              Estimated Monthly Usage: <strong>{estMonthlyKwh.toLocaleString()} kWh</strong>
              <br />
              Recommended Solar Array: <strong>{recommendedKwSystem} kW DC</strong>
            </div>
          </div>

          {/* Impact Results */}
          <div
            style={{
              background: "linear-gradient(145deg, var(--emerald-900) 0%, var(--emerald-800) 100%)",
              borderRadius: "var(--radius-lg)",
              padding: "2rem",
              color: "#ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 12px 28px rgba(14, 56, 43, 0.25)",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  background: "rgba(255, 255, 255, 0.12)",
                  padding: "0.25rem 0.6rem",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginBottom: "1rem",
                }}
              >
                <ShieldCheck size={13} /> Verifiable Impact Model
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ fontSize: "0.8125rem", opacity: 0.8, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Estimated 25-Year Net Utility Savings
                </div>
                <div style={{ fontSize: "2.75rem", fontWeight: 800, fontFamily: "var(--font-display)", color: "#bbf0de" }}>
                  ${twentyFiveYearSavings.toLocaleString()}
                </div>
                <div style={{ fontSize: "0.8125rem", opacity: 0.75 }}>
                  ~${annualSavings.toLocaleString()} saved in Year 1 with inflation indexing
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.8125rem", opacity: 0.8 }}>
                    <Leaf size={14} color="#55cfa8" /> Annual Carbon Offset
                  </div>
                  <div style={{ fontSize: "1.375rem", fontWeight: 700, marginTop: "0.25rem" }}>
                    {annualCarbonLbs.toLocaleString()} lbs
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.8125rem", opacity: 0.8 }}>
                    <DollarSign size={14} color="#e59f14" /> Federal 30% Tax Credit
                  </div>
                  <div style={{ fontSize: "1.375rem", fontWeight: 700, marginTop: "0.25rem" }}>
                    ${Math.round(recommendedKwSystem * 2800 * 0.3).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() =>
                onAskAgent(
                  `I have a monthly electricity bill of $${monthlyBill} with ${sunlightHours} peak sunlight hours. Please model a complete clean energy configuration with recommended solar array size, battery reserve, and available incentives.`
                )
              }
              className="btn"
              style={{
                marginTop: "1.75rem",
                background: "#ffffff",
                color: "var(--emerald-950)",
                fontWeight: 700,
                width: "100%",
                padding: "0.875rem",
              }}
            >
              Analyze with Energy Agent <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
