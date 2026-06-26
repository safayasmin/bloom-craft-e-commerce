import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="w-full flex justify-center mb-8">
      <div className="w-full max-w-3xl relative">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search flowers, crochet, wedding gifts..."
          className="w-full bg-[#1b1b1b] border border-[#d4af37]/30 text-white rounded-xl py-4 pl-5 pr-5 outline-none transition-all duration-300 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20"
        />

        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xl"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;