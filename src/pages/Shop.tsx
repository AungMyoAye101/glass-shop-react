import { useSearchParams } from "react-router-dom";
import Category from "../components/Category";
import { lazy, useEffect, useState } from "react";
import { getCategory, getProduct } from "../components/Api";

import SkeletonCard from "../components/SkeletonCard";
const ProductGrid = lazy(() => import("../components/ProductGrid"));

const Shop = () => {
  const [search] = useSearchParams();
  const value = search.get("search");

  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(true);
  const productData = async () => {
    if (value) {
      const res = await getCategory(value);
      setProduct(res);
      setloading(false);
    } else {
      const res = await getProduct();
      setProduct(res);
      setloading(false);
    }
  };
  useEffect(() => {
    productData();
  }, [value]);

  return (
    <section className="px-4 md:px-12 ">
      <div className="flex flex-col gap-4 py-6  ">
        <Category />
        {loading ? <SkeletonCard /> : <ProductGrid product={product} />}
      </div>
    </section>
  );
};

export default Shop;
