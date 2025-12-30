import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function MessageComposer({ input, setInput, onSubmit }) {
  return (
    <form className="chat-screen-composer" onSubmit={onSubmit}>
      <input
        type="text"
        className="chat-screen-input"
        placeholder="Escribe un mensaje..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="chat-screen-send"
        type="submit"
        aria-label="Enviar mensaje"
        title="Enviar"
      >
        <i className="bi bi-send" aria-hidden="true"></i>
      </button>
    </form>
  );
}
