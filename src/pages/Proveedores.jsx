import React, { useState } from "react";
import useSearch from "../hooks/useSearch";
import Buscador from "../components/Buscador";
import SolicitarBtn from "../components/SolicitarBtn";
import { productos } from "../data/productosMock";

export default function Proveedores() {
  const [query, setQuery] = useState("");
  const resultados = useSearch(productos, query, ["nombre", "categoria", "fabricante"]);
  const [cantidades, setCantidades] = useState({});

  const manejarCambioCantidad = (id, valor) => {
    setCantidades((prev) => ({ ...prev, [id]: valor }));
  };

  const solicitarProducto = (producto) => {
    const cantidad = cantidades[producto.id] || 1;
    alert(`La solicitud se ha generado.\nProducto: ${producto.nombre}\nCantidad: ${cantidad}`);
    
    setCantidades((prev) => ({ ...prev, [producto.id]: "" }));
  };


  return (
    <section className="proveedores">
      <h2 className="proveedores__title">Solicitar Material</h2>

      <Buscador
        valor={query}
        onCambiar={(e) => setQuery(e.target.value)}
        placeholder="Buscar productos..."
      />

      <ul className="proveedores__lista">
        {resultados.map((producto) => (
          <li key={producto.id} className="proveedores__item">
            <div className="proveedores__info">
              <strong>{producto.nombre}</strong> - {producto.categoria} - {producto.fabricante}  
              <br />
              <em>Proveedor: {producto.proveedor}</em> - Stock: {producto.stock}
              {producto.stock === 0 && (
                <span className="productos__alerta"> (¡Sin stock!)</span>
              )}
            </div>
 
            <div className="proveedores__acciones">
              <input
                type="number"
                min="1"
                className="proveedores__cantidad"
                placeholder="Cantidad"
                value={cantidades[producto.id] || ""}
                onChange={(e) => manejarCambioCantidad(producto.id, e.target.value)}
              />
              <SolicitarBtn
                producto={producto}
                cantidad={cantidades[producto.id]}
                onSolicitar={solicitarProducto}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}


