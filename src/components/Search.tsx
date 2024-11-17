import { FaMagnifyingGlass } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useSearchParams();
  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(search);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="rounded-md px-2 py-1   focus:outline-none flex-1"
      />
      <button className="px-2 py-1  rounded">
        <FaMagnifyingGlass className="text-yellow-500 text-lg" />
      </button>
    </form>
  );
};

export default Search;
