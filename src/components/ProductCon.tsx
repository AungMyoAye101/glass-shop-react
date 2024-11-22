import { lazy, Suspense, useEffect, useState } from "react";

import { getProduct } from "./Api";

import SkeletonCard from "./SkeletonCard";

const ProductGrid = lazy(() => import("./ProductGrid"));

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
      <Suspense fallback={<SkeletonCard />}>
        <ProductGrid product={product} />
      </Suspense>
    </section>
  );
};

export default ProductCon;
