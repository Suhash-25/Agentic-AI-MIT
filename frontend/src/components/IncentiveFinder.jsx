import React, { useState } from "react";
import { Search, Zap, DollarSign, MapPin, Building, ArrowRight, CheckCircle2 } from "lucide-react";
import { api } from "../services/api";

export default function IncentiveFinder({ onAskAgent }) {
  const [zipInput, setZipInput] = useState("");
  const [incentives, setIncentives] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchedZip, setSearchedZip] = useState("");

  const handleSearch = async (zipToSearch) => {
    const zip = (zipToSearch || zipInput).trim();
    if (!zip) return;

    setLoading(true);
    setSearchedZip(zip);
    try {
      const res = await api.incentives.getByZip(zip);
      setIncentives(Array.isArray(res) ? res : [res]);
    } catch (err) {
      console.warn("Incentive fetch error:", err);
      setIncentives([]);
    } finally {
      setLoading(false);
    }
  };

  const sampleZips = ["42561", "52342", "23444", "11368", "10453"];

  return (
    <section id="incentives" style={{ padding: "5rem 0", background: "#ffffff" }}>
      <div className="container">
        <div className="section-header">
          <span className="tag">Regional Incentives</span>
          <h2>Unlock Available Clean Energy Rebates</h2>
          <p>
            Verify local, state, and federal subsidies directly mapped to your region's utility grid and equipment standards.
          </p>
        </div>

        {/* Search Bar Container */}
        <div
          className="card"
          style={{
            maxWidth: "680px",
            margin: "0 auto 2rem auto",
            padding: "1rem",
            boxShadow: "var(--shadow-md)",
            border: "1px solid var(--border-medium)",
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}
          >
            <div style={{ position: "relative", flex: 1 }}>
              <MapPin
                size={18}
                style={{
                  position: "absolute",
                  left: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--emerald-600)",
                }}
              />
              <input
                type="text"
                placeholder="Enter 5-digit ZIP Code (e.g. 42561)"
                value={zipInput}
                onChange={(e) => setZipInput(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.875rem 1rem 0.875rem 2.75rem",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-medium)",
                  fontSize: "1rem",
                  outline: "none",
                }}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
              style={{ padding: "0.875rem 1.5rem" }}
            >
              {loading ? (
                <i className="fa fa-spinner fa-spin" />
              ) : (
                <>
                  <Search size={18} /> Search
                </>
              )}
            </button>
          </form>

          {/* Quick ZIP suggestions */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "0.875rem",
              paddingTop: "0.75rem",
              borderTop: "1px solid var(--border-subtle)",
              fontSize: "0.8125rem",
              color: "var(--text-muted)",
              flexWrap: "wrap",
            }}
          >
            <span>Verified Sample Locations:</span>
            {sampleZips.map((zip) => (
              <button
                key={zip}
                type="button"
                onClick={() => {
                  setZipInput(zip);
                  handleSearch(zip);
                }}
                style={{
                  background: "var(--emerald-50)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--emerald-800)",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "var(--radius-sm)",
                  cursor: "pointer",
                }}
              >
                ZIP {zip}
              </button>
            ))}
          </div>
        </div>

        {/* Results Container */}
        {searchedZip && (
          <div style={{ maxWidth: "780px", margin: "2rem auto 0 auto" }}>
            {incentives && incentives.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h4 style={{ color: "var(--emerald-950)", fontSize: "1.125rem" }}>
                    Verified Incentives for ZIP {searchedZip} ({incentives.length} Found)
                  </h4>
                  <span className="badge badge-emerald">
                    <CheckCircle2 size={13} /> Active Programs
                  </span>
                </div>

                {incentives.map((item, idx) => (
                  <div
                    key={idx}
                    className="card animate-fade-in"
                    style={{
                      borderLeft: "4px solid var(--emerald-600)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "1rem",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                        <Building size={16} color="var(--emerald-700)" />
                        <h4 style={{ fontSize: "1.125rem", color: "var(--emerald-950)" }}>
                          {item.org || "Federal Clean Energy Rebate Program"}
                        </h4>
                      </div>
                      <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                        Region Jurisdiction: <strong>ZIP {item.zip_code}</strong>
                        {item.product_id && (
                          <span style={{ marginLeft: "1rem" }}>
                            Associated Equipment: <code>{item.product_id}</code>
                          </span>
                        )}
                      </p>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>
                          Total Incentive Value
                        </div>
                        <div
                          style={{
                            fontSize: "1.5rem",
                            fontWeight: 800,
                            color: "var(--emerald-700)",
                            fontFamily: "var(--font-display)",
                          }}
                        >
                          {item.total_incentive || "$0.00"}
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          onAskAgent(
                            `Analyze how the ${item.org || "clean energy"} incentive of ${
                              item.total_incentive
                            } applies to my home in ZIP ${item.zip_code}.`
                          )
                        }
                        className="btn btn-outline-emerald"
                        style={{ fontSize: "0.875rem" }}
                      >
                        Ask Agent <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="card"
                style={{
                  textAlign: "center",
                  padding: "3rem 1.5rem",
                  background: "var(--bg-canvas)",
                }}
              >
                <div style={{ color: "var(--text-muted)", marginBottom: "0.5rem" }}>
                  <Zap size={32} style={{ opacity: 0.5 }} />
                </div>
                <h4 style={{ color: "var(--emerald-950)", marginBottom: "0.25rem" }}>
                  No Direct Incentives Listed for ZIP {searchedZip}
                </h4>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", maxWidth: "420px", margin: "0 auto 1.25rem auto" }}>
                  Federal 30% Residential Clean Energy Credit (Section 25D) may still apply regardless of specific utility listings.
                </p>
                <button
                  onClick={() =>
                    onAskAgent(
                      `What nationwide federal tax credits or alternative energy incentives exist for zip code ${searchedZip}?`
                    )
                  }
                  className="btn btn-primary"
                >
                  Consult AI Agent on Federal Credits
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
