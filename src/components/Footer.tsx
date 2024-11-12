import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="px-12 py-4 rounded  border border-gray-800 space-y-2">
      <div className="  flex flex-wrap gap-6  items-center justify-center  md:justify-between ">
        <div>
          <h1 className="text-2xl font-heading ">Ecommerce</h1>
        </div>
        <div className="flex flex-col gap-3 ">
          <Link
            to="/"
            className="text-lg font-body hover:text-purple-400 hover:underline-offset-8 hover:underline"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-lg font-body hover:text-purple-400 hover:underline-offset-8 hover:underline"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-lg font-body hover:text-purple-400 hover:underline-offset-8 hover:underline"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-lg font-body hover:text-purple-400 hover:underline-offset-8 hover:underline"
          >
            Contact
          </Link>
        </div>
        <div className="flex gap-2 flex-col">
          <textarea
            className="border border-gray-400 focus:outline-none rounded-md shadow-md px-4 py-1 h-20"
            placeholder="Lets us know your opion"
          />
          <button className="px-4 py-1 rounded-md shadow-md bg-purple-500 text-gray-100">
            Send
          </button>
        </div>
      </div>
      <div className="bg-gray-900 rounded-md py-1 ">
        <p className="text-center text-gray-100">
          Copyright & allrights reserved.{" "}
          <span className="text-purple-600">Make With Love</span>
        </p>
      </div>
    </section>
  );
};

export default Footer;
