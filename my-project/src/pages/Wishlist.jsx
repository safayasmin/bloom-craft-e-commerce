
import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/wishlistSlice";
import { setCart } from "../redux/cartSlice";
import toast from "react-hot-toast";



const Wishlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useAuth();

  const cart = useSelector((state) => state.cart.cart);
  
  const wishlist = useSelector(
    (state) => state.wishlist.wishlist
  );

  
useEffect(() => {
  if (!user) {
    navigate("/login", { replace: true });
  }
}, [user]);


const handleAddToCart = async (product) => {
  // Redux cart-il already undo?
  const alreadyInCart = cart.some(
    (item) => item.productId === product.productId
  );

  if (alreadyInCart) {
    toast.error("Product is already in Cart");
    navigate("/cart"); // Cart page-lekku pokum
    return;
  }

  try {
    await axios.post("http://localhost:5000/cart", {
      userId: user.id,
      productId: product.productId,
      title: product.title,
      price: product.price,
      img: product.img,
      category: product.category,
      quantity: 1,
    });

    const updated = await axios.get(
      `http://localhost:5000/cart?userId=${user.id}`
    );

    dispatch(setCart(updated.data));

    toast.success("Added to Cart");
  } catch (err) {
    toast.error("Something went wrong");
  }
};

const handleRemove = async (id) => {
  await axios.delete(`http://localhost:5000/wishlist/${id}`);
  dispatch(removeFromWishlist(id));
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
                  onClick={() => handleRemove(p.id)}
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