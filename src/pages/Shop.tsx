import Category from "../components/Category";
import RelatedProduct from "../components/RelatedProduct";

const Shop = () => {
  return (
    <section>
      <div className="flex gap-4 py-6  ">
        <Category />
        <RelatedProduct productType="Product" />
      </div>
    </section>
  );
};

export default Shop;
