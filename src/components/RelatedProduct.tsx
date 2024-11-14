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
    <section className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold font-heading">Related Product</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
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
