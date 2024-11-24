import { Link } from "react-router-dom";
import jo from "../img/model-1.png";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Collection",
    dese: "You can explore and shop many differnt collection from various barands here.",
    image: jo,
  },
  {
    title: "Co",
    dese: "You can explore and shop many differnt collection from various barands here.",
    image: jo,
  },
  {
    title: "Collection3",
    dese: "You can explore and shop many differnt collection from various barands here.",
    image: jo,
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((pre) => (pre === slides.length - 1 ? 0 : pre + 1));
    }, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [slides.length]);

  return (
    <main className=" max-w-8xl overflow-hidden">
      <div className="flex w-screen ">
        {slides.map((item, i) => (
          <section
            key={i}
            className="w-screen min-h-screen relative flex-shrink-0 flex items-center justify-center gap-12 px-12 bg-gradient-to-tr from-purple-300  to-purple-500 transition-transform duration-700"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <div className="flex flex-col gap-6 -full md:w-[45%]">
              <h1 className="text-6xl font-heading font-bold ">{item.title}</h1>
              <p className="text-2xl font-heading font-semibold">{item.dese}</p>
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
                  src={item.image}
                  alt="model photo"
                  className="rounded-md absolute bottom-0 w-96"
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Hero;
