import productos from "../productos";
import { useParams } from "react-router-dom";

function DetalleProducto() {
  const { id } = useParams();
  const producto = productos.find((prod) => prod.id === parseInt(id));

  if (!producto) {
    return <h2>El producto no existe!</h2>;
  }
  return (
    <div className="flex justify-center drop-shadow-xl my-4">
      <div className="bg-gray-800 p-1 my-1 ">
        <div className="w-96  bg-purple-400   text-white text-lg text-center">
          <img className="h-80 mx-auto w-full " src={producto.img} />
          <h2>{producto.nombre}</h2>
          <p>Precio: ${producto.precio}</p>
          <p className="text-xl">Detalles del producto:</p>
          <p className="p-2">{producto.descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
