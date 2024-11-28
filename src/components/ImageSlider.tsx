import { useEffect, useState } from "react";
import model1 from "../img/model-1.jpg";
import model2 from "../img/model-2.jpg";
import model3 from "../img/model-3.jpg";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

const ImageSlider = () => {
  const images = [model1, model2, model3];
  const [index, setIndex] = useState(0);

  const handleClick = (num: string) => {
    if (num === "next") {
      setIndex((pre) => (pre === images.length - 1 ? 0 : pre + 1));
    } else if (num === "prev") {
      setIndex((pre) => (pre < 1 ? images.length - 1 : pre - 1));
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((pre) => (pre === images.length - 1 ? 0 : pre + 1));
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section>
      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-10  mx-auto">
        <button
          onClick={() => handleClick("prev")}
          className="text-lg p-2 rounded-full shadow-lg bg-gray-100"
        >
          <FaLessThan />
        </button>

        <div className=" max-w-4xl aspect-video overflow-hidden rounded-md  ">
          <img src={images[index]} alt="image" className="w-full h-full" />
        </div>

        <button
          onClick={() => handleClick("next")}
          className="text-lg p-2 rounded-full shadow-lg bg-gray-100"
        >
          <FaGreaterThan />
        </button>
      </div>
    </section>
  );
};

export default ImageSlider;
