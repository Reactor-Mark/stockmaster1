import React, { useState } from "react";
import Modal from "./Modal";

export default function ProductoCard({ producto }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="producto-card">
        <strong>{producto.nombre}</strong> - {producto.categoria} - {producto.fabricante} - Stock: {producto.stock}
        {producto.stock === 0 && <span className="productos__alerta"> (¡Sin stock!)</span>}
        <button className="producto__detalles-btn" onClick={() => setModalOpen(true)}>
          Ver detalles
        </button>
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2>{producto.nombre}</h2>
        {producto.imagen && (
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="modal__imagen"
          />
        )}
        <p><strong>Categoría:</strong> {producto.categoria}</p>
        <p><strong>Fabricante:</strong> {producto.fabricante}</p>
        <p><strong>Stock:</strong> {producto.stock}</p>
        <p><strong>Descripción:</strong> {producto.descripcion || "No disponible"}</p>
        <p><strong>Precio:</strong> ${producto.precio}</p>
      </Modal>
    </>
  );
}
