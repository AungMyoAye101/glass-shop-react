import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../components/Api";
import { FaLocationDot, FaStar } from "react-icons/fa6";
import RelatedProduct from "../components/RelatedProduct";
import Category from "../components/Category";
interface ProductProp {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  price: number;
  rating: { rate: number };
}

const ProductsDetail = () => {
  const { id } = useParams();
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
    const res = await getProductDetail(id!);
    setProduct(res);
  };
  useEffect(() => {
    productData();
  }, []);

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 py-10 px-4 md:px-12  bg-gray-300">
        <div className="w-full md:w-[30%] h-60 md:h-96 flex items-center justify-center  rounded-md shadow-md overflow-hidden bg-gray-100 p-4">
          <img
            src={product.image}
            alt="product item picture"
            className="w-full  rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-[40%]">
          <h1 className="text-2xl font-heading font-semibold">
            {product.title}
          </h1>
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
        <div className="flex flex-col gap-4 p-4 border border-gray-400 rounded-md shadow-md w-full md:w-[20%]">
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
      <RelatedProduct />
      <Category />
    </section>
  );
};

export default ProductsDetail;
