import { useParams } from "react-router-dom";

import RelatedProduct from "../components/RelatedProduct";
import Category from "../components/Category";
import ProductInfo from "../components/ProductInfo";

const ProductsDetail = () => {
  const { id } = useParams();

  return (
    <section className="px-4 md:px-12">
      <ProductInfo productId={id!} />
      <div className="flex gap-4 py-10  ">
        <Category />
        <RelatedProduct />
      </div>
    </section>
  );
};

export default ProductsDetail;
