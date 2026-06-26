import React from "react";
import { motion } from "framer-motion";

const Choose = () => {
  return (
    <section className="bg-[#131313] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-[#e9c349] uppercase tracking-[4px] text-sm">
            The BloomCraft Promise
          </span>

          <h2 className="text-white text-4xl md:text-6xl font-serif mt-4 mb-10">
            Crafting Memories in Every Petal
          </h2>

          <div className="space-y-10">

            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-full border border-[#e9c349] flex items-center justify-center text-[#e9c349] text-xl">
                ✓
              </div>

              <div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  Premium Quality
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Fresh flowers carefully selected to ensure beauty, quality,
                  and lasting freshness.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-full border border-[#e9c349] flex items-center justify-center text-[#e9c349] text-xl">
                ✦
              </div>

              <div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  Handcrafted Designs
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Each floral arrangement is personally designed by Safa Yasmin,
                  creating unforgettable moments and lasting impressions.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="absolute -inset-4 border border-[#e9c349]/20 rounded-3xl"></div>

          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKc0yLo0HCa1x2my1l2E6imkpJdOPbHcBmJ_RbvUJSyTURstLmHfwx3CV5dwJOUTepngN1aw1rv5oFoKTrpB7iNoxyjr_Vakyxo4y8cq9l1_WgMn1oVuzexK3iGkZEbtMgdqYPgVEb8oonbZ-qjNUUA7EBvdyUdY9E62lyVffBPRRlsecmeQKAjr9MvnkONdFrxbXYwwE0xVlrLX1gYv-l99tfTiEsZPPfCLG6sixUa4hlmMyJl-WAOxQ6HAeskP30TKOyJ-IyusU"
            alt="Florist"
            className="w-full rounded-3xl glass-panel"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Choose;