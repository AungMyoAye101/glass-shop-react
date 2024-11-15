import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CartCon from "./CartCon";
import { useState } from "react";

import { useCart } from "./CartProvider";

const navLink = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const NavBar = () => {
  const { cartItems } = useCart();
  const [open, setOpen] = useState(false);

  const clickHandle = () => {
    setOpen((pre) => !pre);
  };

  const count = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className="z-50 flex justify-center items-center gap-4 md:justify-between px-4 md:px-12 py-3 border-b shadow-md sticky top-0 right-0 left-0 bg-slate-50 bg-opacity-95 backdrop-blur-sm">
        <div className="flex items-center gap-4 ">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold font-heading">
              Ecommerce
            </h1>
          </div>

          <div className="hidden md:flex border-l border-gray-600">
            {navLink.map((item, i) => (
              <Link to={item.path} className="head-link relative group" key={i}>
                {item.name}
                <span className="left-0  bottom-0 h-1 w-0 group-hover:w-full bg-purple-400 rounded  absolute transition-all ease-out duration-500"></span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex md:hidden items-center border border-gray-500 rounded-md shadow-sm flex-1 min-w-16">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search..."
            className="rounded-md px-2 py-1   focus:outline-none  flex-1 min-w-10  "
          />
          <button className="px-2 py-1  rounded">
            <FaMagnifyingGlass className="text-yellow-500 text-lg" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center border border-gray-500 rounded-md shadow-sm   ">
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

          <div className="relative cursor-pointer" onClick={clickHandle}>
            <IoCartOutline className="text-xl" />
            {cartItems.length > 0 && (
              <div className="size-4 rounded-full text-sm font-body bg-rose-600 text-gray-100 flex justify-center items-center absolute -bottom-1 -right-1 ">
                {count}
              </div>
            )}
          </div>
        </div>
      </nav>
      {open && <CartCon clickHandle={clickHandle} />}
    </>
  );
};

export default NavBar;
