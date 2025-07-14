import React from "react";

export default function Buscador({ valor, onCambiar, placeholder }) {
  return (
    <input
      type="text"
      value={valor}
      onChange={onCambiar}
      placeholder={placeholder}
      className="buscador"
    />
  );
}
