import { useEffect, useState } from "react";
import { getProductDetail } from "./Api";
import { FaLocationDot, FaStar } from "react-icons/fa6";

interface ProductProp {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  price: number;
  rating: { rate: number };
}

const ProductInfo = ({ productId }: { productId: string }) => {
  const [product, setProduct] = useState<ProductProp>({
    id: 0,
    title: "",
    image: "",
    category: "",
    description: "",
    price: 0,
    rating: { rate: 0 },
  });

  const productData = async () => {
    const res = await getProductDetail(productId);
    setProduct(res);
  };
  useEffect(() => {
    productData();
  }, []);
  return (
    <div className="flex flex-col sm:flex-row  justify-between items-start gap-8  mt-6 py-10  px-4 md:px-12  bg-gray-100 rounded-md shadow-md">
      <div className="w-full sm:w-[45%] md:w-[30%] h-60 md:h-96 flex items-center justify-center  rounded-md shadow-md overflow-hidden bg-gray-100 p-4">
        <img
          src={product.image}
          alt="product item picture"
          className="w-full h-[90%] rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2 w-full sm:w-[45%] md:w-[40%] ">
        <h1 className="text-2xl font-heading font-semibold">{product.title}</h1>
        <h2 className="font-body text-gray-500">
          Category - {product.category}
        </h2>
        <div className="flex items-center gap-4 ">
          <div className="flex items-center gap-1 text-gray-700 font-body ">
            <span>Rating - {product.rating.rate}</span>
            <FaStar className="text-yellow-500" />
          </div>
          <span className="font-body text-yellow-600 font-semibold underline underline-offset-4">
            Price - {product.price} $
          </span>
        </div>
        <p className="font-body ">{product.description}</p>
      </div>
      <div className="flex flex-col gap-4 p-4 border border-gray-400 rounded-md shadow-md w-full md:w-[25%] max-w-80 min-w-40 ">
        <div className="flex gap-1 items-center text-base ">
          <FaLocationDot />
          <span className="font-heading font-semibold text-blue-500">
            Deliver to Myanmar
          </span>
        </div>
        <button className="rounded-md py-1 px-4  font-heading  shadow-md border border-gray-500">
          Add Cupon Code
        </button>
        <div className="h-[1px] bg-gray-500 w-full"></div>
        <button className="rounded-md py-1 px-4  font-heading  shadow-md border border-yellow-500 bg-yellow-400">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
