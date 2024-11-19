import Card, { CardProp } from "./Card";

interface RelatedProductProp {
  product: CardProp[];
  productType?: string;
}
const RelatedProduct = ({ product, productType }: RelatedProductProp) => {
  return (
    <section className="flex flex-col gap-4 bg-gray-100 p-4 rounded-md shadow-md">
      <h1 className="text-xl font-semibold font-heading">{productType}</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {product.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProduct;
