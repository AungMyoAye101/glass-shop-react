import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-3 border-b shadow-md sticky top-0 right-0 left-0 bg-slate-50">
      <div>
        <h1 className="text-3xl font-bold font-heading">Ecommerce</h1>
      </div>
      <div>
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
      <div className="flex items-center gap-2">
        <div>Cart</div>
        <button className="text-lg px-4 py-1 rounded-full font-body shadow-md bg-purple-200">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
