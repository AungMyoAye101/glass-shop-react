import { useSearchParams } from "react-router-dom";
import Category from "../components/Category";
import RelatedProduct from "../components/RelatedProduct";
import { useEffect, useState } from "react";
import { getCategory } from "../components/Api";

const Shop = () => {
  const [search] = useSearchParams();
  const value = search.get("search");

  const [product, setProduct] = useState([]);

  const productData = async () => {
    if (!value) return;
    const res = await getCategory(value);
    setProduct(res);
  };
  useEffect(() => {
    productData();
  }, [value]);
  console.log(product);

  return (
    <section>
      <div className="flex gap-4 py-6  ">
        <Category />
        <RelatedProduct productType="Product" product={product} />
      </div>
    </section>
  );
};

export default Shop;
