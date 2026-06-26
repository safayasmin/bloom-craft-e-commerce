import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <h2 className="text-3xl text-white font-semibold">
            No Products Found
          </h2>
          
          <p className="text-gray-400 mt-3">
            Try changing your search or filters.
          </p>
        </div>
      </div>
    );
  }

  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-22">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;


