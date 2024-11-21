import { Suspense } from "react";
import Hero from "../components/Hero";
import ProductCon from "../components/ProductCon";
import Loading from "../components/Loading";

const Home = () => {
  return (
    <Suspense fallback="Loading data...">
      <Hero />
      <Suspense fallback={<Loading />}>
        <ProductCon />
      </Suspense>
    </Suspense>
  );
};

export default Home;
