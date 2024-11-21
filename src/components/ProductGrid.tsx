import { lazy, Suspense } from "react";
import { CardProp } from "./Card";
import Loading from "./Loading";
const Card = lazy(() => import("./Card"));

const ProductGrid = ({ product }: { product: CardProp[] }) => {
  return (
    <section className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
      {product.map(({ id, title, image, price, rating }) => (
        <Suspense fallback={<Loading />}>
          <Card
            key={id}
            id={id}
            title={title}
            image={image}
            price={price}
            rating={rating}
          />
        </Suspense>
      ))}
    </section>
  );
};

export default ProductGrid;
