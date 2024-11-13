import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="z-50 flex justify-between items-center px-6 md:px-12 py-3 border-b shadow-md sticky top-0 right-0 left-0 bg-slate-50 bg-opacity-95 backdrop-blur-sm">
      <div className="flex items-center gap-4 ">
        <div>
          <h1 className="text-3xl font-bold font-heading">Ecommerce</h1>
        </div>

        <div className="hidden md:flex border-l border-gray-600">
          <Link to="/" className="head-link ">
            Home
          </Link>
          <Link to="/shop" className="head-link ">
            Shop
          </Link>
          <Link to="/about" className="head-link">
            About
          </Link>
          <Link to="/contact" className="head-link">
            Contact
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center border border-gray-500 rounded-md shadow-sm  gap-4 ">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search..."
            className="rounded-md px-2 py-1   focus:outline-none flex-1"
          />
          <button className="px-2 py-1  rounded">
            <FaMagnifyingGlass className="text-yellow-500 text-lg" />
          </button>
        </div>

        <div className="relative ">
          <IoCartOutline className="text-xl" />
          <div className="size-4 rounded-full text-sm font-body bg-rose-600 text-gray-100 flex justify-center items-center absolute -bottom-1 -right-1 ">
            3
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
