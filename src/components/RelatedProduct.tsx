import { useEffect, useState } from "react";

import { getProduct } from "./Api";
import Card from "./Card";

const RelatedProduct = () => {
  const [product, setProduct] = useState([]);

  const productData = async () => {
    const res = await getProduct();
    setProduct(res);
  };
  useEffect(() => {
    productData();
  }, []);
  return (
    <section className="px-12 py-10  space-y-4">
      <h1 className="text-2xl font-heading font-semibold ">Related Products</h1>
      <div className="flex overflow-hidden w-[100vw] gap-4 overflow-x-scroll ">
        {product.map(({ id, title, image, price, rating }) => (
          <Card
            key={id}
            id={id}
            title={title}
            image={image}
            price={price}
            rating={rating}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProduct;
