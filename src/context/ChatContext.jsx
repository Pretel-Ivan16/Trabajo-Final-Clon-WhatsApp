import React, { createContext, useCallback, useEffect, useState } from 'react';
import mockChats from '../data/mockChats';

export const ChatContext = createContext();

const parseTimeToHoursMinutes = (time) => {
  if (!time || typeof time !== 'string') return null;
  const match = time.trim().match(/^([01]?\d|2[0-3]):([0-5]\d)$/);
  if (!match) return null;
  return { hours: Number(match[1]), minutes: Number(match[2]) };
};

const ensureUniqueMessageIds = (chatId, messages) => {
  const seen = new Map();

  return messages.map((msg, index) => {
    const base = msg && typeof msg === 'object' ? msg : {};
    const rawId = typeof base.id === 'string' && base.id.trim() ? base.id.trim() : `${chatId}-msg-${index}`;

    const used = seen.get(rawId) || 0;
    seen.set(rawId, used + 1);

    const id = used === 0 ? rawId : `${rawId}-${used + 1}`;
    const fromMe = typeof base.fromMe === 'boolean' ? base.fromMe : false;

    return {
      ...base,
      id,
      fromMe
    };
  });
};

const withLastMessageCreatedAt = (sourceChats) => {
  const now = new Date();

  return sourceChats.map((chat, index) => {
    const lastMessage = chat.lastMessage;
    let nextChat = chat;

    if (lastMessage && !lastMessage.createdAt) {
      const createdAtDate = new Date(now);
      const daysAgo = chat.id === 'chat-1' ? 1 : Math.min(index, 7);
      createdAtDate.setDate(createdAtDate.getDate() - daysAgo);

      const parsedTime = parseTimeToHoursMinutes(lastMessage.time);
      if (parsedTime) {
        createdAtDate.setHours(parsedTime.hours, parsedTime.minutes, 0, 0);
      }

      nextChat = {
        ...chat,
        lastMessage: {
          ...lastMessage,
          createdAt: createdAtDate.toISOString()
        }
      };
    }

    const rawMessages = Array.isArray(nextChat.messages) ? nextChat.messages : [];
    const normalizedMessages = ensureUniqueMessageIds(nextChat.id, rawMessages);

    return {
      ...nextChat,
      messages: normalizedMessages,
      unreadCount: Number.isFinite(nextChat.unreadCount) ? Math.max(0, Math.floor(nextChat.unreadCount)) : 0
    };
  });
};

export function ChatProvider({ children }) {
  const [chats, setChats] = useState(() => withLastMessageCreatedAt(mockChats));
  const [activeChatId, setActiveChatId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const chatActivo = chats.find(chat => chat.id === activeChatId) || null;

  const seleccionarChat = useCallback((chatId) => {
    setActiveChatId(chatId);

    if (!chatId) return;

    setChats(prevChats =>
      prevChats.map(chat => {
        if (chat.id !== chatId) return chat;
        return {
          ...chat,
          unreadCount: 0
        };
      })
    );
  }, []);

  const enviarMensaje = (chatId, mensaje) => {
    const now = new Date();
    const mensajeConMeta = {
      ...mensaje,
      createdAt: mensaje?.createdAt || now.toISOString(),
      time:
        mensaje?.time ||
        now.toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        })
    };

    setChats(prevChats =>
      prevChats.map(chat =>
        chat.id === chatId
          ? {
              ...chat,
              messages: (() => {
                const base = Array.isArray(chat.messages) ? chat.messages : [];
                const nextMessage = mensajeConMeta;
                return [...base, nextMessage];
              })(),
              lastMessage: mensajeConMeta,
              unreadCount: (() => {
                if (mensajeConMeta.fromMe) return chat.unreadCount || 0;
                if (chatId === activeChatId) return 0;
                return (chat.unreadCount || 0) + 1;
              })()
            }
          : chat
      )
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveChatId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ChatContext.Provider
      value={{
        chats,
        chatActivo,
        activeChatId,
        seleccionarChat,
        enviarMensaje,
        searchTerm,
        setSearchTerm
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
