import { FC } from "react";
import { FaTrashCan, FaX } from "react-icons/fa6";

import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

interface CartProp {
  clickHandle: () => void;
}
interface Cart {
  id: number;
  title: string;
  image: string;
}
export const cart: Cart[] = [];

const CartCon: FC<CartProp> = ({ clickHandle }) => {
  console.log(cart);
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
            {cart.map((item) => (
              <div className="flex gap-2 justify-between items-center bg-gray-100 shadow-md rounded-md py-1 px-2">
                <img
                  src={item.image}
                  alt="model "
                  className="w-14  h-12 bg-yellow-600 rounded-md "
                />
                <div className="flex flex-col items-center">
                  <h2 className="text-sm line-clamp-1">{item.title}</h2>
                  <div className="flex gap-2  ">
                    <button>
                      <FaPlusCircle />
                    </button>
                    <span>2</span>
                    <button>
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
