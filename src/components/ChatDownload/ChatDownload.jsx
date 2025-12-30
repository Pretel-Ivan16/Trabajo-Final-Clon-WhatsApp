import React from "react";
import "./css/styles.css";

export default function ChatDownload() {
  return (
    <div className="wa-home__card">
      <div className="wa-home__logo" aria-hidden="true">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H0v2h24v-2h-4zM4 5h16v10H4V5z"></path>
        </svg>
      </div>
      <h1 className="wa-home__title">Descarga WhatsApp para Windows</h1>
      <p className="wa-home__text">
        Descarga la aplicación para Windows y haz llamadas, comparte pantalla y
        disfruta de una experiencia más rápida.
      </p>
      <a
        className="wa-home__btn"
        href="https://www.whatsapp.com/download"
        target="_blank"
        rel="noreferrer"
      >
        Descargar
      </a>
      <div className="wa-home__footer">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path>
        </svg>
        <span>
          Tus mensajes personales están cifrados de extremo a extremo.
        </span>
      </div>
    </div>
  );
}
