import mall from "../assets/ecommerce.jpg";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col gap-12   py-10 px-4 md:px-12 bg-gradient-to-tr from-purple-300 to-purple-500 ">
      <div className="flex justify-center items-center gap-10">
        <div className="w-[40%] rounded-md">
          <img src={mall} alt="mall photo" className="w-full h-full " />
        </div>
        <div className="w-[40%]">
          <p className="text-xl font-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            saepe velit at similique mollitia eius ut quibusdam dolorem
            voluptatem repudiandae consectetur, modi quaerat libero accusantium
            architecto dolore consequatur veritatis esse?
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-center items-center gap-10">
        <div className="w-[40%] rounded-md">
          <img src={mall} alt="mall photo" className="w-full h-full " />
        </div>
        <div className="w-[40%]">
          <p className="text-xl font-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            saepe velit at similique mollitia eius ut quibusdam dolorem
            voluptatem repudiandae consectetur, modi quaerat libero accusantium
            architecto dolore consequatur veritatis esse?
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10">
        <div className="w-[40%] rounded-md">
          <img src={mall} alt="mall photo" className="w-full h-full " />
        </div>
        <div className="w-[40%]">
          <p className="text-xl font-body">
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
