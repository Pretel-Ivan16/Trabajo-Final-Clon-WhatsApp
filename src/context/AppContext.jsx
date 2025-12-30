import React, { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [mobilePanel, setMobilePanel] = useState("chat-list"); // 'chat-list' o 'chat-screen'

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const showChatList = () => {
    setMobilePanel("chat-list");
  };

  const showChatScreen = () => {
    setMobilePanel("chat-screen");
  };

  useEffect(() => {
    const modeClass = darkMode ? "dark-mode" : "light-mode";
    document.body.className = modeClass;
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        mobilePanel,
        showChatList,
        showChatScreen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
