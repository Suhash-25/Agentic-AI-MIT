import React, { useState, useEffect, useRef } from "react";
import {
  Send,
  Plus,
  Trash2,
  Paperclip,
  X,
  Bot,
  User as UserIcon,
  Sparkles,
  Zap,
  Activity,
  Layers,
  ChevronRight,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { marked } from "marked";
import ThreeEnergyCore from "./ThreeEnergyCore";
import { api } from "../services/api";

export default function ChatInterface({ user, initialPrompt, onClearInitialPrompt }) {
  const [sessions, setSessions] = useState([]);
  const [activeSessionId, setActiveSessionId] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [attachedFile, setAttachedFile] = useState(null);
  const [showVisualizer, setShowVisualizer] = useState(true);

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const currentUserId = user?.email || "user";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking, isStreaming]);

  // Load Sessions
  const loadSessions = async () => {
    try {
      const data = await api.agent.getSessions(currentUserId);
      if (data && data.length) {
        setSessions(data);
        const firstSessionId = data[0].id;
        setActiveSessionId(firstSessionId);
        loadSessionEvents(firstSessionId);
      } else {
        createNewSession();
      }
    } catch (err) {
      console.warn("Could not fetch sessions, creating new one:", err);
      createNewSession();
    }
  };

  const createNewSession = async () => {
    try {
      const newSession = await api.agent.createSession(currentUserId);
      if (newSession && newSession.id) {
        setSessions((prev) => [newSession, ...prev]);
        setActiveSessionId(newSession.id);
        setMessages([
          {
            role: "model",
            text: `Welcome! I am your **Clean Energy Intelligence Agent** powered by Gemini 2.5.

I can assist you with:
- Finding certified **tax credits & utility rebates** for your ZIP code
- Analyzing **solar systems, inverters, and battery storage**
- Modeling **carbon savings and 25-year ROI**
- Querying registered regional consumer energy profiles

How can I power your energy transition today?`,
          },
        ]);
        return newSession.id;
      }
    } catch (err) {
      console.error("Session creation error:", err);
    }
    return null;
  };

  const loadSessionEvents = async (sessionId) => {
    try {
      const sessionData = await api.agent.getSession(sessionId, currentUserId);
      if (sessionData && sessionData.events) {
        const parsed = [];
        sessionData.events.forEach((ev) => {
          if (ev.content && ev.content.parts) {
            ev.content.parts.forEach((p) => {
              if (p.text) {
                parsed.push({
                  role: ev.content.role || "model",
                  text: p.text,
                });
              } else if (p.functionCall) {
                parsed.push({
                  role: "tool-call",
                  name: p.functionCall.name,
                });
              } else if (p.functionResponse) {
                parsed.push({
                  role: "tool-result",
                  name: p.functionResponse.name,
                });
              }
            });
          }
        });
        setMessages(parsed);
      }
    } catch (err) {
      console.error("Error loading session events:", err);
    }
  };

  const handleDeleteSession = async (e, sid) => {
    e.stopPropagation();
    try {
      await api.agent.deleteSession(sid, currentUserId);
      const remaining = sessions.filter((s) => s.id !== sid);
      setSessions(remaining);
      if (activeSessionId === sid) {
        if (remaining.length > 0) {
          setActiveSessionId(remaining[0].id);
          loadSessionEvents(remaining[0].id);
        } else {
          createNewSession();
        }
      }
    } catch (err) {
      console.error("Delete session error:", err);
    }
  };

  useEffect(() => {
    loadSessions();
  }, [user]);

  // Handle Initial Prompt if passed from another section
  useEffect(() => {
    if (initialPrompt && activeSessionId && !isSending) {
      handleSendMessage(initialPrompt);
      if (onClearInitialPrompt) onClearInitialPrompt();
    }
  }, [initialPrompt, activeSessionId]);

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64Data = reader.result.split(",")[1];
        resolve({
          data: base64Data,
          displayName: file.name,
          mimeType: file.type,
        });
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSendMessage = async (textToSend) => {
    const text = (textToSend || inputMessage).trim();
    if (!text && !attachedFile) return;

    let targetSessionId = activeSessionId;
    if (!targetSessionId) {
      targetSessionId = await createNewSession();
      if (!targetSessionId) return;
    }

    const parts = [];
    if (text) parts.push({ text });

    let fileData = null;
    if (attachedFile) {
      fileData = await fileToBase64(attachedFile);
      parts.push({ inlineData: fileData });
    }

    // Add user message to UI immediately
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text,
        file: attachedFile ? attachedFile.name : null,
      },
    ]);

    setInputMessage("");
    setAttachedFile(null);
    setIsSending(true);
    setIsThinking(true);

    const payload = {
      appName: api.agent.appName,
      newMessage: { role: "user", parts },
      sessionId: targetSessionId,
      stateDelta: null,
      streaming: false,
      userId: currentUserId,
    };

    try {
      await api.agent.streamMessage(payload, async (chunk) => {
        if (!chunk) return;

        setIsThinking(false);
        setIsStreaming(true);

        if (chunk.content && chunk.content.parts) {
          chunk.content.parts.forEach((p) => {
            if (p.functionCall) {
              setMessages((prev) => [
                ...prev,
                { role: "tool-call", name: p.functionCall.name },
              ]);
            } else if (p.functionResponse) {
              setMessages((prev) => [
                ...prev,
                { role: "tool-result", name: p.functionResponse.name },
              ]);
            } else if (p.text) {
              setMessages((prev) => [
                ...prev,
                { role: "model", text: p.text },
              ]);
            }
          });
        }
      });
    } catch (err) {
      console.error("Chat streaming error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: `⚠️ **Error communicating with Gemini Energy Agent:** ${err.message}`,
        },
      ]);
    } finally {
      setIsSending(false);
      setIsThinking(false);
      setIsStreaming(false);
    }
  };

  const suggestedPrompts = [
    "What clean energy incentives are available for ZIP 42561?",
    "Which registered user zip code has the highest potential carbon savings?",
    "Compare the top solar systems in our catalog by ROI and incentive value.",
    "Are there any registered users with no incentives in their zip code?",
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "280px 1fr",
        height: "calc(100vh - 4.25rem)",
        background: "var(--bg-canvas)",
        overflow: "hidden",
      }}
    >
      {/* Sidebar: Session History & Agent Stats */}
      <aside
        style={{
          borderRight: "1px solid var(--border-subtle)",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ padding: "1.25rem", overflowY: "auto", flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--emerald-950)", fontWeight: 700 }}>
              <Layers size={18} color="var(--emerald-700)" />
              <span>Agent Sessions</span>
            </div>
            <button
              onClick={createNewSession}
              className="btn btn-primary"
              style={{ padding: "0.35rem 0.65rem", fontSize: "0.75rem" }}
            >
              <Plus size={14} /> New
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            {sessions.map((s) => {
              const isActive = s.id === activeSessionId;
              return (
                <div
                  key={s.id}
                  onClick={() => {
                    setActiveSessionId(s.id);
                    loadSessionEvents(s.id);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.625rem 0.75rem",
                    borderRadius: "var(--radius-md)",
                    background: isActive ? "var(--emerald-50)" : "transparent",
                    border: "1px solid " + (isActive ? "var(--border-medium)" : "transparent"),
                    cursor: "pointer",
                    fontSize: "0.8125rem",
                    color: isActive ? "var(--emerald-950)" : "var(--text-body)",
                    fontWeight: isActive ? 600 : 500,
                    transition: "all 0.15s ease",
                  }}
                >
                  <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "180px" }}>
                    Session {s.id.slice(0, 8)}...
                  </span>
                  <button
                    onClick={(e) => handleDeleteSession(e, s.id)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "var(--text-muted)",
                      padding: "0.2rem",
                    }}
                    title="Delete session"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar Footer: Agent Engine Specs */}
        <div
          style={{
            padding: "1rem",
            borderTop: "1px solid var(--border-subtle)",
            background: "var(--bg-canvas)",
            fontSize: "0.75rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--emerald-800)", fontWeight: 700, marginBottom: "0.25rem" }}>
            <Activity size={13} /> Model: Gemini 2.5 Flash
          </div>
          <div style={{ color: "var(--text-muted)" }}>
            Google ADK Agent • Zero Sandbox Friction
          </div>
        </div>
      </aside>

      {/* Main Chat Arena */}
      <section style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>
        {/* Chat Header Banner */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.875rem 1.5rem",
            background: "#ffffff",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "var(--radius-sm)",
                background: "var(--emerald-100)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--emerald-800)",
              }}
            >
              <Bot size={18} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "var(--emerald-950)" }}>
                Energy Saving Agent
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--emerald-700)" }}>
                Session: <code>{activeSessionId ? activeSessionId.slice(0, 16) : "Initializing..."}</code>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <button
              onClick={() => setShowVisualizer(!showVisualizer)}
              className="btn btn-ghost"
              style={{ fontSize: "0.8125rem", padding: "0.35rem 0.75rem" }}
            >
              {showVisualizer ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
              <span>{showVisualizer ? "Hide 3D Core" : "Show 3D Core"}</span>
            </button>
          </div>
        </div>

        {/* Optional Embedded 3D Energy Core Visualizer */}
        {showVisualizer && (
          <div
            style={{
              height: "170px",
              background: "linear-gradient(180deg, #ffffff 0%, var(--bg-canvas) 100%)",
              borderBottom: "1px solid var(--border-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <ThreeEnergyCore isThinking={isThinking} isStreaming={isStreaming} />
          </div>
        )}

        {/* Message Log */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {messages.map((m, idx) => {
            if (m.role === "tool-call") {
              return (
                <div
                  key={idx}
                  style={{
                    alignSelf: "center",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "var(--radius-full)",
                    background: "var(--emerald-50)",
                    border: "1px solid var(--border-medium)",
                    fontSize: "0.75rem",
                    color: "var(--emerald-800)",
                    fontWeight: 600,
                  }}
                >
                  <Zap size={13} color="var(--emerald-600)" />
                  <span>Executing Tool: <code>{m.name}</code></span>
                </div>
              );
            }

            if (m.role === "tool-result") {
              return (
                <div
                  key={idx}
                  style={{
                    alignSelf: "center",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "var(--radius-full)",
                    background: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    fontSize: "0.75rem",
                    color: "#166534",
                    fontWeight: 500,
                  }}
                >
                  <span>✓ Tool Completed: <code>{m.name}</code></span>
                </div>
              );
            }

            const isUser = m.role === "user";
            return (
              <div
                key={idx}
                className="animate-fade-in"
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignSelf: isUser ? "flex-end" : "flex-start",
                  maxWidth: "80%",
                }}
              >
                {!isUser && (
                  <div
                    style={{
                      width: "2rem",
                      height: "2rem",
                      borderRadius: "50%",
                      background: "var(--emerald-800)",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Bot size={15} />
                  </div>
                )}

                <div
                  style={{
                    background: isUser ? "linear-gradient(135deg, var(--emerald-800) 0%, var(--emerald-700) 100%)" : "#ffffff",
                    color: isUser ? "#ffffff" : "var(--text-main)",
                    padding: "1rem 1.25rem",
                    borderRadius: isUser ? "16px 16px 2px 16px" : "16px 16px 16px 2px",
                    boxShadow: isUser ? "0 4px 12px rgba(14, 56, 43, 0.15)" : "var(--shadow-sm)",
                    border: isUser ? "none" : "1px solid var(--border-subtle)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                  }}
                >
                  {isUser ? (
                    <div>{m.text}</div>
                  ) : (
                    <div
                      style={{ overflowWrap: "break-word" }}
                      dangerouslySetInnerHTML={{ __html: marked.parse(m.text || "") }}
                    />
                  )}

                  {m.file && (
                    <div
                      style={{
                        marginTop: "0.5rem",
                        padding: "0.35rem 0.6rem",
                        borderRadius: "var(--radius-sm)",
                        background: isUser ? "rgba(255,255,255,0.2)" : "var(--bg-canvas)",
                        fontSize: "0.75rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                      }}
                    >
                      <Paperclip size={13} /> {m.file}
                    </div>
                  )}
                </div>

                {isUser && (
                  <div
                    style={{
                      width: "2rem",
                      height: "2rem",
                      borderRadius: "50%",
                      background: "var(--emerald-100)",
                      color: "var(--emerald-900)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontWeight: 700,
                      fontSize: "0.75rem",
                    }}
                  >
                    <UserIcon size={14} />
                  </div>
                )}
              </div>
            );
          })}

          {isThinking && (
            <div style={{ display: "flex", gap: "0.75rem", alignSelf: "flex-start", alignItems: "center" }}>
              <div
                style={{
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "50%",
                  background: "var(--emerald-800)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Bot size={15} />
              </div>
              <div
                className="card"
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: "16px 16px 16px 2px",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "var(--emerald-700)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                }}
              >
                <i className="fa fa-circle-notch fa-spin" />
                <span>Gemini Agent is synthesizing clean energy models...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompts Pill Strip */}
        <div
          style={{
            padding: "0.5rem 1.5rem",
            background: "#ffffff",
            borderTop: "1px solid var(--border-subtle)",
            display: "flex",
            gap: "0.5rem",
            overflowX: "auto",
            whiteSpace: "nowrap",
          }}
        >
          {suggestedPrompts.map((p, i) => (
            <button
              key={i}
              disabled={isSending}
              onClick={() => handleSendMessage(p)}
              style={{
                fontSize: "0.75rem",
                padding: "0.3rem 0.75rem",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--border-medium)",
                background: "var(--bg-canvas)",
                color: "var(--emerald-900)",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div style={{ padding: "1rem 1.5rem", background: "#ffffff", borderTop: "1px solid var(--border-subtle)" }}>
          {attachedFile && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.75rem",
                background: "var(--emerald-50)",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.8125rem",
                marginBottom: "0.5rem",
                color: "var(--emerald-900)",
                border: "1px solid var(--border-medium)",
              }}
            >
              <Paperclip size={14} />
              <span>{attachedFile.name}</span>
              <button
                onClick={() => setAttachedFile(null)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}
              >
                <X size={14} />
              </button>
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setAttachedFile(e.target.files[0]);
                }
              }}
              style={{ display: "none" }}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="btn btn-ghost"
              title="Attach document or solar proposal"
              style={{ padding: "0.75rem", color: "var(--text-muted)" }}
            >
              <Paperclip size={18} />
            </button>

            <input
              type="text"
              value={inputMessage}
              disabled={isSending}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Inquire on incentives, equipment payback, carbon metrics, or solar sizing..."
              style={{
                flex: 1,
                padding: "0.875rem 1.25rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-medium)",
                fontSize: "0.9375rem",
                outline: "none",
              }}
            />

            <button
              type="submit"
              disabled={isSending || (!inputMessage.trim() && !attachedFile)}
              className="btn btn-primary"
              style={{ padding: "0.875rem 1.5rem" }}
            >
              {isSending ? (
                <i className="fa fa-spinner fa-spin" />
              ) : (
                <>
                  <Send size={16} /> Send
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
