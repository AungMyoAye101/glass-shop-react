import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

export interface CardProp {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: { rate: number };
}

const Card = ({ id, title, image, price, rating }: CardProp) => {
  return (
    <div className="group rounded-md shadow-md overflow-hidden p-3 bg-gray-100 relative">
      <div className="w-full h-20 sm:h-32 md:h-44 lg:h-52 aspect-square rounded-md">
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

      <div className="font-body absolute h-0 w-full left-0 right-0 bottom-0 z-20 group-hover:opacity-100 opacity-0 flex group-hover:h-full transition-all ease-out duration-500  flex-col gap-1 justify-center items-center  bg-gray-700 bg-opacity-75">
        <Link
          to={`/product/${id}`}
          className="  px-4 py-1 rounded-full bg-gray-100"
        >
          View Details
        </Link>
        <span className="text-lg font-semibold text-gray-100">OR</span>
        <button className="  px-4 py-1 rounded-full bg-yellow-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
