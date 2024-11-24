import { Link } from "react-router-dom";

import slide from "../img/slide1.png";
import slide2 from "../img/slide-2.png";
import slide3 from "../img/slide3.png";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Welcome to Our Store",
    dese: "Discover the best products at unbeatable prices!",
    image: slide,
  },
  {
    title: "Latest Collection",
    dese: " Check out the latest trends in fashion.",
    image: slide2,
  },
  {
    title: "Special Offers",
    dese: "Get amazing deals and discounts on selected items.",
    image: slide3,
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
  }, []);

  return (
    <main className=" relative max-w-8xl overflow-hidden">
      <div className="flex w-screen bg-gradient-to-tr from-purple-100  to-purple-200">
        {slides.map((item, i) => (
          <section
            key={i}
            className="w-screen min-h-screen relative flex-shrink-0 flex items-center justify-center gap-2 md:gap-12 px-4 md:px-12  transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <div className="flex flex-col gap-2  md:gap-6  w-[55%] md:w-[50%]">
              <h1 className="text-xl md:text-5xl font-heading font-bold ">
                {item.title}
              </h1>
              <p className="text-lg md:text-2xl font-heading font-semibold">
                {item.dese}
              </p>
              <Link
                to={"/shop"}
                className="bg-gray-900 rounded-md shadow-md px-4 py-2 text-slate-50 self-start  hover:bg-purple-600"
              >
                Shop Now
              </Link>
            </div>
            <div className="w-[40%] md:w-[45%]">
              <img
                src={item.image}
                alt="model photo"
                className="rounded-md w-full"
              />
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Hero;
