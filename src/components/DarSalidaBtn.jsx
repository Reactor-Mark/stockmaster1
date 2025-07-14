import React from "react";

export default function DarSalidaBtn({ onClick }) {
  return (
    <button
      className="darSalidaBtn"
      onClick={onClick}
      type="button"
    >
      Dar salida
    </button>
  );
}
