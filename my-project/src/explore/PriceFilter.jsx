import React from "react";

const priceRanges = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "₹0 - ₹1000",
    value: "0-1000",
  },
  {
    label: "₹1000 - ₹1500",
    value: "1000-1500",
  },
  {
    label: "₹1500 - ₹2000",
    value: "1500-2000",
  },
  {
    label: "₹2000+",
    value: "2000+",
  },
];

const PriceFilter = ({ price, setPrice }) => {
  return (
    <div className="bg-[#1a1a1a] border border-[#d4af37]/20 rounded-2xl p-5 mt-6">
      <h2 className="text-xl font-semibold text-[#d4af37] mb-5">
        Price Range
      </h2>

      <div className="flex flex-col gap-3">
        {priceRanges.map((item) => (
          <button
            key={item.value}
            onClick={() => setPrice(item.value)}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
              price === item.value
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

export default PriceFilter;