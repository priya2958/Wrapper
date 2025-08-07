// src/components/Toast.js
import React from "react";

export default function Toast({ message, type, onClose }) {
  if (!message) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        background: type === "success" ? "#4caf50" : "#f44336",
        color: "white",
        padding: "12px 24px",
        borderRadius: 6,
        zIndex: 9999,
        minWidth: 200,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      {message}
      <button
        onClick={onClose}
        style={{
          marginLeft: 16,
          background: "none",
          color: "white",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        X
      </button>
    </div>
  );
}
