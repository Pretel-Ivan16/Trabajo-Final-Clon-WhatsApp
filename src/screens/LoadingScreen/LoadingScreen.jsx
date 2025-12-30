import React, { useEffect } from 'react';
import './css/styles.css';

export default function LoadingScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p>WhatsApp</p>
    </div>
  );
}
