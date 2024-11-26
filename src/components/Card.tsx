import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useCart } from "./CartProvider";

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
    <div className="min-w-20 group bg-gray-100 shadow relative overflow-hidden p-2  hover:shadow-purple-500">
      <Link
        to={`/product/${id}`}
        onClick={() => (window.location.href = `/product/${id}`)}
      >
        <div className="w-full h-28 sm:h-32 md:h-44 lg:h-48 overflow-hidden rounded-md ">
          <img src={image} alt="model" className="w-full h-full  " />
        </div>
      </Link>
      <div className=" flex flex-col gap-1 py-2">
        <h1 className="font-heading font-semibold text-sm md:text-base line-clamp-1">
          {title}
        </h1>
        <div className="flex justify-between items-center  font-body text-sm md:text-base">
          <div className="flex items-center gap-1 ">
            <span>{rating.rate}</span>
            <FaStar className="text-yellow-500" />
          </div>
          <p className=" text-orange-400 font-semibold">{price} $</p>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="px-2 py-1.5 bg-orange-400 rounded-full hover:bg-purple-400 "
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
