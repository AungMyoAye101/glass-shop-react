import { useNavigate } from "react-router-dom";
import { useCart } from "./CartProvider";
import { FaCheckCircle } from "react-icons/fa";

const Complete = () => {
  const { clearCart } = useCart();
  const navigate = useNavigate();
  return (
    <section className="h-screen bg-gray-400 bg-opacity-70 flex justify-center items-center absolute top-0 right-0 left-0 z-30">
      <div className="min-w-80  max-w-96 px-4 py-6 rounded-md shadow-md bg-gray-100 flex flex-col gap-4">
        <div className="text-lg text-green-700 font-heading flex gap-1 items-center justify-center">
          <h1>Your order is successfully completed</h1>
          <FaCheckCircle />
        </div>
        <p className="font-body font-semibold text-center text-gray-600">
          " Thank you for your purchase! Your order has been successfully
          placed. We hope you enjoy your new items! "
        </p>

        <button
          className="flex-1 px-4 py-1 rounded-md shadow-md font-body bg-yellow-400"
          onClick={() => {
            clearCart();
            navigate("/");
          }}
        >
          order again
        </button>
      </div>
    </section>
  );
};

export default Complete;
