import ApiService from "../services/apiService.js";
const AgentName = "agent";
let activeSessionId = "";

document.addEventListener("DOMContentLoaded", () => {
  initChat();
});

function initChat() {
  const newSessionButton = document.getElementById("new-session");
  newSessionButton.addEventListener("click", createSession);
  listSessions();
}

// DOM elements
const messagesEl = document.getElementById("messages");
const form = document.getElementById("chat-form");
const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const fileInput = document.getElementById("file-input");
const uploadList = document.getElementById("upload-list");
const sessionsListWrapper = document.getElementById("sessions-list");

function listSessions() {
  ApiService.get(`/apps/${AgentName}/users/user/sessions`)
    .then((sessions) => {
      if (sessions && sessions.length) {
        activeSessionId = sessions[0].id;
        for (let i = 0; i < sessions.length; i++) {
          createSessionElement(sessions[i].id);
        }
      } else {
        createSession();
      }
    })
    .catch((error) => {
      console.error(error);
      createSession();
    });
}

function createSessionElement(id) {
  const li = document.createElement("li");
  li.setAttribute("id", `id-${id}`);
  li.setAttribute("class", "session-item");
  const deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "fa fa-trash delete-session");
  deleteIcon.onclick = (event) => deleteSession(event, id);
  const spanEl = document.createElement("span");
  spanEl.innerHTML = id;
  if (activeSessionId === id) {
    const existingSessions =
      sessionsListWrapper.querySelectorAll(".session-item");
    if (existingSessions.length) {
      for (let j = 0; j < existingSessions.length; j++) {
        existingSessions[j].classList.remove("active");
      }
    }
    li.classList.add("active");
    updateActiveSession(id);
  }
  li.onclick = () => updateActiveSession(id);
  li.appendChild(spanEl);
  li.appendChild(deleteIcon);
  sessionsListWrapper.appendChild(li);
}

async function createSession() {
  try {
    const session = await ApiService.post(`/apps/${AgentName}/users/user/sessions`);
    activeSessionId = session.id;
    createSessionElement(session.id);
    return session;
  } catch (error) {
    console.error("Error creating session:", error);
    return null;
  }
}

function deleteSession(event, id) {
  event.stopPropagation();
  ApiService.delete(`/apps/${AgentName}/users/user/sessions/${id}`)
    .then(() => {
      const sessionEl = document.getElementById(`id-${id}`);
      const wasActive = sessionEl?.classList.contains("active");
      sessionEl?.remove();

      if (wasActive) {
        const remainingSession = document.querySelector(".session-item");
        if (remainingSession) {
          const nextId = remainingSession.id.replace("id-", "");
          updateActiveSession(nextId);
        } else {
          activeSessionId = "";
          messagesEl.innerHTML = "";
          createSession();
        }
      }
    })
    .catch((error) => console.error(error));
}

function updateActiveSession(id) {
  ApiService.get(`/apps/${AgentName}/users/user/sessions/${id}`)
    .then((sessionResponse) => {
      const existingSessions =
        sessionsListWrapper.querySelectorAll(".session-item");
      if (existingSessions.length) {
        for (let j = 0; j < existingSessions.length; j++) {
          existingSessions[j].classList.remove("active");
        }
      }
      const listEl = document.getElementById(`id-${id}`);
      activeSessionId = id;
      listEl.classList.add("active");
      messagesEl.innerHTML = "";
      renderEvents(sessionResponse.events);
    })
    .catch((error) => console.error(error));
}

function renderEvents(events) {
  for (let i = 0; i < events.length; i++) {
    if (events[i].content) {
      appendMessage(events[i].content, events[i].content.role);
    }
  }
}

// Helpers
function escapeHtml(str) {
  if (typeof str !== "string") return String(str ?? "");
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function appendErrorMessage(msg) {
  const el = document.createElement("div");
  el.className = "message error";
  el.style.backgroundColor = "rgba(220, 53, 69, 0.15)";
  el.style.borderLeft = "4px solid #dc3545";
  el.style.color = "#ff6b6b";
  el.innerHTML = `<i class="fa fa-exclamation-circle"></i> <strong>Error:</strong> ${escapeHtml(msg)}`;
  messagesEl.appendChild(el);
  messagesEl.scrollTop = messagesEl.scrollHeight;
  return el;
}

function appendMessage(content, who = "model") {
  if (!content || !content.parts || !Array.isArray(content.parts)) return null;

  const el = document.createElement("div");
  el.className = `message ${who}`;

  for (let i = 0; i < content.parts.length; i++) {
    const part = content.parts[i];
    if (part.functionResponse) {
      el.className = `message model function`;
      el.innerHTML = `<i class="fa fa-check"></i> <strong>Tool Result:</strong> ${escapeHtml(part.functionResponse.name)}`;
    } else if (part.functionCall) {
      el.className = `message model function`;
      el.innerHTML = `<i class="fa fa-bolt"></i> <strong>Calling Tool:</strong> ${escapeHtml(part.functionCall.name)}`;
    } else {
      if (part.text) {
        const parsed = typeof marked !== "undefined" && marked.parse ? marked.parse(part.text) : escapeHtml(part.text);
        const textWrapper = document.createElement("div");
        textWrapper.className = "message-text";
        textWrapper.innerHTML = parsed;
        el.appendChild(textWrapper);
      }
      if (part.inlineData) {
        const mediaEl = createMediaElement(part.inlineData);
        if (mediaEl) {
          el.appendChild(mediaEl);
        }
      }
    }
  }

  messagesEl.appendChild(el);
  messagesEl.scrollTop = messagesEl.scrollHeight;
  return el;
}

function createMediaElement({ data, mimeType, displayName }) {
  const wrapper = document.createElement("div");
  wrapper.className = "message-media";
  const encrpytedData = data.replace(/_/g, "/").replace(/-/g, "+");
  if (mimeType.startsWith("image/")) {
    const img = document.createElement("img");
    img.src = `data:${mimeType};base64,${encrpytedData}`;
    img.alt = displayName;
    img.loading = "lazy";
    wrapper.appendChild(img);
  } else {
    // For non-image files, show a download link
    const link = document.createElement("a");
    link.href = `data:${mimeType};base64,${encrpytedData}`;
    link.download = displayName;
    link.innerHTML = `<i class="fa fa-download"></i> ${displayName}`;
    wrapper.appendChild(link);
  }

  return wrapper;
}

function setSending(isSending) {
  sendBtn.disabled = isSending;
  input.disabled = isSending;
}

// File handling
let currentFile = null;
const filePreview = document.createElement("div");
filePreview.className = "file-preview";
form.insertBefore(filePreview, form.firstChild);

async function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // Extract the base64 data from the DataURL
      const base64Data = reader.result.split(",")[1];
      resolve({
        data: base64Data,
        displayName: file.name,
        mimeType: file.type,
      });
    };
    reader.onerror = (error) => reject(error);
  });
}

function showFilePreview(file) {
  filePreview.innerHTML = "";
  if (!file) return;

  const wrapper = document.createElement("div");
  wrapper.className = "preview-wrapper";

  if (file.type.startsWith("image/")) {
    const img = document.createElement("img");
    img.className = "message-media preview";
    const reader = new FileReader();
    reader.onload = (e) => (img.src = e.target.result);
    reader.readAsDataURL(file);
    wrapper.appendChild(img);
  } else {
    const fileInfo = document.createElement("div");
    fileInfo.className = "file-info";
    fileInfo.innerHTML = `<i class="fa fa-file"></i> ${file.name}`;
    wrapper.appendChild(fileInfo);
  }

  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-preview";
  removeBtn.innerHTML = '<i class="fa fa-times"></i>';
  removeBtn.onclick = clearFilePreview;
  wrapper.appendChild(removeBtn);

  filePreview.appendChild(wrapper);
}

function clearFilePreview() {
  filePreview.innerHTML = "";
  currentFile = null;
  fileInput.value = "";
}

async function sendMessage(text, attachedFile = null) {
  if (!text && !attachedFile) return;

  setSending(true);

  if (!activeSessionId) {
    const newSession = await createSession();
    if (!newSession || !activeSessionId) {
      appendErrorMessage("Unable to initialize chat session. Please verify the backend is running.");
      setSending(false);
      return;
    }
  }

  const parts = [];

  if (text) {
    parts.push({ text });
  }

  if (attachedFile) {
    const base64Data = await fileToBase64(attachedFile);
    parts.push({ inlineData: base64Data });
  }

  appendMessage({ parts }, "user");
  clearFilePreview();

  const payload = {
    appName: AgentName,
    newMessage: { role: "user", parts },
    sessionId: activeSessionId,
    stateDelta: null,
    streaming: false,
    userId: "user",
  };

  try {
    let receivedAnyMessage = false;
    await ApiService.postWithStream("/run_sse", payload, async (chunk) => {
      if (!chunk || typeof chunk !== "object") return;

      if (chunk.errorMessage || chunk.error_message) {
        appendErrorMessage(chunk.errorMessage || chunk.error_message);
        receivedAnyMessage = true;
        return;
      }

      if (chunk.content) {
        appendMessage(chunk.content, chunk.content.role || "model");
        receivedAnyMessage = true;
      }
    });

    if (!receivedAnyMessage) {
      console.log("Stream ended without content");
    }
  } catch (err) {
    console.error("Chat error:", err);
    appendErrorMessage(`Chat error: ${err.message || err}`);
  } finally {
    setSending(false);
  }
}

// File input handler
fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    currentFile = file;
    showFilePreview(file);
  }
});

// Form submit
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = input.value.trim();
  input.value = "";
  await sendMessage(text, currentFile);
});
