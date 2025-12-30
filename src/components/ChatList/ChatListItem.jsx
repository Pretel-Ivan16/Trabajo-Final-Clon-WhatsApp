import React from "react";

export default function ChatListItem({ chat, onClick }) {
  const getStatusIconClass = (status) => {
    if (status === "read") return "bi-check2-all";
    if (status === "delivered") return "bi-check2";
    return "bi-check2";
  };

  const getTimeLabel = (lastMessage) => {
    if (!lastMessage) return "";

    const createdAt = lastMessage.createdAt;
    if (!createdAt) return lastMessage.time || "";

    const messageDate = new Date(createdAt);
    if (!Number.isFinite(messageDate.getTime())) return lastMessage.time || "";

    const now = new Date();
    const startOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );
    const startOfMessageDay = new Date(
      messageDate.getFullYear(),
      messageDate.getMonth(),
      messageDate.getDate()
    );

    const diffDays = Math.round((startOfToday - startOfMessageDay) / 86400000);

    if (diffDays <= 0) return lastMessage.time || "";
    if (diffDays === 1) return "Ayer";

    return new Intl.DateTimeFormat("es-ES", { weekday: "long" })
      .format(messageDate)
      .toLowerCase();
  };

  return (
    <li className="chat-list-item">
      <button
        type="button"
        className="chat-list-button"
        onClick={onClick}
        aria-label={`Abrir chat con ${chat.name}`}
      >
        <img
          src={chat.avatar}
          alt={`Avatar de ${chat.name}`}
          className="chat-avatar"
        />

        <div className="chat-info">
          <h3 className="chat-name">{chat.name}</h3>

          <p className="chat-last-message">
            {chat.lastMessage?.fromMe && (
              <span
                className={`chat-status chat-status--${
                  chat.lastMessage?.status || "delivered"
                }`}
                aria-label={`Estado del mensaje: ${
                  chat.lastMessage?.status || "delivered"
                }`}
              >
                <i
                  className={`bi ${getStatusIconClass(
                    chat.lastMessage?.status
                  )}`}
                  aria-hidden="true"
                ></i>
              </span>
            )}
            {chat.lastMessage?.text}
          </p>
        </div>

        <div className="chat-meta">
          <time
            className="chat-time"
            dateTime={chat.lastMessage?.createdAt || undefined}
          >
            {getTimeLabel(chat.lastMessage)}
          </time>

          {chat.unreadCount > 0 && (
            <span className="chat-unread" aria-label="Mensajes sin leer">
              {chat.unreadCount}
            </span>
          )}
        </div>
      </button>
    </li>
  );
}
