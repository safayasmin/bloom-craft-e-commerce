import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
import CategoryHero from "../component/CategoryHero";
import CategoryProducts from "../component/CategoryProducts";
import Footer from "../component/Footer";


const CategoryPage = () => {
    const { category } = useParams();

    return (
        <div className="bg-[#131313] min-h-screen">
            <Navbar />
            <CategoryHero category={category} />
            <CategoryProducts category={category} />
            <Footer />
        </div>
    );
};

export default CategoryPage;