import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { getProduct } from "./Api";
import { CardProp } from "./Card";

const Search = () => {
  const [search, setSearch] = useState("");

  const [product, setProduct] = useState<CardProp>([]);

  const productData = async () => {
    const res = await getProduct();
    setProduct(res);
  };
  useEffect(() => {
    productData();
  }, [search]);
  const handleChange = (e: any) => {
    console.log(search);
    setSearch(e.target.value);
  };

  const filteredProduct = product.filter((product) =>
    product.title.toLowerCase().includes(search.toLocaleLowerCase())
  );
  console.log(filteredProduct);

  return (
    <>
      <input
        type="text"
        value={search}
        placeholder="Search..."
        className="rounded-md px-2 py-1   focus:outline-none flex-1"
        onChange={handleChange}
      />
      <button className="px-2 py-1  rounded">
        <FaMagnifyingGlass className="text-yellow-500 text-lg" />
      </button>
    </>
  );
};

export default Search;
