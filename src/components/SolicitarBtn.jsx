// src/components/
import React from "react";

export default function SolicitarBtn({ producto, cantidad, onSolicitar }) {
  const manejarClick = () => {
    if (!cantidad || cantidad <= 0) {
      alert("Por favor ingresa una cantidad válida.");
      return;
    }
    onSolicitar(producto);
  };

  return (
    <button className="proveedores__btn" onClick={manejarClick}>
      Solicitar
    </button>
  );
}
