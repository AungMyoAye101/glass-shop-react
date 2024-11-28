import { FaStar } from "react-icons/fa";

import { IoMdPricetags } from "react-icons/io";
import { useCart } from "../components/CartProvider";

import { useState } from "react";
import Complete from "../components/Complete";

const Checkout = () => {
  const { cartItems, removeFromCart } = useCart();
  const [discount, setDiscount] = useState(0);
  const [showComplete, setShowComplete] = useState(false);

  const count = cartItems.reduce((total, item) => total + item.quantity, 0);

  const totalCount = cartItems.reduce(
    (total, curr) => total + curr.price * curr.quantity,
    0
  );

  const discountPrice = totalCount - totalCount * (discount / 100);
  return (
    <section className="min-h-screen py-6 px-6 md:px-12 flex flex-col md:flex-row gap-4 md:gap-8 items-start ">
      <div className="flex flex-col gap-4 bg-gray-100 px-4 py-6 rounded-md shadow-md flex-1  ">
        <h1 className="text-xl font-heading font-semibold">Shopping Cart</h1>

        {/* shopping cart section */}
        {cartItems.map((item) => (
          <div
            className="flex flex-col md:flex-row gap-2 justify-between border border-gray-400 rounded-md p-2 "
            key={item.id}
          >
            <div className="flex   gap-2 ">
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
                    <span>{item.rating.rate}</span>{" "}
                    <FaStar className="text-yellow-400" />
                  </p>
                  <p className="text-xs md:text-sm">
                    ({item.rating.count} ratings)
                  </p>
                </div>
              </div>
            </div>
            <div className="min-w-40 flex self-end md:self-start gap-2">
              <button
                className="text-red-400 hover:underline"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>

              <div className="flex gap-1 items-center text-purple-500">
                <IoMdPricetags className="text-lg " />
                <p className="text-lg font-body ">{item.price} $</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout section */}
      <div className="flex flex-col gap-4">
        <div className=" min-w-80 bg-gray-100 px-4 py-6 rounded-md shadow-md flex flex-col gap-4">
          <h2 className="text-xl font-heading font-semibold">Promotion</h2>
          <select
            className="px-2 py-1 rounded-md shadow-md font-body"
            onChange={(e) => setDiscount(Number(e.target.value))}
          >
            <option value="" selected disabled>
              Add Cupon Code
            </option>
            <option value="10"> 10% welcome discount</option>
            <option value="25">25% Super sales discount</option>
          </select>
        </div>

        <div className=" min-w-80 bg-gray-100 px-4 py-6 rounded-md shadow-md flex flex-col gap-4">
          <h1 className="text-xl font-semibold font-heading">Summary </h1>

          <div className="flex justify-between items-center gap-6">
            <h2 className="font-medium font-heading">Original Price </h2>
            <p className="font-body">{totalCount.toFixed(2)} $</p>
          </div>
          <div className="flex justify-between items-center gap-6">
            <h2 className=" font-medium font-heading">Discount % </h2>
            <p className=" font-body">{discount} %</p>
          </div>

          <div className="w-full h-[1px] bg-gray-300 "></div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold font-heading">
              Total{" "}
              <span className="font-body font-medium">({count} items)</span>
            </h3>
            <span className="font-body text-lg ">
              {discountPrice.toFixed(2)} $
            </span>
          </div>
          <button
            className="text-lg  font-heading px-4 py-1.5   rounded-md shadow-md bg-orange-400"
            onClick={() => {
              setShowComplete((pre) => !pre);
            }}
          >
            Complete Checkout
          </button>
        </div>
      </div>
      {showComplete && <Complete />}
    </section>
  );
};

export default Checkout;
