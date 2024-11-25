import { lazy, useEffect, useState } from "react";

import { getProduct } from "./Api";

import SkeletonCard from "./SkeletonCard";

const ProductGrid = lazy(() => import("./ProductGrid"));

const ProductCon = ({ title }: { title: string }) => {
  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(true);

  const productData = async () => {
    const res = await getProduct();
    setProduct(res);
    setloading(false);
  };
  useEffect(() => {
    productData();
  }, []);
  return (
    <section className="px-4 sm:px-6 md:px-12 py-4 ">
      <div className="space-y-4 bg-gray-100 rounde-md  px-6 py-8 rounded-md shadow-md">
        <h1 className="font-heading text-2xl font-semibold">{title}</h1>
        {loading ? <SkeletonCard /> : <ProductGrid product={product} />}
      </div>
    </section>
  );
};

export default ProductCon;
