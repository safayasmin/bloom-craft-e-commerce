import React from "react";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Curatedcln from "./Curatedcln";
import Trending from "./Trending";
import Choose from "./Choose";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import FlowerBouquetCollage from "./FlowerBouquetCollage";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FlowerBouquetCollage />
      {/* <Banner /> */}
      <Trending />
      <Curatedcln />
      <Choose />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;


