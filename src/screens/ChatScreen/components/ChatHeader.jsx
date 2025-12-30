import React from "react";
import { useAppContext } from "../../../context/AppContext";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ChatHeader({ chat }) {
  const { showChatList } = useAppContext();

  return (
    <header className="chat-screen-header">
      <button
        className="chat-screen-back-btn"
        onClick={showChatList}
        title="Volver a la lista"
        aria-label="Volver a la lista de chats"
      >
        <i className="bi bi-chevron-left" aria-hidden="true"></i>
      </button>
      <img
        className="chat-screen-avatar"
        src={chat.avatar}
        alt={`Avatar de ${chat.name}`}
      />
      <h1 className="chat-screen-title">{chat.name}</h1>
      <ul className="chat-screen-list">
        <li className="chat-screen-action">
          <button
            className="chat-screen-action-btn"
            title="Videollamada"
            aria-label="Iniciar videollamada"
          >
            <i className="bi bi-camera-video" aria-hidden="true"></i>
          </button>
        </li>
        <li className="chat-screen-action">
          <button
            className="chat-screen-action-btn"
            title="Llamada"
            aria-label="Iniciar llamada"
          >
            <i className="bi bi-telephone" aria-hidden="true"></i>
          </button>
        </li>
        <li className="chat-screen-action">
          <button
            className="chat-screen-action-btn"
            title="Buscar"
            aria-label="Buscar en el chat"
          >
            <i className="bi bi-search" aria-hidden="true"></i>
          </button>
        </li>
        <li className="chat-screen-action">
          <button
            className="chat-screen-action-btn"
            title="Más opciones"
            aria-label="Más opciones"
          >
            <i className="bi bi-three-dots-vertical" aria-hidden="true"></i>
          </button>
        </li>
      </ul>
    </header>
  );
}
