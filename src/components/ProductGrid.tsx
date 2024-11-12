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
    <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {product.map((p: any) => (
        <Card key={p.id} title={p.title} image={p.image} />
      ))}
    </section>
  );
};

export default ProductGrid;
