import { Link } from "react-router-dom";
import model from "../assets/model-1.png";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center gap-12 px-12 bg-gradient-to-tr from-purple-300  to-purple-500">
      <div className="flex flex-col gap-6 -full md:w-[45%]">
        <h1 className="text-6xl font-heading font-bold ">Collection</h1>
        <p className="text-2xl font-heading font-semibold">
          You can explore and shop many differnt collection from various barands
          here.
        </p>
        <Link
          to={"/shop"}
          className="bg-gray-900 rounded-md shadow-md px-4 py-2 text-slate-50 self-start  hover:bg-purple-600"
        >
          Shop Now
        </Link>
      </div>
      <div className="hidden md:block">
        <div className="bg-yellow-400 size-96 rounded-full">
          <img
            src={model}
            alt="model photo"
            className="rounded-md absolute bottom-0 w-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
