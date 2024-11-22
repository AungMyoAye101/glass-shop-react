import { Suspense } from "react";
import Hero from "../components/Hero";
import ProductCon from "../components/ProductCon";
import Skeleton from "react-loading-skeleton";

const Home = () => {
  return (
    <Suspense fallback="Loading data...">
      <Hero />
      <Suspense fallback={<Skeleton />}>
        <ProductCon />
      </Suspense>
    </Suspense>
  );
};

export default Home;
