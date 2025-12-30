import { useState } from "react";

export default function useMessageComposer(chatId, enviarMensaje) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const now = new Date();

    const newMessage = {
      id: `msg-${Date.now()}`,
      fromMe: true,
      text: input,
      time: now.toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      createdAt: now.toISOString(),
      status: "read",
    };

    enviarMensaje(chatId, newMessage);
    setInput("");
  };

  return {
    input,
    setInput,
    handleSubmit,
  };
}
