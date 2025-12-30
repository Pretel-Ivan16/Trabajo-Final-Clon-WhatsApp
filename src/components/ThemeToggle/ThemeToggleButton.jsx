import React from 'react';
import { useAppContext } from '../../context/AppContext';
import './css/style.css';

export default function ThemeToggleButton() {
  const { darkMode, toggleDarkMode } = useAppContext();

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleDarkMode}
      aria-label={`Cambiar a modo ${darkMode ? 'claro' : 'oscuro'}`}
      title={`Cambiar a modo ${darkMode ? 'claro' : 'oscuro'}`}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
