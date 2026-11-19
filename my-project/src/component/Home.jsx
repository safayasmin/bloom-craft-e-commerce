import Navbar from "../component/Navbar";
import Curatedcln from "./Curatedcln";
import Trending from "./Trending";
import Choose from "./Choose";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import FlowerBouquetCollage from "./FlowerBouquetCollage";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <Navbar />
      <main>
        <FlowerBouquetCollage />
        <Trending />
        <Curatedcln />
        <Choose />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;


