import React from "react";
import Message from "../../../components/Message/Message";

export default function MessagesList({ messages, senderName }) {
  return (
    <div className="chat-screen-messages">
      {messages.map((msg) => (
        <Message
          key={msg.id}
          text={msg.text}
          fromMe={msg.fromMe}
          time={msg.time}
          status={msg.status}
          sender={senderName}
        />
      ))}
    </div>
  );
}
