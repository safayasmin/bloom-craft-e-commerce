import React from "react";

const categories = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Real Flower",
    value: "realflower",
  },
  {
    label: "Crochet",
    value: "crochet",
  },
  {
    label: "Wedding",
    value: "wedding",
  },
];

const CategoryFilter = ({
  category,
  setCategory,
}) => {
  return (
    <div className="bg-[#1a1a1a] border border-[#d4af37]/20 rounded-2xl p-5">

      <h2 className="text-xl font-semibold text-[#d4af37] mb-5">
        Categories
      </h2>

      <div className="flex flex-col gap-3">

        {categories.map((item) => (
          <button
            key={item.value}
            onClick={() => setCategory(item.value)}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300
              ${
                category === item.value
                  ? "bg-[#d4af37] text-black font-semibold"
                  : "bg-[#232323] text-white hover:bg-[#2d2d2d]"
              }`}
          >
            {item.label}
          </button>
        ))}

      </div>

    </div>
  );
};

export default CategoryFilter;