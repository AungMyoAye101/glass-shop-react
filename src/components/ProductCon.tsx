import { useEffect, useState } from "react";
import ProductGrid from "./ProductGrid";
import { getProduct } from "./Api";

const ProductCon = () => {
  const [product, setProduct] = useState([]);

  const productData = async () => {
    const res = await getProduct();
    setProduct(res);
  };
  useEffect(() => {
    productData();
  }, []);
  return (
    <section className="px-12 py-10 space-y-4 ">
      <h1 className="font-heading text-2xl font-semibold">Product</h1>
      <ProductGrid product={product} />
    </section>
  );
};

export default ProductCon;
