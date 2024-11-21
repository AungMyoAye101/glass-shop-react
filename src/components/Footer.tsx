import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="px-4 md:px-12 py-4 rounded bg-gradient-to-tr from-gray-300 to-gray-600  text-gray-800 flex justify-center">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-2xl font-bold font-heading">RARE </h1>
        <div className="flex gap-4 text-2xl">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaWhatsapp />
        </div>
        <div className="flex gap-4 text-lg font-body font-medium">
          <Link to={"/"}>Home</Link>
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact Us</Link>
        </div>
        <div>
          <small>© 2024 Rare ecommerce by AMA. </small>
        </div>
      </div>
    </section>
  );
};

export default Footer;
