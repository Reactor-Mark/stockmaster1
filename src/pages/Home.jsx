import React from "react";
import { useNavigate } from "react-router-dom";
import ResumenInventario from "../components/ResumenInventario";

export default function Home({ productos }) {
  const navigate = useNavigate();

  return (
    <section className="home">
      <h2 className="home__title">Bienvenido, ¿Qué deseas hacer?</h2>

      <div className="home__actions-bg"> {/* Contenedor con imagen */}
        <div className="home__actions">
          <button onClick={() => navigate("/productos")} className="home__btn">
            Checar Inventario
          </button>
          <button onClick={() => navigate("/envios")} className="home__btn">
            Salida de Almacén
          </button>
          <button onClick={() => navigate("/proveedores")} className="home__btn">
            Solicitar Material
          </button>
        </div>
      </div>

      <ResumenInventario productos={productos} />
    </section>
  );
}

