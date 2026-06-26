// import React from "react";

// const Hero = () => {
//   return (
//     <section className="pt-32 pb-20 text-center bg-[#131313] text-white px-6">
      
//       {/* Main Title */}
//       <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-6">
//         Artisan Series
//       </h1>

//       {/* Description */}
// <p className="max-w-2xl mx-auto text-[#e2beba] text-base md:text-lg leading-relaxed">
//         Discover our exclusive collections of handcrafted floral artistry,
//         where traditional craftsmanship meets modern luxury.  
//         Each piece is designed with passion, detail, and timeless elegance.
//       </p>
      
//     </section>
//   );
// };

// export default Hero;












import React from "react";

const Hero = () => {
  return (
    <header className="relative w-full h-[90vh] overflow-hidden">

      {/* Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover scale-105"
        src="https://lh3.googleusercontent.com/aida/AP1WRLsofKWt4Ey_Hdgy2T1oXV2MVbADAstNSd0M6NHMto8OH5lOCfNg0dga6HJZoSflrPW5jo9RJWCh3xsxBMnrY07-SgdY21WmaTArHK6Z4AMy-rupezi35cwkpkiKp-tO9QdpTZUNTmAfgAIJdgr_QogVGsQ68rPICNQkOOl_qI3YmojzcRTQXDbreYFsj0L3M_oaILnBShbJXQV9dr6RbTNMmHQm7TCMLBftEyEJXzBnnbgjJXvcWmES9uA"
        alt="hero"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#131313]" />

      {/* Center Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">

        <h1 className="text-4xl md:text-6xl text-yellow-400 uppercase tracking-[0.4em] mb-6">
          Artisan Series
        </h1>

        <div className="w-24 h-[1px] bg-yellow-400 mx-auto mb-6"></div>

        <p className="max-w-2xl text-[#e2beba] text-base md:text-lg leading-relaxed italic">
          Where traditional fiber arts meet modern botanical sculpture. Explore our curated collections of meticulously handcrafted masterpieces, from the intricate geometry of artisan crochet to the soft, sculptural tactility of premium chenille pipe cleaners.
        </p>

      </div>

    </header>
  );
};

export default Hero;