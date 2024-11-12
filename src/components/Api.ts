import axios from "axios";

const url = "https://fakestoreapi.com/products";
export const getProduct = () => {
  const productData = axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return productData;
};
