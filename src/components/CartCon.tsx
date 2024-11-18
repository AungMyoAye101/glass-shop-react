import { FC } from "react";
import { FaTrashCan, FaX } from "react-icons/fa6";

import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

import { useCart } from "./CartProvider";
import { Link } from "react-router-dom";

interface CartProp {
  clickHandle: () => void;
}

const CartCon: FC<CartProp> = ({ clickHandle }) => {
  const { cartItems, removeFromCart, addQuantity, minusQuantity, clearCart } =
    useCart();

  const count = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalCount = cartItems.reduce(
    (total, curr) => total + curr.price * curr.quantity,
    0
  );

  return (
    <section className=" w-80 h-screen overflow-hidden overflow-y-scroll  z-50 fixed right-0 top-0 rounded-md bg-gray-100 p-4 space-y-4">
      <button
        onClick={clickHandle}
        className="p-2 rounded-full bg-gray-50 shadow"
      >
        <FaX />
      </button>

      <main className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-yellow-500 ">
          Cart items <span className="text-gray-800">( {count} )</span>
        </h1>
        <div className="h-[1px] w-full bg-gray-700 rounded"></div>

        <div className="flex flex-col gap-2 ">
          {cartItems.map((item) => (
            <div className="flex gap-2 justify-between items-center bg-gray-100 shadow rounded-md py-1 px-2 border hover:border-purple-500">
              <div className="w-[25%] h-12 bg-gray-300 overflow-hidden rounded-md aspect-square ">
                <img
                  src={item.image}
                  alt="model "
                  className="w-full h-full aspect-square "
                />
              </div>
              <div className="w-[50%] flex flex-col items-center">
                <h2 className="text-sm line-clamp-1">{item.title}</h2>
                <div className="flex gap-2 items-center ">
                  <button onClick={() => addQuantity(item)}>
                    <FaPlusCircle />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => minusQuantity(item)}>
                    <FaMinusCircle />
                  </button>
                </div>
              </div>

              <button onClick={() => removeFromCart(item.id)}>
                <FaTrashCan className="text-red-500" />
              </button>
            </div>
          ))}
        </div>

        {cartItems.length > 0 ? (
          <>
            <div className="h-[1px] w-full bg-gray-700 rounded"></div>
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium font-heading">
                Total -{" "}
                <span className="text-base font-body">
                  {totalCount.toFixed(2)} ${" "}
                </span>
              </h2>
              <button className="text-red-500 font-heading" onClick={clearCart}>
                Clear all items
              </button>
            </div>
            <Link
              to={"/checkout"}
              className="px-4 py-1 text-center bg-yellow-500 rounded-md shadow-md "
            >
              Check Out
            </Link>
          </>
        ) : (
          <p className="text-lg font-body">Your cart is empty</p>
        )}
      </main>
    </section>
  );
};

export default CartCon;
