import React, { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import ChatListItem from "./ChatListItem";
import "./css/styles.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ChatList() {
  const { chats, seleccionarChat, searchTerm } = useContext(ChatContext);
  const { showChatScreen } = useAppContext();
  const navigate = useNavigate();

  if (!chats) return null;

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes((searchTerm || "").toLowerCase())
  );

  const timeToMinutes = (time) => {
    if (!time || typeof time !== "string") return -1;
    const match = time.trim().match(/^(\d{1,2}):(\d{2})$/);
    if (!match) return -1;
    const hours = Number(match[1]);
    const minutes = Number(match[2]);
    if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return -1;
    return hours * 60 + minutes;
  };

  const createdAtToMs = (createdAt) => {
    if (!createdAt || typeof createdAt !== "string") return null;
    const ms = new Date(createdAt).getTime();
    return Number.isFinite(ms) ? ms : null;
  };

  const sortedChats = [...filteredChats].sort((a, b) => {
    const aCreatedAt = createdAtToMs(a.lastMessage?.createdAt);
    const bCreatedAt = createdAtToMs(b.lastMessage?.createdAt);

    if (aCreatedAt != null || bCreatedAt != null) {
      const aValue = aCreatedAt ?? -Infinity;
      const bValue = bCreatedAt ?? -Infinity;
      if (aValue !== bValue) return bValue - aValue;
    }

    const aMinutes = timeToMinutes(a.lastMessage?.time);
    const bMinutes = timeToMinutes(b.lastMessage?.time);
    if (aMinutes !== bMinutes) return bMinutes - aMinutes;
    return a.name.localeCompare(b.name);
  });

  const handleChatClick = (chat) => {
    seleccionarChat(chat.id);
    navigate(`/chat/${chat.id}`);
    showChatScreen();
  };

  return (
    <section className="chat-list" aria-label="Lista de chats">
      <ul className="chat-list-items">
        {sortedChats.map((chat) => (
          <ChatListItem
            key={chat.id}
            chat={chat}
            onClick={() => handleChatClick(chat)}
          />
        ))}
      </ul>
    </section>
  );
}
