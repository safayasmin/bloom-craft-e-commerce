import React from "react";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

const FilterSidebar = ({
  category,
  setCategory,
  price,
  setPrice,
}) => {
  return (
    <aside className="w-full lg:sticky lg:top-24 h-fit">

      <div className="bg-[#181818] border border-[#d4af37]/20 rounded-2xl p-5 shadow-lg">

        <h2
          className="text-2xl text-white mb-6"
          style={{
            fontFamily: "Playfair Display, serif",
          }}
        >
          Filters
        </h2>

        <CategoryFilter
          category={category}
          setCategory={setCategory}
        />

        <PriceFilter
          price={price}
          setPrice={setPrice}
        />

        {/* Clear Filters */}
        <button
          onClick={() => {
            setCategory("all");
            setPrice("all");
          }}
          className="w-full mt-6 bg-[#d4af37] text-black py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300"
        >
          Clear Filters
        </button>

      </div>

    </aside>
  );
};

export default FilterSidebar;