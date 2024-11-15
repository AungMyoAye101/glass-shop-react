import { FC, useEffect, useState } from "react";
import { FaTrashCan, FaX } from "react-icons/fa6";

import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { cart } from "./Api";

interface CartProp {
  clickHandle: () => void;
}

const CartCon: FC<CartProp> = ({ clickHandle }) => {
  const [cartItems, setcartItems] = useState(cart);
  useEffect(() => {
    setcartItems(cart);
  }, [cart]);

  return (
    <section className=" w-60 h-screen  z-50 fixed right-0 top-0 rounded-md bg-gray-100 px-4 py-6">
      <button onClick={clickHandle}>
        <FaX />
      </button>

      <main className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-yellow-500 ">
          Your Cart items <span>{cart.length}</span>
        </h1>
        <div className="h-[1px] w-full bg-gray-800 rounded"></div>
        {cart.length > 0 && (
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
                  <div className="flex gap-2  ">
                    <button onClick={() => item.quantity + 1}>
                      <FaPlusCircle />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => item.quantity - 1}>
                      <FaMinusCircle />
                    </button>
                  </div>
                </div>
                <button>
                  <FaTrashCan className="text-red-500" />
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </section>
  );
};

export default CartCon;
