import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CartCon from "./CartCon";
import { useState } from "react";
import { useCart } from "./CartProvider";
import Search from "./Search";
import { FaBars } from "react-icons/fa6";
import SideBars from "./SideBars";

export const navLink = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Shop", path: "/shop" },
  { id: 3, name: "Blog", path: "/blog" },
  { id: 4, name: "Contact Us", path: "/contact" },
];

const NavBar = () => {
  const { cartItems } = useCart();

  const [toggle, setToggle] = useState({
    cart: false,
    side: false,
  });

  const showToggle = (type: string) => {
    if (type === "cart") {
      setToggle((pre) => ({ ...pre, cart: !pre.cart }));
    } else if (type === "side") {
      setToggle((pre) => ({ ...pre, side: !pre.side }));
    }
  };

  const count = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className="z-30 flex  items-center gap-2  md:gap-4 justify-between px-4 md:px-12 py-3 border-b shadow-md sticky top-0 right-0 left-0 bg-slate-50 bg-opacity-95 backdrop-blur-sm">
        <div
          className=" block md:hidden p-1.5 bg-gray-50 shadow-md rounded-full cursor-pointer hover:bg-purple-300"
          onClick={() => showToggle("side")}
        >
          <FaBars />
        </div>

        {toggle.side && (
          <SideBars closeSide={showToggle} isOpen={toggle.side} />
        )}

        <div className="flex items-center gap-4 ">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold font-heading">
              RARE
            </h1>
          </div>

          <div className="hidden md:flex border-l border-gray-600">
            {navLink.map((item) => (
              <Link
                to={item.path}
                className="head-link relative group"
                key={item.id}
              >
                {item.name}
                <span className="left-0  bottom-0 h-1 w-0 group-hover:w-full bg-purple-400 rounded  absolute transition-all ease-out duration-500"></span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex-1 hidden md:block">
          <Search />
        </div>
        <div className="flex items-center gap-4">
          <div
            className="relative cursor-pointer"
            onClick={() => showToggle("cart")}
          >
            <IoCartOutline className="text-2xl" />
            {cartItems.length > 0 && (
              <div className="size-4 rounded-full text-sm font-body bg-rose-600 text-gray-100 flex justify-center items-center absolute -bottom-1 -right-1 ">
                {count}
              </div>
            )}
          </div>
        </div>
      </nav>
      {toggle.cart && <CartCon clickHandle={showToggle} />}
    </>
  );
};

export default NavBar;
