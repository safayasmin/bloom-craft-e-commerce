import React from "react";

const Banner = () => {
  return (
    <section className="w-full h-[90vh] relative">
      <img
        src="/images/flower.png"
        alt="Hero"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40 flex items-center">
        <div className="max-w-3xl ml-16 text-[#f5e6d3]">
          <p className="uppercase tracking-[8px] text-sm mb-4 font-light">
            EXQUISITE FLORAL ARTISTRY
          </p>

          <h1 className="text-6xl md:text-7xl font-serif leading-tight mb-6">
            Flowers That Whisper
            <br />
            Stories of Elegance
          </h1>

          <p className="text-lg md:text-xl text-[#e6d5c3] leading-relaxed max-w-2xl">
            Discover our curated Midnight Garden collection—where rare blooms
            meet artisan craftsmanship, transforming every bouquet into a
            timeless expression of beauty and luxury.
          </p>
           
           <button className="mt-8 bg-[#e6d5c3] text-[#21010a] px-8 py-3 rounded-sm hover:bg-[#f5e6d3] transition-all duration-300 uppercase tracking-[3px] text-xs font-semibold shadow-lg hover:scale-105">
            Explore Collection
        </button>
             
        </div>
      </div>
    </section>
  );
};

export default Banner;