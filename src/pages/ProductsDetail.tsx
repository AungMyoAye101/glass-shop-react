import { useParams } from "react-router-dom";

import RelatedProduct from "../components/RelatedProduct";
import Category from "../components/Category";
import ProductInfo from "../components/ProductInfo";

const ProductsDetail = () => {
  const { id } = useParams();

  return (
    <section className="px-4 md:px-12">
      <ProductInfo productId={id!} />
      <RelatedProduct />
      <Category />
    </section>
  );
};

export default ProductsDetail;
