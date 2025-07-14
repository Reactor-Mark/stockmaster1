import React, { useState } from "react";
import useSearch from "../hooks/useSearch";
import { useNavigate } from "react-router-dom";
import ProductoCard from "../components/ProductoCard";

export default function Productos({ productos }) {
  const [query, setQuery] = useState("");
  const resultados = useSearch(productos, query, ["nombre", "categoria", "fabricante"]);
  const navigate = useNavigate();

  return (
    <section className="productos">
      <h2 className="productos__title">Listado de Productos</h2>
      <input
        className="productos__buscador"
        type="text"
        placeholder="Buscar productos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="productos__lista">
        {resultados.map((producto) => (
          <li key={producto.id} className="productos__item">
            <ProductoCard producto={producto} />
          </li>
        ))}
      </ul>

      <button className="productos__btn" onClick={() => navigate("/envios")}>
        Ir a Salida de Almacén
      </button>
    </section>
  );
}
