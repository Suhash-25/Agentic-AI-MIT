/**
 * Unified API Service
 * Handles Products, Incentives, Users, Auth (JWT + Google OAuth), and Streaming SSE
 */

const isSameOriginBackend =
  typeof window !== "undefined" &&
  window.location.protocol.startsWith("http") &&
  (window.location.port === "8080" || !window.location.port || window.location.port === "80");

export const API_BASE = isSameOriginBackend ? "" : "http://127.0.0.1:8080";

function getAuthHeaders() {
  const token = localStorage.getItem("eia_auth_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function request(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;
  const headers = {
    "Content-Type": "application/json",
    ...getAuthHeaders(),
    ...options.headers,
  };

  const res = await fetch(url, { ...options, headers });
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    const message = errorData.detail || errorData.message || `Request failed with status ${res.status}`;
    const err = new Error(message);
    err.status = res.status;
    err.data = errorData;
    throw err;
  }
  return res.json();
}

export const api = {
  // Auth Endpoints
  auth: {
    register: (data) =>
      request("/auth/register", { method: "POST", body: JSON.stringify(data) }),
    login: (data) =>
      request("/auth/login", { method: "POST", body: JSON.stringify(data) }),
    google: (data) =>
      request("/auth/google", { method: "POST", body: JSON.stringify(data) }),
    me: () => request("/auth/me", { method: "GET" }),
    getGoogleConfig: () => request("/auth/google-config", { method: "GET" }),
  },

  // Products Endpoints
  products: {
    getAll: () => request("/products"),
    getById: (id) => request(`/products/${id}`),
    create: (data) => request("/products", { method: "POST", body: JSON.stringify(data) }),
    update: (id, data) => request(`/products/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    delete: (id) => request(`/products/${id}`, { method: "DELETE" }),
  },

  // Incentives Endpoints
  incentives: {
    getByZip: (zip) => request(`/incentive/?zip_code=${encodeURIComponent(zip)}`),
    create: (data) => request("/incentive", { method: "POST", body: JSON.stringify(data) }),
  },

  // Users Endpoints
  users: {
    getAll: () => request("/user"),
    getByEmail: (email) => request(`/user/${encodeURIComponent(email)}`),
    create: (data) => request("/user", { method: "POST", body: JSON.stringify(data) }),
  },

  // Agent Chat Sessions & Streaming
  agent: {
    appName: "agent",
    getSessions: (userId = "user") =>
      request(`/apps/agent/users/${encodeURIComponent(userId)}/sessions`),
    getSession: (sessionId, userId = "user") =>
      request(`/apps/agent/users/${encodeURIComponent(userId)}/sessions/${encodeURIComponent(sessionId)}`),
    createSession: (userId = "user") =>
      request(`/apps/agent/users/${encodeURIComponent(userId)}/sessions`, { method: "POST" }),
    deleteSession: (sessionId, userId = "user") =>
      request(`/apps/agent/users/${encodeURIComponent(userId)}/sessions/${encodeURIComponent(sessionId)}`, {
        method: "DELETE",
      }),

    // SSE Streaming POST for /run_sse
    streamMessage: async (payload, onChunk) => {
      const url = `${API_BASE}/run_sse`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/event-stream",
          ...getAuthHeaders(),
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Agent stream error: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        while (true) {
          const newlineIndex = buffer.indexOf("\n");
          if (newlineIndex === -1) break;

          const line = buffer.slice(0, newlineIndex).trim();
          buffer = buffer.slice(newlineIndex + 1);

          if (line) {
            let raw = line;
            if (raw.startsWith("data:")) raw = raw.replace(/^data:\s*/, "");
            try {
              if (raw) {
                const parsed = JSON.parse(raw);
                await onChunk(parsed);
              }
            } catch (e) {
              // ignore parse errors on partial frames
            }
          }
        }
      }
      return true;
    },
  },
};
