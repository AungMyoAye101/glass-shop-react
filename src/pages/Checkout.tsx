import { FaStar } from "react-icons/fa";

import { IoMdPricetags } from "react-icons/io";
import { useCart } from "../components/CartProvider";

const Checkout = () => {
  const { cartItems, removeFromCart } = useCart();

  const count = cartItems.reduce((total, item) => total + item.quantity, 0);

  const totalCount = cartItems.reduce(
    (total, curr) => total + curr.price * curr.quantity,
    0
  );

  const discountPrice = totalCount - totalCount * 0.1;
  return (
    <section className="min-h-screen py-6 px-6 md:px-12 flex flex-col md:flex-row gap-4  items-start ">
      <div className="flex flex-col gap-4 bg-gray-100 px-4 py-6 rounded-md shadow-md flex-1  ">
        <h1 className="text-xl font-heading font-semibold">Shopping Cart</h1>

        {/* shopping cart section */}
        {cartItems.map((item) => (
          <div className="flex gap-2 justify-between border border-gray-400 rounded-md p-2 ">
            <div className="flex flex-col md:flex-row  gap-2 ">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 md:w-24 h-14 md:h-20  shadow"
              />
              <div className="flex flex-col gap-1">
                <h1 className="text-base md:text-lg font-heading font-medium">
                  {item.title}
                </h1>
                <div className="text-sm md:text-base flex items-center font-body gap-2">
                  <p className="flex items-center gap-1 ">
                    <span>4.5</span> <FaStar className="text-yellow-400" />
                  </p>
                  <p className="text-xs md:text-sm">(100 ratings)</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <button className="text-red-400 hover:underline">Remove</button>

              <div className="flex gap-1 items-center text-purple-500">
                <IoMdPricetags className="text-xl " />
                <p className="text-lg font-body ">{item.price} $</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout section */}
      <div className=" min-w-80 bg-gray-100 px-4 py-6 rounded-md shadow-md flex flex-col gap-4">
        <h1 className="text-xl font-semibold font-heading">Summary </h1>

        <div className="flex justify-between items-center gap-6">
          <h2 className="font-medium font-heading">Original Price</h2>
          <p className="font-body">{totalCount} $</p>
        </div>
        <div className="flex justify-between items-center gap-6">
          <h2 className=" font-medium font-heading">Discount Price</h2>
          <p className=" font-body">{10} %</p>
        </div>
        <div className="w-full h-[1px] bg-gray-300 "></div>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold font-heading">
            Total <span className="font-body font-medium">({count} items)</span>
          </h3>
          <span className="font-body text-lg ">
            {discountPrice.toFixed(2)} $
          </span>
        </div>
        <button className="text-lg font-heading px-4 py-2 rounded-md shadow-md bg-yellow-400">
          Complete Checkout
        </button>
      </div>
    </section>
  );
};

export default Checkout;
