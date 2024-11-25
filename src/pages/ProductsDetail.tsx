import { useParams } from "react-router-dom";

import ProductInfo from "../components/ProductInfo";

import ProductCon from "../components/ProductCon";

const ProductsDetail = () => {
  const { id } = useParams();

  return (
    <section className="px-4 md:px-12">
      <ProductInfo productId={id!} />
      <ProductCon title="Related product" />
    </section>
  );
};

export default ProductsDetail;
