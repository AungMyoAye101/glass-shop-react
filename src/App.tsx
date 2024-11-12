import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import ProductsDetail from "./pages/ProductsDetail";

function App() {
  return (
    <section className="max-w-8xl mx-auto bg-gray-200">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductsDetail />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
