import React from 'react'

const Hero = () => {
  return (
    <div>
    <section className="py-32 text-center px-6 bg-gradient-to-r from-black via-[#0d0a08] to-[#181410]">
  <div>
    <p className="uppercase tracking-[6px] text-[#d4af37] text-sm mb-4">
      Our Collections
    </p>

    <h1
      className="text-5xl md:text-7xl text-white"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      Crafted for <br />
      <span className="italic text-[#d4af37]">
        Every Occasion
      </span>
    </h1>

    <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
      Discover handcrafted floral creations, crochet artistry,
      pipe cleaner blooms, and wedding arrangements designed
      to bring beauty and meaning to every moment.
    </p>
  </div>
</section>
      
    </div>
  )
}

export default Hero
