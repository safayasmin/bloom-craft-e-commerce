import React from "react";
import { motion } from "framer-motion";

const heroData = {
  realflower: {
    tag: "Seasonal Collection",
    title: "Real Flower",
    subtitle: "Arrangements",
    image: "/images/rflowerhero.png",
    description:
      "Freshly arranged flowers crafted by hand to bring beauty, elegance, and meaning to every occasion.",
    quote: "Every bloom tells a story.",
  },

  crochet: {
    tag: "Handmade Collection",
    title: "Crochet Flower",
    subtitle: "Collection",
    image: "/images/cflowerhero.png",
    description:
      "Timeless crochet flowers handcrafted with care, designed to last forever and become cherished keepsakes.",
    quote: "Forever in Bloom.",
  },

  wedding: {
    tag: "Special Wedding Collection",
    title: "Wedding Collection",
    subtitle: "Made with Love",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1200&auto=format&fit=crop",
    description:
      "Thoughtfully handcrafted wedding pieces created to preserve and celebrate your most precious memories forever.",
    quote: "Forever begins with a single memory.",
  },
};

const CategoryHero = ({ category }) => {
  const data = heroData[category];
  if (!data) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#050505] via-[#0d0906] to-[#17110c] py-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#d4af37] uppercase tracking-[0.35em] text-xs">
            {data.tag}
          </span>

          <h2 className="text-white text-3xl md:text-5xl mt-3 leading-tight font-serif">
            {data.title} <br />
            <span className="italic text-[#d4af37]">
              {data.subtitle}
            </span>
          </h2>

          <div className="w-20 h-[2px] bg-[#d4af37] my-5" />

          <div className="border-l border-[#d4af37]/30 pl-5">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg">
              {data.description}
            </p>

            <p className="mt-4 text-[#d4af37] uppercase tracking-[0.15em] text-xs">
              Handmade • Premium • Exclusive
            </p>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          <div className="absolute -inset-3 rounded-2xl border border-[#d4af37]/20 group-hover:border-[#d4af37]/60 transition-all duration-700" />

          <img
            src={data.image}
            alt={data.title}
            className="relative z-10 w-full h-[320px] object-cover rounded-2xl border border-[#d4af37]/30 group-hover:scale-[1.02] transition"
          />

          <div className="absolute -bottom-4 -left-4 hidden lg:block bg-black/80 backdrop-blur-xl border border-[#d4af37]/20 px-5 py-3 rounded-xl">
            <p className="italic text-[#d4af37] text-sm">
              {data.quote}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryHero;