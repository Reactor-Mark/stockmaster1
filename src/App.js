import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Proveedores from "./pages/Proveedores";
import Envios from "./pages/Envios";
import Carrito from "./pages/Carrito";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { productos } from "./data/productosMock";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
  };

  const quitarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item, i) => i !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home productos={productos} />} />
          <Route path="/productos" element={<Productos productos={productos} />} />
          <Route path="/proveedores" element={<Proveedores />} />
          <Route path="/envios" element={<Envios productos={productos} agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/carrito" element={<Carrito carrito={carrito} quitarDelCarrito={quitarDelCarrito} vaciarCarrito={vaciarCarrito} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;