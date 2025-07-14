import React, { useState } from "react";

export default function AgregarCantidadBtn({ producto, onAgregar }) {
  const [cantidad, setCantidad] = useState("");

  const handleChange = (e) => {
    const val = Math.max(0, Number(e.target.value));
    setCantidad(val);
  };

  const handleClick = () => {
    const cant = cantidad > 0 ? cantidad : 1;
    onAgregar({ ...producto, cantidad: cant });
    setCantidad(""); // Opcional: limpiar input después
  };

  return (
    <>
      <input
        type="number"
        min="1"
        value={cantidad}
        onChange={handleChange}
        placeholder="Cantidad"
        style={{ width: "60px", marginLeft: "10px" }}
      />
      <button
        className="envios__agregar"
        onClick={handleClick}
        style={{ marginLeft: "10px" }}
      >
        Agregar
      </button>
    </>
  );
}
