import React from "react";
const images = [
  "/images/rflower1.png",
  "/images/cflower8.png",
  "/images/rflower2.png",
  "/images/cflower7.png",
  "/images/rflower3.png",
  "/images/cflower4.png",
  "/images/rflower5.png",
  "/images/cflower3.png",
  "/images/rflower4.png",
  "/images/rflower6.png",
];

export default function ChocolateCollage() {
  return (
    <section className="relative w-full h-screen pt-20 bg-gradient-to-r from-[#050505] via-[#0d0906] to-[#17110c] flex items-center justify-center overflow-hidden">

      
      <div className="absolute text-center z-50">
        <h1
          className="text-6xl md:text-7xl font-bold text-white tracking-[10px]"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          FLOWER BOUQUET
        </h1>

        <p className="mt-4 text-[#c9a66b] tracking-[8px] uppercase">
          Handmade Bouquet Collection
        </p>
      </div>

      
      <div
        className="relative w-[210px] h-[300px]"
        style={{
          transformStyle: "preserve-3d",
          animation: "rotate 25s linear infinite",
        }}
      >
        {images.map((img, index) => (
          <span
            key={index}
            className="absolute inset-0"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${index * (360 / images.length)}deg)  translateZ(550px)`
            }}
          >
            <img
              src={img}
              alt=""
              className="
               w-full h-full object-cover
               rounded-[40px]
               border border-[#d4af37]/40
               shadow-[0_0_20px_rgba(212,175,55,0.15)]
               transition-all duration-500
               hover:scale-110
               hover:border-[#d4af37]
               hover:shadow-[0_0_35px_rgba(212,175,55,0.45)]"
            />
          </span>
        ))}
      </div>

      
      <style>
        {`
          @keyframes rotate {
            from {
              transform: perspective(1400px) rotateY(0deg);
            }
            to {
              transform: perspective(1400px) rotateY(360deg);
            }
          }
        `}
      </style>
    </section>
  );
}