import React from 'react';
import './css/styles.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Message({ text, fromMe, time, status }) {
  return (
    <div
      className={`message ${fromMe ? 'message--me' : 'message--other'}`}
    >
      <div className="message-bubble">
        <div className="message-content">
          <span className="message-text">{text}</span>

          <div className="message-meta">
            <time className="message-time">{time}</time>

            {fromMe && (
              <span
                className={`message-status message-status--${status}`}
                aria-label={`Estado del mensaje: ${status}`}
              >
                <i
                  className={`bi ${status === 'read' ? 'bi-check2-all' : 'bi-check2'}`}
                  aria-hidden="true"
                ></i>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
