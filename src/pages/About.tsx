import delivery from "../assets/delivery.jpg";
import location from "../assets/location.jpg";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col gap-14   py-12 px-4 md:px-12 bg-gradient-to-tr from-purple-300 to-purple-500 ">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            saepe velit at similique mollitia eius ut quibusdam dolorem
            voluptatem repudiandae consectetur, modi quaerat libero accusantium
            architecto dolore consequatur veritatis esse?
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-6 md:gap-10">
        <div className="w-full sm:w-[80%] md:w-[40%]  h-72 md:h-80 aspect-video rounded-md overflow-hidden">
          <img src={location} alt="mall photo" className="w-full h-full " />
        </div>
        <div className="w-full md:w-[40%]">
          <p className="text-base md:text-xl font-body ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            saepe velit at similique mollitia eius ut quibusdam dolorem
            voluptatem repudiandae consectetur, modi quaerat libero accusantium
            architecto dolore consequatur veritatis esse?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
