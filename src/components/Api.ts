const url = "https://fakestoreapi.com/products";
export const getProduct = async () => {
  let product;
  try {
    const res = await fetch(url);
    product = await res.json();
    return product;
  } catch (error) {
    console.log(error);
  }
};
