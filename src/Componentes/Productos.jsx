import Producto from "./Producto";
import productos from "../productos";
import { useState } from "react";

const categorias = {
  TERMOS: "termos",
  MATES: "mates",
  COMBOS: "combos",
};

function Productos() {
  const [selecCategory, setSelecCategory] = useState("");

  const filtroProductos = selecCategory
    ? productos.filter((prod) => prod.categoria === selecCategory)
    : productos;

  return (
    <>
      <div className="flex bg-purple-500 justify-center text-lg">
        <button
          className=" text-zinc-200 mx-4 hover:text-white duration-300"
          onClick={() => setSelecCategory("")}
        >
          Todos los productos
        </button>
        <button
          className=" text-zinc-200 mx-4 hover:text-white duration-300"
          onClick={() => setSelecCategory(categorias.TERMOS)}
        >
          Termos
        </button>

        <button
          className=" text-zinc-200 mx-4 hover:text-white duration-300"
          onClick={() => setSelecCategory(categorias.MATES)}
        >
          Mates
        </button>
        <button
          className=" text-zinc-200 mx-4 hover:text-white duration-300"
          onClick={() => setSelecCategory(categorias.COMBOS)}
        >
          Combos
        </button>
      </div>

      <div>
        {filtroProductos.map((pr) => (
          <Producto key={pr.id} {...pr} />
        ))}
      </div>
    </>
  );
}

export default Productos;
