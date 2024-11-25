import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { navLink } from "./NavBar";

const Footer = () => {
  return (
    <section className="px-4 md:px-12 py-4 rounded bg-gradient-to-b from-gray-300 to-gray-400  text-gray-800 flex justify-center">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-2xl font-bold font-heading">RARE </h1>
        <div className="flex gap-4 text-2xl ">
          <FaFacebook className="hover:text-purple-700" />
          <FaTwitter className="hover:text-purple-700" />
          <FaInstagram className="hover:text-purple-700" />
          <FaWhatsapp className="hover:text-purple-700" />
        </div>
        <div className="flex gap-4 text-lg font-body font-medium">
          {navLink.map((item, i) => (
            <Link to={item.path} key={i} className="hover:text-purple-600">
              {item.name}
            </Link>
          ))}
        </div>
        <div>
          <small>© 2024 Rare ecommerce by AMA. </small>
        </div>
      </div>
    </section>
  );
};

export default Footer;
