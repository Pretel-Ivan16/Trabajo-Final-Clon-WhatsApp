import React from "react";
import { useAppContext } from "../../context/AppContext";

export default function ThemeWrapper({ children }) {
  const { darkMode } = useAppContext();
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>{children}</div>
  );
}
