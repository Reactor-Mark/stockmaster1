// src/components/ProveedorForm.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProveedorForm() {
  const navigate = useNavigate();

  return (
    <button className="proveedores__resumen-btn" onClick={() => navigate("/")}>
      Ver resumen de inventario
    </button>
  );
}
