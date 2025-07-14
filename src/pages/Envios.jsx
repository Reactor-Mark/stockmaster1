import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AgregarCantidadBtn from "../components/AgregarCantidadBtn";
import Buscador from "../components/Buscador";
import useSearch from "../hooks/useSearch";

export default function Envios({ productos, agregarAlCarrito }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const resultados = useSearch(productos, query, ["nombre", "categoria", "fabricante"]);

  return (
    <section className="envios">
      <h2 className="envios__title">Salida de Almacén</h2>

      <Buscador
        valor={query}
        onCambiar={(e) => setQuery(e.target.value)}
        placeholder="Buscar productos..."
      />

      <ul className="envios__lista">
        {resultados.map((producto) => (
          <li key={producto.id} className="envios__item">
            <div className="envios__info">
              <strong>{producto.nombre}</strong> - {producto.categoria} - {producto.fabricante} - ${producto.precio}
            </div>
            <div className="envios__acciones">
              <AgregarCantidadBtn producto={producto} onAgregar={agregarAlCarrito} />
            </div>
          </li>
        ))}
      </ul>

      <button className="envios__carrito" onClick={() => navigate("/carrito")}>
        Ir al carrito
      </button>
    </section>
  );
}

