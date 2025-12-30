import React, { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import "./css/styles.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(ChatContext);

  const handleClear = () => setSearchTerm("");

  return (
    <div className="searchbar-header">
      <div className="searchbar-header-container">
        <h2 className="searchbar-tittle">
          <a className="reference-whatsapp" href="https://web.whatsapp.com/">
            WhatsApp
          </a>
        </h2>
        <i class="bi bi-plus-square"></i>
        <i class="bi bi-three-dots-vertical"></i>
      </div>
      <div className="search-bar" role="search">
        <span className="search-icon" aria-hidden="true">
          <i className="bi bi-search"></i>
        </span>

        <input
          type="text"
          className="search-input"
          placeholder="Buscar o empezar un chat"
          aria-label="Buscar chats"
          value={searchTerm || ""}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {searchTerm && (
          <button
            type="button"
            className="search-clear"
            onClick={handleClear}
            aria-label="Limpiar búsqueda"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        )}
      </div>
    </div>
  );
}
