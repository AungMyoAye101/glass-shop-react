import { useParams } from "react-router-dom";

import ProductInfo from "../components/ProductInfo";
import { useEffect, useState } from "react";
import { getProduct } from "../components/Api";
import ProductGrid from "../components/ProductGrid";

const ProductsDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const productData = async () => {
    const res = await getProduct();
    setProduct(res);
  };
  useEffect(() => {
    productData();
  }, []);

  return (
    <section className="px-4 md:px-12">
      <ProductInfo productId={id!} />
      <div className=" py-10  ">
        <ProductGrid product={product} />
      </div>
    </section>
  );
};

export default ProductsDetail;
