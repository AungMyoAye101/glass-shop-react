import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [list, setlist] = useState([]);
  const getCategory = async () => {
    const res = await axios.get("https://fakestoreapi.com/products/categories");
    setlist(res.data);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <section className="min-w-60 rounded-md shadow-md bg-gray-100  p-4 ">
      <h1 className="text-xl font-heading font-semibold mb-2  underline  underline-offset-8">
        Category
      </h1>
      <div className="flex flex-col gap-2 ">
        {list.map((item, i) => (
          <Link
            to={`?search=${item}`}
            key={i}
            className="hover:text-purple-600 font-body "
          >
            {item}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Category;
