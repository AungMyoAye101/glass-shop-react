import delivery from "../assets/delivery.jpg";
import location from "../assets/location.jpg";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col gap-14   py-12 px-4 md:px-12  ">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 ">
        <div className="w-full sm:w-[80%] md:w-[40%] rounded-md overflow-hidden">
          <img
            src={delivery}
            alt="mall photo"
            className="w-full h-full aspect-video"
          />
        </div>
        <div className="w-full md:w-[40%]">
          <p className="text-base md:text-xl font-body">
            We pride ourselves on providing an unparalleled delivery experience.
            Our commitment to excellence ensures that your shopping journey is
            smooth, from the moment you place your order to the moment it
            arrives at your doorstep.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-6 md:gap-10">
        <div className="w-full sm:w-[80%] md:w-[40%]  h-72 md:h-80 aspect-video rounded-md overflow-hidden">
          <img src={location} alt="mall photo" className="w-full h-full " />
        </div>
        <div className="w-full md:w-[40%]">
          <p className="text-base md:text-xl font-body ">
            We are dedicated to providing an outstanding shopping experience
            from start to finish. Our commitment to excellence ensures that you
            receive the best service possible, every time you shop with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
