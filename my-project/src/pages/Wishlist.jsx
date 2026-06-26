import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import { useShop } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Wishlist = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const {
    wishlist,
    toggleWishlist,
    addToCart,
  } = useShop();

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#131313] p-10">
        <h1
          className="text-4xl text-white text-center mb-12"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          My Wishlist ❤️
        </h1>

        {wishlist.length === 0 ? (
          <h2 className="text-gray-400 text-center text-2xl">
            No products in wishlist
          </h2>
        ) : (
          <div className="grid md:grid-cols-4 gap-6">
            {wishlist.map((p) => (
              <div
                key={p.id}
                className="bg-black/40 p-3 rounded-xl border border-[#d4af37]/20"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-[280px] object-cover rounded-lg"
                />

                <div className="flex justify-between mt-4">
                  <h3 className="text-white">{p.title}</h3>

                  <span className="text-[#d4af37]">
                    ₹{p.price}
                  </span>
                </div>

                <button
                  onClick={() => toggleWishlist(p)}
                  className="text-red-400 mt-2"
                >
                  Remove ❌
                </button>

                <button
                  onClick={() => handleAddToCart(p)}
                  className="w-full mt-4 py-3 bg-[#d4af37] text-black rounded-lg font-semibold"
                >
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;