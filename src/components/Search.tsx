import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { getProduct } from "./Api";
import { CardProp } from "./Card";
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");

  const [product, setProduct] = useState<CardProp[]>([]);

  const navigate = useNavigate();

  const productData = async () => {
    const res = await getProduct();
    setProduct(res);
  };
  useEffect(() => {
    productData();
  }, [search]);
  const handleSubmit = () => {
    setSearch("");
    console.log("click");
  };

  const filteredProduct = product.filter((product) => {
    if (search.length < 1 || search === "") return;
    return product.title.toLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchText"
          placeholder="Search..."
          className="rounded-md px-2 py-1   focus:outline-none flex-1"
        />
        <button type="submit" className="px-2 py-1  rounded">
          <FaMagnifyingGlass className="text-yellow-500 text-lg" />
        </button>
      </form>
      {search.length > 0 && (
        <div className="absolute top-16 flex flex-col  bg-gray-100  rounded-md max-h-screen  max-w-80 overflow-hidden overflow-y-scroll">
          {filteredProduct.map((item) => (
            <Link
              to={`/product/${item.id}`}
              className="flex items-center gap-2 border border-gray-300 m-1 hover:border-purple-400 rounded-md p-2 "
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
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
      )}
    </>
  );
};

export default Search;
