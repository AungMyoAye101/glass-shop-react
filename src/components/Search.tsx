import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { getProduct } from "./Api";
import { CardProp } from "./Card";
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const [product, setProduct] = useState<CardProp[]>([]);

  const productData = async () => {
    const res = await getProduct();
    setProduct(res);
  };
  useEffect(() => {
    productData();
  }, [search]);

  const filteredProduct = product.filter((product) => {
    if (search.length < 1 || search === "") return;
    return product.title.toLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <section className="relative">
      <div onClick={() => setOpen((pre) => !pre)}>
        <FaMagnifyingGlass className="text-lg cursor-pointer hover:text-purple-400" />
      </div>
      {open && (
        <div className=" absolute top-10 -right-4 flex flex-col gap-1 p-2 rounded-md shadow-md w-80 bg-gray-100 ">
          <div className="flex items-center border border-gray-500 rounded-md shadow-sm">
            <input
              type="text"
              value={search}
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-md p-1   focus:outline-none  flex-1"
            />
          </div>
          {search.length > 0 && (
            <div className=" flex flex-col  bg-gray-100  rounded-md max-h-screen overflow-hidden overflow-y-scroll">
              {filteredProduct.map((item) => (
                <Link
                  to={`/product/${item.id}`}
                  className="flex items-center gap-2 border border-gray-300 m-1 hover:border-purple-400 rounded-md p-2 "
                  key={item.id}
                  onClick={() => (window.location.href = `/product/${item.id}`)}
                >
                  <div className="w-12 h-10 bg-gray-100">
                    <img
                      src={item.image}
                      alt="product image"
                      className=" w-full h-full "
                    />
                  </div>
                  <h2 className=" text-sm font-body line-clamp-1">
                    {item.title}
                  </h2>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Search;
