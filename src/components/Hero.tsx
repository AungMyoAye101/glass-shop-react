import model from "../assets/model.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-between gap-10 px-12">
      <div className="flex flex-col gap-6 w-[45%]">
        <h1 className="text-6xl font-heading font-semibold">Collection</h1>
        <p className="text-2xl font-heading ">
          You can explore and shop many differnt collection from various barands
          here.
        </p>
        <button className="bg-gray-900 rounded-md shadow-md px-4 py-2 text-slate-50 self-start">
          Shop Now
        </button>
      </div>
      <div className="">
        <div>
          <img src={model} alt="model photo" className="w-80 rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
