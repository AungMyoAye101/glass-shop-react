import { FC } from "react";
import { FaTrashCan, FaX } from "react-icons/fa6";

import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

import { useCart } from "./CartProvider";

interface CartProp {
  clickHandle: () => void;
}

const CartCon: FC<CartProp> = ({ clickHandle }) => {
  const { cartItems, removeFromCart, addQuantity, minusQuantity, clearCart } =
    useCart();

  const count = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <section className=" w-60 h-screen  z-50 fixed right-0 top-0 rounded-md bg-gray-100 px-4 py-6">
      <button onClick={clickHandle}>
        <FaX />
      </button>

      <main className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-yellow-500 ">
          Cart items <span className="text-gray-800">( {count} )</span>
        </h1>
        <div className="h-[1px] w-full bg-gray-800 rounded"></div>

        <div className="flex flex-col gap-3 ">
          {cartItems.map((item) => (
            <div className="flex gap-2 justify-between items-center bg-gray-100 shadow-md rounded-md py-1 px-2">
              <img
                src={item.image}
                alt="model "
                className="w-14  h-12 bg-yellow-600 rounded-md "
              />
              <div className="flex flex-col items-center">
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
            <div className="h-[1px] w-full bg-gray-800 rounded"></div>

            <button className="text-red-500" onClick={clearCart}>
              Clear all items
            </button>
          </>
        ) : (
          <p className="text-lg font-body">Your cart is empty</p>
        )}
      </main>
    </section>
  );
};

export default CartCon;
