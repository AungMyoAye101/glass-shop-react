import delivery from "../assets/delivery.jpg";
import location from "../assets/location.jpg";
import ImageSlider from "../components/ImageSlider";

const blogContent = [
  {
    id: 1,
    image: delivery,
    title: "Ours Deliver Service",
    text: "We pride ourselves on providing an unparalleled delivery experience.Our commitment to excellence ensures that your shopping journey issmooth, from the moment you place your order to the moment it arrives at your doorstep. ",
    containerClass: "md:flex-row ",
    styleImg: "rounded-e-full",
  },
  {
    id: 2,
    image: location,
    title: "What we offer",
    text: "  We pride ourselves on providing an unparalleled delivery experience. Our commitment to excellence ensures that your shopping journey is smooth, from the moment you place your order to the moment it arrives at your doorstep.",
    containerClass: "md:flex-row-reverse ",
    styleImg: "rounded-s-full",
  },
];

const Blog = () => {
  return (
    <section className="min-h-screen flex flex-col gap-14   py-12 px-4 md:px-12  ">
      {blogContent.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col ${item.containerClass} justify-center items-center gap-6 md:gap-10 `}
        >
          <div
            className={`w-full sm:w-[80%] md:w-[40%] ${item.styleImg} overflow-hidden `}
          >
            <img
              src={item.image}
              alt="mall photo"
              className="w-full h-full aspect-video"
            />
          </div>
          <div className="w-full md:w-[40%] space-y-4">
            <h1 className="text-2xl font-heading font-bold ">{item.title}</h1>
            <p className="text-base md:text-xl font-body font-semibold">
              {item.text}
            </p>
          </div>
        </div>
      ))}
      <ImageSlider />
    </section>
  );
};

export default Blog;
