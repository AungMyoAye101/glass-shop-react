import ContactFrom from "../components/ContactFrom";
import contact from "../assets/coustomer-service.png";
const Contact = () => {
  return (
    <section className="h-screen flex items-start md:items-center  py-6 bg-gray-100 ">
      <div className="hidden md:block w-full md:w-[50%] h-full space-y-6   ">
        <h1 className="text-xl font-heading font-bold text-center">
          Please lets us know your problem
        </h1>
        <img src={contact} alt="contact guy" className="w-full h-full" />
      </div>
      <div className="w-full md:w-[50%] flex items-center justify-center relative z-10 px-2 ">
        <ContactFrom />
      </div>
      <div className="block md:hidden absolute inset-0 z-0 self-end">
        <img src={contact} alt="contact guy" className="w-40 h-30" />
      </div>
    </section>
  );
};

export default Contact;
