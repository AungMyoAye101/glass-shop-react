import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="rounded-md px-2 py-1   focus:outline-none flex-1"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="px-2 py-1  rounded">
        <FaMagnifyingGlass className="text-yellow-500 text-lg" />
      </button>
    </div>
  );
};

export default Search;
