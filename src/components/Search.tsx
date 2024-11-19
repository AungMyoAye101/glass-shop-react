import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { getProduct } from "./Api";
import { CardProp } from "./Card";
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");

  const [product, setProduct] = useState<CardProp[]>([]);

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

  const filteredProduct = product.filter((product) => {
    if (search.length < 1 || search === "") return;
    return product.title.toLowerCase().includes(search.toLocaleLowerCase());
  });

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
      <div className="absolute top-16 flex flex-col gap-1 bg-gray-100 p-2 rounded-md max-h-screen  max-w-80 overflow-hidden overflow-y-scroll">
        {search.length > 0 &&
          filteredProduct.map((item) => (
            <Link
              to={`/product/${item.id}`}
              className="flex items-center gap-2 border rounded-md p-2 "
              key={item.id}
            >
              <div className="w-10 h-8 ">
                <img
                  src={item.image}
                  alt="product image"
                  className=" w-full h-full"
                />
              </div>
              <h2 className=" text-sm font-body line-clamp-1">{item.title}</h2>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Search;
