import { Link } from "react-router-dom";

interface CardProp {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
}

const Card = ({ id, title, image, price, rating }: CardProp) => {
  return (
    <Link
      to={`/product/${id}`}
      className="min-w-40 rounded-md shadow-md overflow-hidden p-3 bg-gray-100"
    >
      <div className="w-full h-52 aspect-square rounded-md">
        <img src={image} alt="model" className="w-full h-full rounded-md  " />
      </div>
      <div className="py-2">
        <h1 className="font-heading font-semibold text-base line-clamp-1">
          {title}
        </h1>
        <div className="flex justify-between items-center py-2 font-body">
          <p className="text-sm">{rating} </p>
          <p className="text-base text-yellow-500 drop-shadow">{price} $</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
