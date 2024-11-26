import { Link } from "react-router-dom";
import { navLink } from "./NavBar";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaX,
} from "react-icons/fa6";

const SideBars = ({
  closeSide,
  isOpen,
}: {
  closeSide: (type: string) => void;
  isOpen: boolean;
}) => {
  return (
    <section
      className="w-screen fixed  transition-all ease-out duration-1000 left-0 top-0 h-screen z-50 bg-gray-100 py-10 flex flex-col px-4 rounded-md ${
    "
    >
      <button
        className="p-2  rounded-full shadow-md self-end bg-gray-100"
        onClick={() => closeSide("side")}
      >
        <FaX />
      </button>
      <div className="border-b border-gray-400 py-2">
        <h1 className="text-2xl font-semibold text-center font-heading">
          RARE
        </h1>
      </div>
      <div className="flex flex-col items-center gap-2 py-6 ">
        {navLink.map((item) => (
          <Link
            to={item.path}
            className="head-link   "
            key={item.id}
            onClick={() => closeSide("side")}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex justify-center  py-3  gap-4 text-2xl border-t border-gray-400 ">
        <FaFacebook className="hover:text-purple-700" />
        <FaTwitter className="hover:text-purple-700" />
        <FaInstagram className="hover:text-purple-700" />
        <FaGithub className="hover:text-purple-700" />
      </div>
    </section>
  );
};

export default SideBars;
