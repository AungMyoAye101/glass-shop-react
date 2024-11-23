import ContactFrom from "../components/ContactFrom";
import contact from "../assets/coustomer-service.png";
const Contact = () => {
  return (
    <section className="h-screen flex items-center   ">
      <div className="w-[50%] h-full space-y-6 py-10 bg-gray-100">
        <h1 className="text-xl font-heading font-bold text-center">
          Please lets us know your problem
        </h1>
        <img src={contact} alt="" className="w-full h-full" />
      </div>
      <div className="w-[50%] flex items-center justify-center">
        <ContactFrom />
      </div>
    </section>
  );
};

export default Contact;
