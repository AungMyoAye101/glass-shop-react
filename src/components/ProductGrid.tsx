import { useEffect, useState } from "react";
import { getProduct } from "./Api";
import Card from "./Card";

const ProductGrid = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const res = getProduct();
    console.log(res, res);
  }, []);

  console.log(product);
  return (
    <section>
      <Card />
    </section>
  );
};

export default ProductGrid;
