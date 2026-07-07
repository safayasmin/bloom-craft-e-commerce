import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Curatedcln = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#131313] py-20 px-6">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#d4af37]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#d4af37]/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] text-[#d4af37] text-sm mb-4">
            Luxury Collection
          </p>

          <h2
            className="text-white text-4xl md:text-6xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Curated Collection
          </h2>

          <div className="w-24 h-[2px] bg-[#d4af37] mx-auto my-6"></div>

          <p className="text-gray-400 text-lg">
            Designed for every luxury occasion
          </p>
        </motion.div>

                {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-8 h-[950px] md:h-[650px]">

          {/*  REAL FLOWERS  */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl cursor-pointer"
          >
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-3xl border border-[#d4af37]/20 group-hover:border-[#d4af37] transition-all duration-500 z-20"></div>

            {/* Image */}
            <img
              src="/images/crose2.png"
              alt="Real Flowers"
              className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            {/* Glow */}
            <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/10 transition duration-500"></div>

           
            <div className="absolute bottom-0 left-0 p-10 z-30">

              <span className="uppercase tracking-[4px] text-[#d4af37] text-xs">
                Premium Collection
              </span>

              <h2
                className="text-white text-4xl mt-3"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Real Flowers
              </h2>

              <p className="text-gray-300 mt-4 max-w-sm leading-7">
                Fresh flowers handpicked from premium farms,
                crafted into unforgettable luxury arrangements.
              </p>

              <button
                onClick={() => navigate("/flowers")}
                className="mt-8 px-7 py-3 rounded-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition duration-300 uppercase tracking-[3px] text-xs"
              >
                Explore Collection →
              </button>

            </div>

          </motion.div>


                    {/* CROCHET*/}
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 relative group overflow-hidden rounded-3xl cursor-pointer"
          >
            {/* Border */}
            <div className="absolute inset-0 rounded-3xl border border-[#d4af37]/20 group-hover:border-[#d4af37] transition-all duration-500 z-20"></div>

            {/* Image */}
            <img
              src="/images/cflowerhero.png"
              alt="Crochet Collection"
              className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            {/* Glow */}
            <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/10 transition duration-500"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-8 z-30">

              <span className="uppercase tracking-[4px] text-[#d4af37] text-[11px]">
                Handmade Collection
              </span>

              <h2
                className="text-white text-3xl mt-2"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Crochet Flowers
              </h2>

              <p className="text-gray-300 mt-3 max-w-sm">
                Beautiful handcrafted crochet flowers that last forever,
                made with love and attention to every detail.
              </p>

              <button
                onClick={() => navigate("/crochet")}
                className="mt-6 px-6 py-2 rounded-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition duration-300 uppercase tracking-[3px] text-xs"
              >
                Explore Collection →
              </button>

            </div>
          </motion.div>


                    {/* WEDDING  */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-2 relative group overflow-hidden rounded-3xl cursor-pointer"
          >
            {/* Border */}
            <div className="absolute inset-0 rounded-3xl border border-[#d4af37]/20 group-hover:border-[#d4af37] transition-all duration-500 z-20"></div>

            {/* Image */}
            <img
              src="/images/crose3.png"
              alt="Wedding Collection"
              className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            {/* Glow */}
            <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/10 transition duration-500"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-8 z-30">

              <span className="uppercase tracking-[4px] text-[#d4af37] text-[11px]">
                Wedding Collection
              </span>

              <h2
                className="text-white text-3xl mt-2"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Weddings
              </h2>

              <p className="text-gray-300 mt-3 max-w-sm">
                Elegant floral arrangements designed to make your special
                day unforgettable with timeless beauty.
              </p>

              <button
                onClick={() => navigate("/wedding")}
                className="mt-6 px-6 py-2 rounded-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition duration-300 uppercase tracking-[3px] text-xs"
              >
                Explore Collection →
              </button>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Curatedcln;






























// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Curatedcln = () => {
//     const navigate = useNavigate();

//   return (
//     <section className="min-h-screen bg-[#131313] px-10 py-10">
//       {/* Heading */}
//       <div className="flex justify-between items-center mb-10">
//         <h1 className="text-white text-2xl md:text-3xl font-serif font-light tracking-wide">
//           Curated Collection
//         </h1>

//         <p className="text-[#f5e6d3] text-sm md:text-lg">
//           Designed for every luxury occasion
//         </p>
//       </div>


//       {/* Collection Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[900px] md:h-[600px]">

//         {/* Real Flowers */}
//         <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-lg group border border-[#c89b8f]">
//           <img
//             src="/images/crose2.png"
//             alt="Real Flowers"
//             className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

//           <div className="absolute bottom-0 p-8">
//             <h3 className="text-3xl text-white font-serif mb-2">
//               Real Flowers
//             </h3>

//             <p className="text-[#f5e6d3] mb-4">
//               Rare species sourced globally.
//             </p>

//            <button
//   onClick={() => navigate("/flowers")}
//   className="text-[#e9c349] uppercase tracking-widest text-xs"
// >
//   Explore →
// </button>
//           </div>
//         </div>

//         {/* Artisan Crochet */}
//         <div className="md:col-span-2 relative overflow-hidden rounded-lg group border border-[#c89b8f]">
//           <img
//             src="/images/cflowerhero.png"
//             alt="Luxury Roses"
//             className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

//           <div className="absolute bottom-0 p-8">
//             <h3 className="text-2xl text-white font-serif mb-2">
//               Artisan Crochet
//             </h3>

//           <button
//   onClick={() => navigate("/crochet")}
//   className="text-[#e9c349] uppercase tracking-widest text-xs"
// >
//   Explore →
// </button>
//           </div>
//         </div>

//         {/* Weddings */}
//         <div className="md:col-span-2 relative overflow-hidden rounded-lg group border border-[#c89b8f]">
//           <img
//             src="/images/crose3.png"
//             alt="Signature Bouquet"
//             className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

//           <div className="absolute bottom-0 p-6">
//             <h3 className="text-xl text-white font-serif mb-2">
//               Weddings
//             </h3>
// <button
//   onClick={() => navigate("/wedding")}
//   className="text-[#e9c349] uppercase tracking-widest text-xs"
// >
//   Explore →
// </button>
//           </div>
//         </div>

//       </div>
     
//     </section>
//   );
// };

// export default Curatedcln;













// import React from "react";


// const Curatedcln = () => {
//   return (
//     <section className="min-h-screen bg-[#131313] px-10 py-10">
//       {/* Heading */}
//       <div className="flex justify-between items-center mb-10">
//         <h1 className="text-white text-2xl md:text-3xl font-serif font-light tracking-wide">
//           Curated Collection
//         </h1>

//         <p className="text-[#f5e6d3] text-sm md:text-lg">
//           Designed for every luxury occasion
//         </p>
//       </div>


//       {/* Collection Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[900px] md:h-[600px]">

//         {/* Real Flowers */}
//         <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-lg group border border-[#c89b8f]">
//           <img
//             src="/images/crose2.png"
//             alt="Real Flowers"
//             className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

//           <div className="absolute bottom-0 p-8">
//             <h3 className="text-3xl text-white font-serif mb-2">
//               Real Flowers
//             </h3>

//             <p className="text-[#f5e6d3] mb-4">
//               Rare species sourced globally.
//             </p>

//             <button className="text-[#e9c349] uppercase tracking-widest text-xs">
//               Explore →
//             </button>
//           </div>
//         </div>

//         {/* Artisan Crochet */}
//         <div className="md:col-span-2 relative overflow-hidden rounded-lg group border border-[#c89b8f]">
//           <img
//             src="/images/cflowerhero.png"
//             alt="Luxury Roses"
//             className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

//           <div className="absolute bottom-0 p-8">
//             <h3 className="text-2xl text-white font-serif mb-2">
//               Artisan Crochet
//             </h3>

//             <button className="text-[#e9c349] uppercase tracking-widest text-xs">
//               Explore →
//             </button>
//           </div>
//         </div>

//         {/* Weddings */}
//         <div className="md:col-span-2 relative overflow-hidden rounded-lg group border border-[#c89b8f]">
//           <img
//             src="/images/crose3.png"
//             alt="Signature Bouquet"
//             className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//           />

//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

//           <div className="absolute bottom-0 p-6">
//             <h3 className="text-xl text-white font-serif mb-2">
//               Weddings
//             </h3>

//             <button className="text-[#e9c349] uppercase tracking-widest text-xs">
//               Explore →
//             </button>
//           </div>
//         </div>

//       </div>
     
//     </section>
//   );
// };

// export default Curatedcln;








