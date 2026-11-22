import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCatalog from "./components/ProductCatalog";
import IncentiveFinder from "./components/IncentiveFinder";
import CarbonCalculator from "./components/CarbonCalculator";
import ChatInterface from "./components/ChatInterface";
import AuthModal from "./components/AuthModal";
import { api } from "./services/api";
import { Sun, ShieldCheck, Heart, ExternalLink } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [user, setUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [initialPrompt, setInitialPrompt] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  // Sync tab with URL hash if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#/", "").replace("#", "");
      if (["home", "products", "incentives", "calculator", "chat"].includes(hash)) {
        setActiveTab(hash);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.location.hash = `#/${tab}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Restore authenticated session
  useEffect(() => {
    const token = localStorage.getItem("eia_auth_token");
    if (token) {
      api.auth
        .me()
        .then((userData) => {
          setUser(userData);
        })
        .catch(() => {
          localStorage.removeItem("eia_auth_token");
          setUser(null);
        });
    }
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 4000);
  };

  const handleOpenAuth = (mode = "login") => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const handleAuthSuccess = (userData) => {
    setUser(userData);
    showToast(`Welcome back, ${userData.username || userData.email}!`);
  };

  const handleLogout = () => {
    localStorage.removeItem("eia_auth_token");
    setUser(null);
    showToast("Signed out successfully.");
  };

  const handleAskAgentFromCard = (promptText) => {
    setInitialPrompt(promptText);
    handleTabChange("chat");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Toast Notification */}
      {toastMessage && (
        <div
          className="animate-fade-in"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            background: "var(--emerald-900)",
            color: "#ffffff",
            padding: "0.875rem 1.5rem",
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--shadow-xl)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.9375rem",
            fontWeight: 600,
          }}
        >
          <ShieldCheck size={18} color="#55cfa8" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        user={user}
        onOpenAuth={handleOpenAuth}
        onLogout={handleLogout}
      />

      {/* Tab Router */}
      <main style={{ flex: 1 }}>
        {activeTab === "home" && (
          <>
            <Hero
              onNavigate={handleTabChange}
              onSelectNode={(node) =>
                handleAskAgentFromCard(
                  `Provide an energy output and grid balance analysis for the ${node.name} (${node.type}) facility.`
                )
              }
            />
            <IncentiveFinder onAskAgent={handleAskAgentFromCard} />
            <ProductCatalog onAskAgent={handleAskAgentFromCard} />
            <CarbonCalculator onAskAgent={handleAskAgentFromCard} />
          </>
        )}

        {activeTab === "products" && (
          <div style={{ padding: "2rem 0" }}>
            <ProductCatalog onAskAgent={handleAskAgentFromCard} />
          </div>
        )}

        {activeTab === "incentives" && (
          <div style={{ padding: "2rem 0" }}>
            <IncentiveFinder onAskAgent={handleAskAgentFromCard} />
          </div>
        )}

        {activeTab === "calculator" && (
          <div style={{ padding: "2rem 0" }}>
            <CarbonCalculator onAskAgent={handleAskAgentFromCard} />
          </div>
        )}

        {activeTab === "chat" && (
          <ChatInterface
            user={user}
            initialPrompt={initialPrompt}
            onClearInitialPrompt={() => setInitialPrompt("")}
          />
        )}
      </main>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        initialMode={authMode}
        onClose={() => setIsAuthOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />

      {/* Executive Footer */}
      {activeTab !== "chat" && (
        <footer
          style={{
            background: "var(--emerald-950)",
            color: "#ffffff",
            padding: "4rem 0 2rem 0",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
                gap: "3rem",
                marginBottom: "3rem",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
                  <div
                    style={{
                      width: "2rem",
                      height: "2rem",
                      borderRadius: "var(--radius-sm)",
                      background: "var(--emerald-700)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Sun size={16} />
                  </div>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.125rem" }}>
                    Clean Energy Insights
                  </span>
                </div>
                <p style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.7)", lineHeight: 1.6, maxWidth: "320px" }}>
                  Empowering households, enterprises, and regional utilities with generative agentic intelligence to maximize renewable adoption and carbon reduction.
                </p>
              </div>

              <div>
                <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#ffffff", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Solutions
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.7)" }}>
                  <li onClick={() => handleTabChange("products")} style={{ cursor: "pointer" }}>Equipment Catalog</li>
                  <li onClick={() => handleTabChange("incentives")} style={{ cursor: "pointer" }}>Regional Incentives</li>
                  <li onClick={() => handleTabChange("calculator")} style={{ cursor: "pointer" }}>25-Year ROI Modeling</li>
                  <li onClick={() => handleTabChange("chat")} style={{ cursor: "pointer" }}>Gemini Energy Agent</li>
                </ul>
              </div>

              <div>
                <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#ffffff", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Technology
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.7)" }}>
                  <li>Google Agent Development Kit (ADK)</li>
                  <li>Gemini 2.5 Flash LLM</li>
                  <li>Three.js 3D Spatial Rendering</li>
                  <li>Federal Section 25D Mapping</li>
                </ul>
              </div>

              <div>
                <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#ffffff", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Access
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.7)" }}>
                  <li onClick={() => handleOpenAuth("login")} style={{ cursor: "pointer" }}>Sign In</li>
                  <li onClick={() => handleOpenAuth("register")} style={{ cursor: "pointer" }}>Register with Email</li>
                  <li onClick={() => handleOpenAuth("login")} style={{ cursor: "pointer" }}>Continue with Google</li>
                </ul>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                fontSize: "0.8125rem",
                color: "rgba(255, 255, 255, 0.5)",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div>
                © {new Date().getFullYear()} Clean Energy Insights Inc. All rights reserved.
              </div>
              <div style={{ display: "flex", gap: "1.5rem" }}>
                <span>Environmental & Safety Standards Compliant</span>
                <span>ISO 14064 Carbon Validation</span>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
