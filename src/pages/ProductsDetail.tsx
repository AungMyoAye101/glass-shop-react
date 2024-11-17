import { useParams } from "react-router-dom";

import RelatedProduct from "../components/RelatedProduct";
import ProductInfo from "../components/ProductInfo";
import { useEffect, useState } from "react";
import { getProduct } from "../components/Api";

const ProductsDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const productData = async () => {
    const res = await getProduct();
    setProduct(res);
  };
  useEffect(() => {
    productData();
  }, []);

  return (
    <section className="px-4 md:px-12">
      <ProductInfo productId={id!} />
      <div className=" py-10  ">
        <RelatedProduct productType="Related Products" product={product} />
      </div>
    </section>
  );
};

export default ProductsDetail;
