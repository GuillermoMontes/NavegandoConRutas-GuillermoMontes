import { Link } from "react-router-dom";

function Producto({ nombre, precio, id, img }) {
  return (
    <div className="flex justify-center drop-shadow-xl my-4">
      <Link to={`${id}`}>
        <div className="bg-gray-800 p-1 my-1 hover:opacity-80 duration-100">
          <div className=" w-96  bg-purple-400  h-96 text-white text-lg text-center ">
            <img className="h-80 mx-auto w-full " src={img} />
            <h1>{nombre}</h1>
            <p>Precio: ${precio}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Producto;
