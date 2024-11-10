import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-3 border-b shadow-md">
      <div>
        <h1 className="text-4xl font-bold font-heading">Ecommerce</h1>
      </div>
      <div>
        <Link to="/" className="head-link ">
          Home
        </Link>
        <Link to="/" className="head-link ">
          Shop
        </Link>
        <Link to="/" className="head-link">
          About
        </Link>
        <Link to="/" className="head-link">
          Contact
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <div>Cart</div>
        <button className="text-lg px-4 py-1 rounded-full shadow-md bg-purple-200">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
