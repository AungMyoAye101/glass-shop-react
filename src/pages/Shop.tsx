import { useSearchParams } from "react-router-dom";
import Category from "../components/Category";
import { useEffect, useState } from "react";
import { getCategory, getProduct } from "../components/Api";
import ProductGrid from "../components/ProductGrid";

const Shop = () => {
  const [search] = useSearchParams();
  const value = search.get("search");

  const [product, setProduct] = useState([]);

  const productData = async () => {
    if (value) {
      const res = await getCategory(value);
      setProduct(res);
    } else {
      const res = await getProduct();
      setProduct(res);
    }
  };
  useEffect(() => {
    productData();
  }, [value]);

  return (
    <section className="px-4 md:px-12 ">
      <div className="flex flex-col gap-4 py-6  ">
        <Category />
        <ProductGrid product={product} />
      </div>
    </section>
  );
};

export default Shop;
