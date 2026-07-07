import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Real Flowers",
      image: "/images/rflowercard.png",
      link: "/realflower",
    },
    {
      id: 2,
      title: "Crochet Collection",
      image: "/images/cflowercard.png",
      link: "/crochet",
    },
    {
      id: 3,
      title: "Wedding Collection",
      image: "/images/wflower2.png",
      link: "/wedding",
    },              
  ];

  return (
    <section className="bg-[#131313] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-[#e9c349] text-sm mb-4">
            Explore Categories
          </p>

          <h2
            className="text-4xl md:text-6xl text-white"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Collections
          </h2>

          <div className="w-24 h-[1px] bg-[#e9c349] mx-auto mt-6"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="
                group
                bg-[#1a1a1a]
                p-5 rounded-3xl
                border border-[#e9c349]/20
                transition-all duration-500
                hover:border-[#e9c349]
                hover:shadow-[0_0_60px_rgba(233,196,73,0.55)]
                hover:scale-[1.03]
              "
            >

              {/* IMAGE WRAPPER (IMPORTANT FIX) */}
              <div className="relative h-[450px] rounded-2xl overflow-hidden">

                <img
                  src={category.image}
                  alt={category.title}
                  className="
                    w-full h-full object-cover
                    transition duration-700
                    group-hover:scale-110
                  "
                />

              </div>

              {/* TEXT */}
              <div className="mt-6">
                <h3
                  className="
                    text-white text-2xl text-center
                    transition
                    group-hover:text-[#e9c349]
                  "
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {category.title}
                </h3>

                <button className="
                  mt-6 w-full
                  border border-[#e9c349]/30
                  py-3 text-white uppercase tracking-[3px] text-xs
                  transition-all duration-300
                  group-hover:bg-[#e9c349]
                  group-hover:text-black
                  group-hover:shadow-[0_0_25px_rgba(233,196,73,0.5)]
                ">
                  Explore Collection
                </button>
              </div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Categories;