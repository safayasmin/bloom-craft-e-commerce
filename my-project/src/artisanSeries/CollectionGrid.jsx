import React from "react";

const CollectionGrid = ({ data }) => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      
      {/* TITLE */}
      <h2 className="text-3xl font-bold mb-10 text-white">
        {data.title}
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-4 gap-6">

        {data.items.map((item) => (
          <div key={item.id} className="group">

            {/* IMAGE BOX */}
            <div className="relative overflow-hidden rounded-lg">

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-700"
              />

              {/* HEART */}
              <button className="absolute top-3 right-3 bg-black/40 p-2 rounded-full text-white">
                ❤️
              </button>

              {/* ADD TO CART (HOVER) */}
              <button className="absolute bottom-0 left-0 right-0 bg-yellow-500 text-black py-3 opacity-0 group-hover:opacity-100 transition duration-300">
                ADD TO CART
              </button>

            </div>

            {/* DETAILS */}
            <div className="mt-3 flex justify-between text-white">
              <h3>{item.name}</h3>
              <span className="text-yellow-400">${item.price}</span>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default CollectionGrid;