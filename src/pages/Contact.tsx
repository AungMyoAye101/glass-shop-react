import ContactFrom from "../components/ContactFrom";
import Model from "../assets/contact-model.png";

const Contact = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-tr from-purple-300 to-purple-500 ">
      <div className="z-10 relative">
        <ContactFrom />
      </div>
      {/* <div className="absolute inset-0 hidden md:block">
        <div className=" z-0 relative  flex items-end h-screen ">
          <img src={Model} alt="" className="max-w-3xl" />
        </div>
      </div> */}
    </section>
  );
};

export default Contact;
