import { useParams } from "react-router-dom";

const ProductsDetail = () => {
  const { id } = useParams();
  return <div>ProductsDetail {id}</div>;
};

export default ProductsDetail;
