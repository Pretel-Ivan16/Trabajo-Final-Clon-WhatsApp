import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app.jsx";
import { AppProvider } from "./context/AppContext";
import { ChatProvider } from "./context/ChatContext";
import "./global.css";
import React from "react";
import ThemeWrapper from "./components/ThemeWrapper/ThemeWrapper";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <ChatProvider>
      <BrowserRouter>
        <ThemeWrapper>
          <App />
        </ThemeWrapper>
      </BrowserRouter>
    </ChatProvider>
  </AppProvider>
);
