// src/components/Modal.jsx
import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "90%",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()} // evita cerrar al hacer click dentro
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            border: "none",
            background: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          aria-label="Cerrar"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
