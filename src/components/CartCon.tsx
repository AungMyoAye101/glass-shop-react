import { FC } from "react";
import { FaPlus, FaTrashCan, FaX } from "react-icons/fa6";
import model from "../assets/model-1.png";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
interface CartProp {
  clickHandle: () => void;
}

const CartCon: FC<CartProp> = ({ clickHandle }) => {
  return (
    <section className=" w-60 h-screen  z-50 fixed right-0 top-0 rounded-md bg-gray-100 px-4 py-6">
      <button onClick={clickHandle}>
        <FaX />
      </button>

      <main className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-yellow-500 ">
          Your Cart items <span>(1)</span>
        </h1>
        <div className="h-[1px] w-full bg-gray-800 rounded"></div>
        <div className="flex flex-col gap-3 ">
          <div className="flex gap-2 justify-between items-center bg-gray-100 shadow-md rounded-md py-1 px-2">
            <img
              src={model}
              alt="model "
              className="w-14  h-12 bg-yellow-600 rounded-md "
            />
            <div className="flex flex-col items-center">
              <h2 className="text-sm line-clamp-1">name </h2>
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
          <div className="flex gap-2 justify-between items-center bg-gray-100 shadow-md rounded-md py-1 px-2">
            <img
              src={model}
              alt="model "
              className="w-14  h-12 bg-yellow-600 rounded-md "
            />
            <div className="flex flex-col items-center">
              <h2 className="text-sm line-clamp-1">name </h2>
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
          <div className="flex gap-2 justify-between items-center bg-gray-100 shadow-md rounded-md py-1 px-2">
            <img
              src={model}
              alt="model "
              className="w-14  h-12 bg-yellow-600 rounded-md "
            />
            <div className="flex flex-col items-center">
              <h2 className="text-sm line-clamp-1">name </h2>
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
          <div className="flex gap-2 justify-between items-center bg-gray-100 shadow-md rounded-md py-1 px-2">
            <img
              src={model}
              alt="model "
              className="w-14  h-12 bg-yellow-600 rounded-md "
            />
            <div className="flex flex-col items-center">
              <h2 className="text-sm line-clamp-1">name </h2>
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
        </div>
      </main>
    </section>
  );
};

export default CartCon;
