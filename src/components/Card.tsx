interface CardProp {
  title: string;
  image: string;
}

const Card = ({ title, image }: CardProp) => {
  return (
    <div className="min-w-40 rounded-md shadow-md overflow-hidden ">
      <div className="w-full h-48 aspect-square ">
        <img src={image} alt="model" className="w-full h-full   " />
      </div>
      <div className="p-2">
        <h1 className="font-body text-xl ">{title}</h1>
      </div>
    </div>
  );
};

export default Card;
