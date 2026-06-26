import React from "react";
import Hero from "./Hero";
import ProductGrid from "./ProductGrid";
import Navbar from "../component/Navbar";
import Footer from "../category/Footer";

const Wedding = () => {
  return (
    <div className="bg-[#131313] min-h-screen">
     <Navbar />
      <Hero />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Wedding;