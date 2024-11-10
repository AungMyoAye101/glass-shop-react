import model from "../assets/model.png";

const Card = () => {
  return (
    <div className="min-w-40 rounded-md shadow-md ">
      <div className="w-full h-25 ">
        <img
          src={model}
          alt="model"
          className="w-full h-full aspect-video object-cover"
        />
      </div>
      <div className="p-2">
        <h1 className="font-body text-xl ">Product name</h1>
      </div>
    </div>
  );
};

export default Card;
