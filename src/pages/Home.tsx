import { Suspense } from "react";
import Hero from "../components/Hero";
import ProductCon from "../components/ProductCon";
import Loading from "../components/Loading";

const Home = () => {
  return (
    <div>
      <Hero />
      <Suspense fallback={<Loading />}>
        <ProductCon />
      </Suspense>
    </div>
  );
};

export default Home;
