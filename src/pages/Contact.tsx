import ContactFrom from "../components/ContactFrom";

const Contact = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-tr from-purple-300 to-purple-500 ">
      <div className="flex flex-col gap-6">
        <h1 className="font-heading text-2xl font-bold text-gray-100">
          Please Let us Know your problem.
        </h1>
        <ContactFrom />
      </div>
    </section>
  );
};

export default Contact;
