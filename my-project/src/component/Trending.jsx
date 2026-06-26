import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Midnight Calla",
      price: "799.00",
      badge: "Limited Edition",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm1dyUmd3rymQfQOkj6IV-gvYNYBl_wbT9Z3SRAwUMq80M9NUlZxYsTTWKdiE0RIKwmTJNNeNfjgg2jw6VzmETNRG8qUA09Tmdpgs6z-UsoEtStoAcs_-MHFbRYNzaJCc4hWs9WgCnMYZoj3m43eho1XUnWz-_8y6DU6MmCj1uDZIfhZV2ftiYBHbLK1uuXBGDIorbVvn5pftRltggORhkqgJ5K2joKB9WhoD4zHnoWOElAPA2WngRugx8ijoVpPEoNXuxQhhjyTs",
    },
    {
      id: 2,
      name: "Royal Orchid Cluster",
      price: "999.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT_oJqIkzCEe7iw_rZKm2s5_9uWa9OZeC0yln_hcrZ-ZGGQNgJ4LeJ1vsKns0-C-2HO0K9yhUqi9BI34q0lgGJw4lUhBwmJftS9XtaIZ6kr7_OvxAIUIngg5J5iAvJf2F-tI5vvYGmS9xz9OzivmV1fzdq_bDznhw3nLSci6_uN1gaQ-0N5LhHV0GqFRG2fFsc4QDya-H_L-OpiYh0Y-NQbj18wFm5wffghOIREKpdv3SaVjXQwqjTAHNw5BsEi5aQoze3lp6hRgA",
    },
    {
      id: 3,
      name: "Solaris Gilded",
      price: "1200.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlcaT4X_SE4c4e6lXK8xfk5QeX6plOe3carwSIQtprodt-t96hS9H6cQGyIFLWSylUtTwe0AeNLINfl-FwJ-v5g5uBJMgSMZ1akpTBUwEWFUhPJYY9m2MogVg-2De4iaf4IRm2ATu4Mbv2zLPrZqq7ly3PpbvH4YFqocyfkRvj-6PFMeAsKt5Yh4GRYLMsod1ByPXpWS7j329H1JfBvsEgHUsHHX9LC_bc5_AQU71x30Fhh3ckoHcBl9T3bw4t6UmYf9rujcNE1tU",
    },
  ];

  return (
    <section className="bg-[#131313] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-[#e9c349] text-sm mb-4">
            Exclusive Collection
          </p>
          <h2 className="text-4xl md:text-6xl font-serif text-white">
            Trending Now
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="glass-panel p-5 group rounded-3xl"
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <div className="relative h-[450px] overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="mt-6">
                <h3 className="text-white text-2xl font-serif mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-400 mb-6">{product.price}</p>
<button
  onClick={() => navigate("/explore")}
  className="w-full border border-[#e9c349]/30 py-3 text-white uppercase tracking-[3px] text-xs hover:bg-[#e9c349] hover:text-black transition duration-300"
>
  Explore Collection
</button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trending;