import { useEffect, useState } from "react";
import ProductCard from "../explore/ProductCard";
import axios from "axios";

const CategoryProducts = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    axios.get("http://localhost:5000/Products")
      .then((res) => {
        if (isMounted) {
          setProducts(res.data);
        }
      })
      .catch((err) => console.error("Error loading category products:", err))
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);
  
  const filteredProducts = products?.filter(
    (item) => item.category?.toLowerCase() === category?.toLowerCase()
  );

  return (
    <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto bg-[#131313]">
      
      <h2 className="text-2xl sm:text-3xl text-white mb-6 font-serif">
        {category?.toUpperCase()} COLLECTION 
      </h2>

      {loading ? (
        <div className="py-20 text-center text-[#d4af37]">Loading products...</div>
      ) : filteredProducts?.length === 0 ? (
        <p className="text-gray-400 text-center py-12">
          No products found in this category
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default CategoryProducts;