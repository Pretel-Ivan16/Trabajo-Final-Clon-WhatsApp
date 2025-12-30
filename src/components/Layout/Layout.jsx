import ChatList from "../ChatList/ChatList";
import SearchBar from "../SearchBar/SearchBar";
import Sidebar from "../Sidebar/Sidebar";
import ThemeToggleButton from "../ThemeToggle/ThemeToggleButton";
import React from "react";
import { useAppContext } from "../../context/AppContext";

const Layout = ({ children }) => {
  const { mobilePanel } = useAppContext();

  return (
    <div className="app-container">
      <aside className="sidebar">
        <Sidebar />
      </aside>

      <div className="app-content">
        <section
          className={`chat-list-panel ${
            mobilePanel === "chat-screen" ? "hidden-mobile" : ""
          }`}
        >
          <header className="chat-list-header">
            <SearchBar />
            <ThemeToggleButton />
          </header>

          <main className="chat-screen-panel">
            <ChatList />
          </main>
        </section>
        <div
          className={`chat-screen-wrapper ${
            mobilePanel === "chat-list" ? "hidden-mobile" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
