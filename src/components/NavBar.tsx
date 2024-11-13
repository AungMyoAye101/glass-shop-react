import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="z-50 flex justify-between items-center px-6 md:px-12 py-3 border-b shadow-md sticky top-0 right-0 left-0 bg-slate-50 bg-opacity-95 backdrop-blur-sm">
      <div>
        <h1 className="text-3xl font-bold font-heading">Ecommerce</h1>
      </div>
      <div className="hidden md:flex">
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
      <div className="flex items-center gap-4">
        <button className="font-body  ">Sign Up</button>
        <div className="relative ">
          <FaCartShopping className="text-lg" />
          <div className="size-4 rounded-full text-sm font-body bg-rose-500 flex justify-center items-center absolute -top-[14px] left-[2px] ">
            3
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
