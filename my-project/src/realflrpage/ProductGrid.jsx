
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { useShop } from "../context/ShopContext";
import { useAuth } from "../contexts/AuthContext";

import {
  handleWishlist,
  handleCart,
} from "../utils/productActions";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  const { wishlist, toggleWishlist, addToCart } = useShop();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/Products")
      .then((res) => {
        const realFlowers = res.data.filter(
          (item) => item.category === "realflower"
        );
        setProducts(realFlowers);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto bg-[#131313]">
      <h2
        className="text-3xl md:text-4xl font-bold mb-10 text-white"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        Real Flower Collection
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {products.map((p, index) => {
          const isWishlisted = wishlist.find(
            (item) => item.id === p.id
          );

          return (
            <motion.div
              key={p.id}
              className="group"
              initial={{ opacity: 0, y: 160 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <div
                className="
                  relative overflow-hidden rounded-xl
                  border border-[#d4af37]/20
                  transition-all duration-500
                  group-hover:scale-[1.03]
                  group-hover:border-[#d4af37]
                  group-hover:shadow-[0_0_60px_rgba(212,175,55,0.55)]
                "
              >
                
              <img
                  src={p.img}
                  alt={p.title}
                  className="
                    w-full h-[340px]
                    object-cover
                    transition duration-700
                    group-hover:scale-110
                  "
                />

                {/* overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-transparent
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition duration-500
                  "
                />








                {/* Wishlist Button */}
                <button
                  onClick={() =>
  handleWishlist(
    p,
    toggleWishlist,
    navigate,
    user
  )
}
                  className="
                    absolute top-3 right-3
                    bg-black/60
                    p-2 rounded-full
                    hover:scale-110
                    transition
                    z-20
                  "
                >
                  {isWishlisted ? "💖" : "🤍"}
                </button>

                {/* Add to Cart */}
                <button
                 onClick={() =>
  handleCart(
    p,
    addToCart,
    navigate,
    user
  )
}
                  className="
                    absolute bottom-0 left-0 right-0
                    bg-[#d4af37]
                    text-black
                    py-3
                    font-semibold
                    opacity-0
                    group-hover:opacity-100
                    transition duration-300
                    tracking-wide
                    z-20
                  "
                >
                  ADD TO CART
                </button>
              </div>

              <div className="mt-3 flex justify-between text-white">
                <h3 className="text-sm md:text-base">
                  {p.title}
                </h3>

                <span className="text-[#d4af37]">
                  ₹{p.price}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductGrid;