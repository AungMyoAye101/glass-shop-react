import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

const Checkout = () => {
  return (
    <section className="min-h-screen py-6 px-6 md:px-12 flex gap-4 justify-between ">
      <div className="flex flex-col gap-4 bg-gray-100 px-4 py-6 rounded-md shadow-md">
        <div className="flex gap-6">
          <img src="" alt="" className="w-40 h-32 bg-green-100 shadow" />
          <p>produt name hdsd fsdfsdf</p>
        </div>
        <div className="flex gap-6">
          <img src="" alt="" className="w-40 h-32 bg-green-100 shadow" />
          <p>produt name hdsd fsdfsdf</p>
        </div>
        <div className="flex gap-6">
          <img src="" alt="" className="w-40 h-32 bg-green-100 shadow" />
          <p>produt name hdsd fsdfsdf</p>
        </div>
        <div className="flex gap-6">
          <img src="" alt="" className="w-40 h-32 bg-green-100 shadow" />
          <p>produt name hdsd fsdfsdf</p>
        </div>
      </div>

      <div className="bg-gray-100 px-4 py-6 rounded-md shadow-md">
        <h1>Checkout</h1>

        <div className="flex justify-between items-center gap-4 bg-gray-50 rounded shadow-md px-4 py-2">
          <img src="/" alt="" className="w-14 h-10 bg-red-400 " />

          <h2 className="font-body font-medium ">product name </h2>
          <div className="flex gap-2 items-center ">
            <button>
              <FaPlusCircle />
            </button>
            <span>{1}</span>
            <button>
              <FaMinusCircle />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 px-4 py-6 rounded-md shadow-md">
        <div>
          <h1>Deliver to Mandalay</h1>
        </div>
      </div>

      {/* <div className="max-w-3xl mx-auto rounded-md shadow-md p-6 border border-gray-400 flex flex-col gap-4">
        <h1 className="text-xl font-semibold font-heading text-yellow-500">
          Ckeckout your paymont
        </h1>
        <div className="w-full h-[2px] bg-gray-600 rounded "></div>
        <div className="flex flex-col gap-3 ">
          <div className="flex justify-between items-center bg-gray-50 rounded shadow-md px-4 py-2">
            <img src="/" alt="" className="w-14 h-10 bg-red-400 " />

            <h2 className="font-body font-medium ">product name </h2>
            <div className="flex gap-2 items-center ">
              <button>
                <FaPlusCircle />
              </button>
              <span>{1}</span>
              <button>
                <FaMinusCircle />
              </button>
            </div>

            <div>
              <FaTrash />
            </div>
          </div>
          <div className="flex justify-between items-center bg-gray-50 rounded shadow-md px-4 py-2">
            <img src="/" alt="" className="w-14 h-10 bg-red-400 " />

            <h2 className="font-body font-medium ">product name </h2>
            <div className="flex gap-2 items-center ">
              <button>
                <FaPlusCircle />
              </button>
              <span>{1}</span>
              <button>
                <FaMinusCircle />
              </button>
            </div>

            <div>
              <FaTrash />
            </div>
          </div>
          <div className="flex justify-between items-center bg-gray-50 rounded shadow-md px-4 py-2">
            <img src="/" alt="" className="w-14 h-10 bg-red-400 " />

            <h2 className="font-body font-medium ">product name </h2>
            <div className="flex gap-2 items-center ">
              <button>
                <FaPlusCircle />
              </button>
              <span>{1}</span>
              <button>
                <FaMinusCircle />
              </button>
            </div>

            <div>
              <FaTrash />
            </div>
          </div>
          <div className="flex justify-between items-center bg-gray-50 rounded shadow-md px-4 py-2">
            <img src="/" alt="" className="w-14 h-10 bg-red-400 " />

            <h2 className="font-body font-medium ">product name </h2>
            <div className="flex gap-2 items-center ">
              <button>
                <FaPlusCircle />
              </button>
              <span>{1}</span>
              <button>
                <FaMinusCircle />
              </button>
            </div>

            <div>
              <FaTrash />
            </div>
          </div>
          <div className="flex justify-between items-center bg-gray-50 rounded shadow-md px-4 py-2">
            <img src="/" alt="" className="w-14 h-10 bg-red-400 " />

            <h2 className="font-body font-medium ">product name </h2>
            <div className="flex gap-2 items-center ">
              <button>
                <FaPlusCircle />
              </button>
              <span>{1}</span>
              <button>
                <FaMinusCircle />
              </button>
            </div>

            <div>
              <FaTrash />
            </div>
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-600 rounded "></div>
        <button className="px-4 py-2 rounded-md shadow-md bg-yellow-400">
          Buy Now
        </button>
      </div> */}
    </section>
  );
};

export default Checkout;
