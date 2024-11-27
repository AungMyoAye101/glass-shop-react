import { useEffect, useState } from "react";
import { getProductDetail } from "./Api";
import { FaStar } from "react-icons/fa6";
import { useCart } from "./CartProvider";
import ProductDetailSkeleton from "./ProductDetailSkeleton";

interface ProductProp {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  price: number;
  rating: { rate: number; count: 0 };
}

const ProductInfo = ({ productId }: { productId: string }) => {
  const [product, setProduct] = useState<ProductProp>({
    id: 0,
    title: "",
    image: "",
    category: "",
    description: "",
    price: 0,
    rating: { rate: 0, count: 0 },
  });

  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  const productData = async () => {
    const res = await getProductDetail(productId);
    setProduct(res);
    setLoading(false);
  };
  useEffect(() => {
    productData();
  }, []);
  return (
    <section className="px-4 md:px-12">
      {loading ? (
        <ProductDetailSkeleton />
      ) : (
        <div className="flex flex-col sm:flex-row gap-8 justify-start  items-start  mt-4 py-10  px-4 md:px-12  bg-gray-100 rounded-md shadow-md">
          <div className="w-full md:w-[35%] h-80   rounded-md shadow-md overflow-hidden bg-gray-50 p-4">
            <img
              src={product.image}
              alt="product item picture"
              className="w-full h-full "
            />
          </div>

          <div className="flex flex-col gap-4 w-full md:w-[50%]  ">
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
              <div>Review - {product.rating.count}</div>
            </div>
            <p className="text-lg font-body text-yellow-600 font-semibold underline underline-offset-4">
              Price - {product.price} $
            </p>
            <p className="font-body ">{product.description}</p>
            <button
              className="rounded-md py-1 px-4  font-heading  shadow-md  bg-orange-400 self-start hover:bg-yellow-500"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductInfo;
