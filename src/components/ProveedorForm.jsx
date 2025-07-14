import React, { useState } from "react";

export default function ProveedorForm() {
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [mensaje, setMensaje] = useState("");

  const enviarPedido = (e) => {
    e.preventDefault();
    if (!producto || cantidad <= 0) {
      setMensaje("Por favor, completa todos los campos correctamente.");
      return;
    }
    setMensaje(`Pedido enviado: ${cantidad} unidades de ${producto}`);
    setProducto("");
    setCantidad(0);
  };

  return (
    <form className="proveedor-form" onSubmit={enviarPedido}>
      <h3>Solicitar Material</h3>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={producto}
        onChange={e => setProducto(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={cantidad}
        onChange={e => setCantidad(parseInt(e.target.value))}
        min="1"
      />
      <button type="submit">Enviar Pedido</button>
      {mensaje && <p className="mensaje">{mensaje}</p>}
    </form>
  );
}
