import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Componentes/Layout";
import Inicio from "./Componentes/Inicio";
import Productos from "./Componentes/Productos";
import Nosotros from "./Componentes/Nosotros";
import Carrito from "./Componentes/Carrito";
import DetalleProducto from "./Componentes/DetalleProducto";
import Error from "./Componentes/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="productos" element={<Productos />} />
            <Route path="productos/:id" element={<DetalleProducto />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="carrito" element={<Carrito />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
