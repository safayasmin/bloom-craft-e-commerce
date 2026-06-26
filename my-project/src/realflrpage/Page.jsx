import React from "react";
import Navbar from "../component/Navbar";
import RealFlowerHero from "./RealFlowerHero";
import ProductGrid from "./ProductGrid";
import Footer from "../category/Footer";

const Page = () => {
  return (
    <div className="bg-[#131313] min-h-screen">
      <Navbar />
      <RealFlowerHero />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Page;