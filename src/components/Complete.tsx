import { useNavigate } from "react-router-dom";
import { useCart } from "./CartProvider";
import { FaCheckCircle } from "react-icons/fa";
import delivery from "../assets/delivery-truck.svg";
const Complete = () => {
  const { clearCart } = useCart();
  const navigate = useNavigate();
  return (
    <section className=" h-full bg-gray-400 bg-opacity-70 flex justify-center items-center fixed top-0 right-0 left-0 z-20 px-4">
      <div className="min-w-64   max-w-96 px-4 py-6 rounded-md shadow-md bg-gray-100 flex flex-col gap-4">
        <div className="text-lg md:text-xl text-green-700 font-heading flex gap-1 items-center justify-center">
          <h1>Your order is successfull.</h1>
          <FaCheckCircle />
        </div>
        <div className="flex justify-center">
          <img src={delivery} alt="delivery trunck" className="size-20 " />
        </div>
        <p className="font-body font-semibold text-center text-gray-600">
          " Thank you for your purchase! Your order has been successfully
          placed. We hope you enjoy your new items! "
        </p>
        <div className="flex  gap-2">
          <button
            className="flex-1 px-4 py-1 rounded-md shadow-md font-body bg-gray-200"
            onClick={() => {
              clearCart();
              navigate("/");
            }}
          >
            Back to home
          </button>
          <button
            className="flex-1 px-4 py-1 rounded-md shadow-md font-body bg-yellow-400"
            onClick={() => {
              clearCart();
              navigate("/shop");
            }}
          >
            Order again
          </button>
        </div>
      </div>
    </section>
  );
};

export default Complete;
