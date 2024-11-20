import Card, { CardProp } from "./Card";

const ProductGrid = ({ product }: { product: CardProp[] }) => {
  return (
    <section className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
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
    </section>
  );
};

export default ProductGrid;
