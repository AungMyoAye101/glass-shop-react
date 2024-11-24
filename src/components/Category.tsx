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
    <div className="flex flex-wrap gap-1 ">
      <Link to={""} className="px-1   hover:text-purple-600 font-body ">
        All
      </Link>
      {list.map((item, i) => (
        <Link
          to={`?search=${item}`}
          key={i}
          className="px-1    hover:text-purple-600 font-body "
        >
          {item}
        </Link>
      ))}
    </div>
  );
};

export default Category;
