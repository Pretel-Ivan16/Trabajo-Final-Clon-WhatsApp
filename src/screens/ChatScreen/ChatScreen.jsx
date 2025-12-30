import React, { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import ChatHeader from "./components/ChatHeader";
import MessagesList from "./components/MessagesList";
import MessageComposer from "./components/MessageComposer";
import useChatNavigation from "./hooks/useChatNavigation";
import useEscapeKey from "./hooks/useEscapeKey";
import useMessageComposer from "./hooks/useMessageComposer";
import "./css/styles.css";

export default function ChatScreen() {
  const { chatActivo, seleccionarChat, enviarMensaje } =
    useContext(ChatContext);

  const { handleExit } = useChatNavigation(seleccionarChat);
  useEscapeKey(handleExit);

  const { input, setInput, handleSubmit } = useMessageComposer(
    chatActivo?.id,
    enviarMensaje
  );

  if (!chatActivo) {
    return (
      <div className="chat-screen-empty">
        Selecciona un chat para ver los mensajes
      </div>
    );
  }

  return (
    <div className="chat-screen">
      <ChatHeader chat={chatActivo} />
      <MessagesList
        messages={chatActivo.messages}
        senderName={chatActivo.name}
      />
      <MessageComposer
        input={input}
        setInput={setInput}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
