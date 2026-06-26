import React from "react";
import { motion } from "framer-motion";



const RealFlowerHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#050505] via-[#0d0906] to-[#17110c]  py-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">

     
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#d4af37] uppercase tracking-[0.35em] text-xs">
            Seasonal Collection
          </span>

          <h2
            className="text-white text-3xl md:text-5xl mt-3 leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Real Flower <br />
            <span className="italic text-[#d4af37]">
              Arrangements
            </span>
          </h2>

          <div className="w-20 h-[2px] bg-[#d4af37] my-5" />

          <div className="border-l border-[#d4af37]/30 pl-5">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg">
              Freshly arranged flowers crafted by hand to bring beauty,
              elegance, and meaning to every occasion.
            </p>

            <p className="mt-4 text-[#d4af37] uppercase tracking-[0.15em] text-[11px] md:text-xs">
              Fresh Flowers • Hand Arranged • Made For Every Occasion
            </p>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          {/* Border */}
          <div
            className="
              absolute
              -inset-3
              rounded-2xl
              border
              border-[#d4af37]/20
              group-hover:border-[#d4af37]/60
              group-hover:scale-105
              transition-all
              duration-700
            "
          />

          <img
            src="/images/rflowerhero.png"
            alt="Real Flower Arrangement"
            className="
              relative
              z-10
              w-full
              h-[320px]
              object-cover
              rounded-2xl
              border
              border-[#d4af37]/30
              shadow-[0_0_20px_rgba(212,175,55,0.12)]
              group-hover:shadow-[0_0_50px_rgba(212,175,55,0.4)]
              group-hover:scale-[1.02]
              transition-all
              duration-700
            "
          />

          {/* Quote Card */}
          <div
            className="
              absolute
              -bottom-4
              -left-4
              hidden
              lg:block
              z-20
              bg-black/80
              backdrop-blur-xl
              border
              border-[#d4af37]/20
              px-5
              py-3
              rounded-xl
            "
          >
            <p
              className="italic text-[#d4af37] text-sm"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              "Every bloom tells a story."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RealFlowerHero;