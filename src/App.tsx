import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

import Footer from "./components/Footer";
import ProductsDetail from "./pages/ProductsDetail";
import Checkout from "./pages/Checkout";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <section className="max-w-8xl mx-auto bg-gray-200">
      <NavBar />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductsDetail />} />
        </Routes>
      </Suspense>
      <Footer />
    </section>
  );
}

export default App;
