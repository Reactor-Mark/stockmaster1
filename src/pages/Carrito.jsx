import React from "react";
import DarSalidaBtn from "../components/DarSalidaBtn";

export default function Carrito({ carrito, quitarDelCarrito, vaciarCarrito }) {
  if (carrito.length === 0) {
    return <p className="carrito__vacio">El carrito está vacío.</p>;
  }

  const manejarDarSalida = () => {
    alert("La salida ha sido registrada correctamente.");
    vaciarCarrito(); // ✅ Vacía el carrito después de la salida
  };

  return (
    <section className="carrito">
      <h2 className="carrito__title">Carrito de Compras</h2>
      <ul className="carrito__lista">
        {carrito.map((producto, index) => (
          <li key={index} className="carrito__item">
            <strong>{producto.nombre}</strong> - Cantidad: {producto.cantidad} - Precio unitario: ${producto.precio}
            <button
              className="carrito__quitar"
              onClick={() => quitarDelCarrito(index)}
            >
              Quitar
            </button>
          </li>
        ))}
      </ul>

      <div className="carrito__acciones">
        <button className="carrito__finalizar" onClick={vaciarCarrito}>
          Vaciar Carrito
        </button>
        <DarSalidaBtn onClick={manejarDarSalida} />
      </div>
    </section>
  );
}

