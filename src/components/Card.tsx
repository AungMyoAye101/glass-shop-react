import { FaBagShopping, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useCart } from "./CartProvider";
import { FaInfoCircle } from "react-icons/fa";

export interface CardProp {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
}

const Card = ({ id, title, image, price, rating }: CardProp) => {
  const { addToCart } = useCart();
  const product = { id, title, image, price, rating };

  return (
    <div className="min-w-20 group rounded-md shadow-md  p-3 bg-gray-50 relative overflow-hidden">
      <div className="w-full h-20 sm:h-32 md:h-44 lg:h-52  rounded-md">
        <img src={image} alt="model" className="w-full h-full rounded-md  " />
      </div>
      <div className="py-2">
        <h1 className="font-heading font-semibold text-sm md:text-base line-clamp-1">
          {title}
        </h1>
        <div className="flex justify-between items-center  font-body text-sm md:text-base">
          <div className="flex items-center gap-1 ">
            <span>{rating.rate}</span>
            <FaStar className="text-yellow-500" />
          </div>
          <p className=" text-yellow-500 drop-shadow">{price} $</p>
        </div>
      </div>

      <div className="font-body absolute h-full  top-0 -right-full  group-hover:right-0   w-[20%] transition-all ease-out duration-500    ">
        <div className="flex flex-col gap-2 py-4  items-center bg-gray-600 rounded-md">
          <Link
            to={`/product/${id}`}
            className="text-xl p-1 rounded-full bg-gray-100 hover:bg-yellow-400"
          >
            <FaInfoCircle />
          </Link>

          <button
            className="text-xl p-1   rounded-full bg-gray-200 text-purple-600 hover:bg-yellow-400"
            onClick={() => addToCart(product)}
          >
            <FaBagShopping />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
