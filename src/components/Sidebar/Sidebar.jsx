import React from "react";
import "./css/styles.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import FotoDePerfil from "../../Assets/Images/FotoDePerfil.jpg";

export default function Sidebar() {
  return (
    <nav className="sidebar-nav">
      <div className="sidebar-top">
        <ul className="sidebar-list sidebar-list-main">
          <li className="sidebar-item">
            <button className="button-sidebar" title="Chats" aria-label="Chats">
              <i className="bi bi-chat-square-dots" aria-hidden="true"></i>
            </button>
          </li>
          <li className="sidebar-item">
            <button
              className="button-sidebar"
              title="Llamadas"
              aria-label="Llamadas"
            >
              <i className="bi bi-telephone" aria-hidden="true"></i>
            </button>
          </li>
          <li className="sidebar-item">
            <button
              className="button-sidebar"
              title="Estados"
              aria-label="Estados"
            >
              <i className="bi bi-dash-circle-dotted" aria-hidden="true"></i>
            </button>
          </li>
          <li className="sidebar-item">
            <button
              className="button-sidebar"
              title="Canales"
              aria-label="Canales"
            >
              <i className="bi bi-filter-circle" aria-hidden="true"></i>
            </button>
          </li>
          <li className="sidebar-item">
            <button
              className="button-sidebar"
              title="Comunidades"
              aria-label="Comunidades"
            >
              <i className="bi bi-people" aria-hidden="true"></i>
            </button>
          </li>
        </ul>

        <div className="sidebar-divider"></div>

        <ul className="sidebar-list sidebar-list-archive">
          <li className="sidebar-item">
            <button
              className="button-sidebar"
              title="Archivado"
              aria-label="Archivado"
            >
              <i className="bi bi-archive" aria-hidden="true"></i>
            </button>
          </li>
        </ul>
      </div>

      <div className="sidebar-bottom">
        <div className="sidebar-divider"></div>

        <ul className="sidebar-list sidebar-list-footer">
          <li className="sidebar-item">
            <button
              className="button-sidebar"
              title="Ajustes"
              aria-label="Ajustes"
            >
              <i className="bi bi-gear" aria-hidden="true"></i>
            </button>
          </li>
          <li className="sidebar-item">
            <button
              className="button-sidebar"
              title="Perfil"
              aria-label="Perfil de usuario"
            >
              <img
                src={FotoDePerfil}
                alt="Foto de perfil del usuario"
                className="sidebar-avatar"
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
