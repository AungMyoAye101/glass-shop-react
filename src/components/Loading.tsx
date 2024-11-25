import loading from "../assets/loading.svg";

const Loading = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <img src={loading} alt="loading" />
    </section>
  );
};

export default Loading;
