import { Link, Outlet } from "react-router-dom";
import thermos_argentina from "../../public/thermos_argentina.svg"
import { BsCart4 } from "react-icons/bs";

function Layout() {
  return (
    <>
      <nav className="bg-purple-600 h-16 content-center text-zinc-200 text-lg drop-shadow-xl font-semibold  min-w-48">
        <ul className="flex justify-between drop-shadow-xl ">
          <li className=" ml-2 text-xl text-white">
            <Link to={"/"}>
            <div className="flex">
            <img className="w-7 mr-1" src={thermos_argentina} />
            <p>MATERERÍA</p> 
            </div>

            </Link>
          </li>
          <li className=" hover:text-white duration-300">
            <Link to={"/"}>Inicio</Link>
          </li>
          <li className=" hover:text-white duration-300">
            <Link to={"productos"}>Productos</Link>
          </li>
          <li className=" hover:text-white duration-300">
            <Link to={"nosotros"}>Nosotros</Link>
          </li>

          <li className="mr-2  hover:text-white duration-300">
            <Link to={"carrito"}>
            <BsCart4 className="w-8 h-6"/>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
