import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../components/Api";
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

  console.log(product);

  return (
    <section>
      <div className="flex gap-4">
        <div>
          <img src={product.image} alt="product item picture" />
        </div>
        <div>
          <h1>{product.title}</h1>
          <h2>{product.category}</h2>
          <div>
            <span>{product.rating.rate}satrs</span>{" "}
            <span>{product.price}$</span>
          </div>
          <p>{product.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductsDetail;
