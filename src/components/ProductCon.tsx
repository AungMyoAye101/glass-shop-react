import Card from "./Card";

const ProductCon = () => {
  return (
    <section className="px-12 py-10 space-y-4 ">
      <h1 className="font-heading text-2xl font-semibold">Product</h1>
      <div className="grid grid-cols-4 gap-6 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default ProductCon;
