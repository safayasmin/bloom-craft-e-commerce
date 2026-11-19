const images = [
  { src: "/images/rflower1.webp", alt: "Red rose handcrafted bouquet" },
  { src: "/images/cflower8.webp", alt: "Crochet artisanal floral bouquet" },
  { src: "/images/rflower2.webp", alt: "Velvet scarlet roses arrangement" },
  { src: "/images/cflower7.webp", alt: "Hand-knitted delicate blossom bouquet" },
  { src: "/images/rflower3.webp", alt: "Crimson charm fresh bouquet" },
  { src: "/images/cflower4.webp", alt: "Crochet pastel daisy bouquet" },
  { src: "/images/rflower5.webp", alt: "Royal ruby botanical bouquet" },
  { src: "/images/cflower3.webp", alt: "Artisan knit sunflower bouquet" },
  { src: "/images/rflower4.webp", alt: "Scarlet romance floral design" },
  { src: "/images/rflower6.webp", alt: "Luxury red rose display" },
];

export default function FlowerBouquetCollage() {
  return (
    <section className="relative w-full h-[85vh] min-h-[580px] max-h-[850px] pt-12 md:pt-16 bg-gradient-to-r from-[#050505] via-[#0d0906] to-[#17110c] flex items-center justify-center overflow-hidden">
      
      <div className="absolute text-center z-40 pointer-events-none px-4">
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-[6px] sm:tracking-[10px]"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          FLOWER BOUQUET
        </h1>

        <p className="mt-3 text-[#c9a66b] text-xs sm:text-sm tracking-[4px] sm:tracking-[8px] uppercase">
          Handmade Bouquet Collection
        </p>
      </div>

      <div
        className="relative collage-cylinder w-[160px] h-[230px] sm:w-[190px] sm:h-[270px] md:w-[210px] md:h-[300px]"
        style={{
          transformStyle: "preserve-3d",
          animation: "rotate 25s linear infinite",
        }}
      >
        {images.map((item, index) => (
          <span
            key={index}
            className="absolute inset-0 collage-item"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${index * (360 / images.length)}deg) translateZ(var(--tz, 500px))`,
            }}
          >
            <img
              src={item.src}
              alt={item.alt}
              width="210"
              height="300"
              loading={index < 2 ? "eager" : "lazy"}
              fetchpriority={index === 0 ? "high" : "auto"}
              decoding={index === 0 ? "sync" : "async"}
              className="
               w-full h-full object-cover
               rounded-[30px] sm:rounded-[40px]
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
          :root {
            --tz: 280px;
          }
          @media (min-width: 640px) {
            :root {
              --tz: 390px;
            }
          }
          @media (min-width: 1024px) {
            :root {
              --tz: 520px;
            }
          }
          @keyframes rotate {
            from {
              transform: perspective(1200px) rotateY(0deg);
            }
            to {
              transform: perspective(1200px) rotateY(360deg);
            }
          }
        `}
      </style>
    </section>
  );
}