import { useEffect, useState } from "react";
import { getProduct } from "./Api";
import Card from "./Card";

const ProductGrid = () => {
  const [product, setProduct] = useState([]);

  const productData = async () => {
    const res = await getProduct();
    setProduct(res);
  };
  useEffect(() => {
    productData();
  }, []);

  console.log(product);
  return (
    <section>
      {product.map((p) => (
        <Card />
      ))}
    </section>
  );
};

export default ProductGrid;
