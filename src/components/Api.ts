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
export const getProductDetail = (id: string) => {
  const productData = axios
    .get(url + "/" + id)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return productData;
};
export const getCategory = (name: string) => {
  const productData = axios
    .get(url + "/category/" + name)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return productData;
};

interface Cart {
  id: number;
  title: string;
  image: string;
  quantity: number;
}
export const cart: Cart[] = [];
