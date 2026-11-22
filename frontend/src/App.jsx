import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LandingAuthGateway from "./components/LandingAuthGateway";
import LandingFeaturesPreview from "./components/LandingFeaturesPreview";
import ProductCatalog from "./components/ProductCatalog";
import IncentiveFinder from "./components/IncentiveFinder";
import CarbonCalculator from "./components/CarbonCalculator";
import ChatInterface from "./components/ChatInterface";
import AuthModal from "./components/AuthModal";
import { api } from "./services/api";
import { Sun, ShieldCheck, Lock, ArrowRight, MessageSquare, Sparkles } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [user, setUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [authPromptText, setAuthPromptText] = useState("");
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

  const handleOpenAuth = (mode = "login", promptText = "") => {
    setAuthMode(mode);
    setAuthPromptText(promptText);
    setIsAuthOpen(true);
  };

  const handleAuthSuccess = (userData) => {
    setUser(userData);
    showToast(`Welcome, ${userData.username || userData.email}! Platform unlocked.`);
    // If was on home, stay on home or switch to chat if desired
  };

  const handleLogout = () => {
    localStorage.removeItem("eia_auth_token");
    setUser(null);
    setActiveTab("home");
    window.location.hash = "#/home";
    showToast("Signed out. Features are locked until next login.");
  };

  const handleAskAgentFromCard = (promptText) => {
    if (!user) {
      handleOpenAuth("login", "Sign in to consult the AI Energy Agent");
      return;
    }
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

      {/* Main App Container */}
      <main style={{ flex: 1 }}>
        {/* PUBLIC UNCONNECTED VIEW (User not logged in) */}
        {!user && (
          <>
            {activeTab === "home" ? (
              <>
                <Hero
                  onNavigate={handleTabChange}
                  user={user}
                  onOpenAuth={handleOpenAuth}
                  onSelectNode={(node) =>
                    handleOpenAuth(
                      "login",
                      `Sign in to analyze the ${node.name} clean energy facility with the AI Agent`
                    )
                  }
                />
                <LandingAuthGateway onAuthSuccess={handleAuthSuccess} />
                <LandingFeaturesPreview onOpenAuth={handleOpenAuth} />
              </>
            ) : (
              /* Gated Route Fallback if someone navigated directly to #chat or #products */
              <div
                style={{
                  minHeight: "70vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "4rem 1.5rem",
                  background: "radial-gradient(ellipse at 50% 30%, rgba(85, 207, 168, 0.08) 0%, rgba(246, 249, 247, 0) 80%)",
                }}
              >
                <div
                  className="card animate-fade-in"
                  style={{
                    maxWidth: "520px",
                    textAlign: "center",
                    padding: "3rem 2rem",
                    boxShadow: "var(--shadow-xl)",
                    border: "1px solid var(--border-medium)",
                  }}
                >
                  <div
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "var(--radius-md)",
                      background: "var(--emerald-50)",
                      border: "1px solid var(--border-medium)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--emerald-700)",
                      margin: "0 auto 1.25rem auto",
                    }}
                  >
                    <Lock size={26} />
                  </div>
                  <h2 style={{ fontSize: "1.75rem", color: "var(--emerald-950)", marginBottom: "0.5rem" }}>
                    Authentication Required
                  </h2>
                  <p style={{ color: "var(--text-body)", fontSize: "1rem", lineHeight: 1.6, marginBottom: "2rem" }}>
                    Access to the <strong>{activeTab.toUpperCase()}</strong> feature and the Gemini 2.5 Energy Agent requires verified registration. Sign in or continue with Google to unlock full platform capabilities.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <button
                      onClick={() => handleOpenAuth("login", `Sign in to access ${activeTab}`)}
                      className="btn btn-primary"
                      style={{ padding: "0.875rem", fontSize: "1rem", justifyContent: "center" }}
                    >
                      Sign In to Unlock
                    </button>
                    <button
                      onClick={() => handleOpenAuth("register", `Register to unlock ${activeTab}`)}
                      className="btn btn-secondary"
                      style={{ padding: "0.875rem", fontSize: "1rem", justifyContent: "center" }}
                    >
                      Create Free Account
                    </button>
                    <button
                      onClick={() => handleTabChange("home")}
                      className="btn btn-ghost"
                      style={{ fontSize: "0.875rem" }}
                    >
                      Return to Overview
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* AUTHENTICATED UNLOCKED VIEW (User is logged in) */}
        {user && (
          <>
            {activeTab === "home" && (
              <>
                <Hero
                  onNavigate={handleTabChange}
                  user={user}
                  onOpenAuth={handleOpenAuth}
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
          </>
        )}
      </main>

      {/* Auth Modal (Pop-up from header or feature clicks) */}
      <AuthModal
        isOpen={isAuthOpen}
        initialMode={authMode}
        promptText={authPromptText}
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
                  <li onClick={() => (user ? handleTabChange("products") : handleOpenAuth("login", "Sign in to access Equipment"))} style={{ cursor: "pointer" }}>Equipment Catalog</li>
                  <li onClick={() => (user ? handleTabChange("incentives") : handleOpenAuth("login", "Sign in to access Incentives"))} style={{ cursor: "pointer" }}>Regional Incentives</li>
                  <li onClick={() => (user ? handleTabChange("calculator") : handleOpenAuth("login", "Sign in to access ROI Simulator"))} style={{ cursor: "pointer" }}>25-Year ROI Modeling</li>
                  <li onClick={() => (user ? handleTabChange("chat") : handleOpenAuth("login", "Sign in to launch AI Agent"))} style={{ cursor: "pointer" }}>Gemini Energy Agent</li>
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
                  {user ? (
                    <>
                      <li style={{ color: "#4ec291", fontWeight: 600 }}>Signed in as {user.username || user.email}</li>
                      <li onClick={handleLogout} style={{ cursor: "pointer", color: "var(--danger)" }}>Sign Out</li>
                    </>
                  ) : (
                    <>
                      <li onClick={() => handleOpenAuth("login")} style={{ cursor: "pointer" }}>Sign In</li>
                      <li onClick={() => handleOpenAuth("register")} style={{ cursor: "pointer" }}>Register with Email</li>
                      <li onClick={() => handleOpenAuth("login")} style={{ cursor: "pointer" }}>Continue with Google</li>
                    </>
                  )}
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
