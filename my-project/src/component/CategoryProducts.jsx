import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../explore/ProductCard";
import axios from "axios";

const CategoryProducts = ({ category }) => {
  const [products , setProducts] = useState();
  useEffect(() => {
    axios.get("http://localhost:5000/Products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);
  
  const filteredProducts = products?.filter(
    (item) => item.category === category
  );

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto bg-[#131313]">
      
      <h2 className="text-3xl text-white mb-6 font-serif">
        {category.toUpperCase()} COLLECTION 
      </h2>

      {filteredProducts?.length === 0 ? (
        <p className="text-white text-center">
          No products found in this category
        </p>
      ) : (
        <div className="grid md:grid-cols-4 gap-6">
          {filteredProducts?.map((product, index) => (
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