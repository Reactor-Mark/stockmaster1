import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Korean Tyres</h1>
      <nav className="header__nav">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Checar Inventario</Link>
        <Link to="/envios">Salida de Almacén</Link>
        <Link to="/proveedores">Solicitar Material</Link>
      </nav>
    </header>
  );
}