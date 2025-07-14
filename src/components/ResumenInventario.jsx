import React from "react";

export default function ResumenInventario({ productos = [] }) {
  const total = productos.length;
  const bajoStock = productos.filter(p => p.stock < 5).length;

  return (
    <div className="resumen-inventario">
      <h3>Resumen de Inventario</h3>
      <p>Total productos: {total}</p>
      <p>Productos con stock bajo: {bajoStock}</p>
    </div>
  );
}
