
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setWishlist } from "../redux/wishlistSlice";
import { setCart } from "../redux/cartSlice";

import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";

const ProductCard = ({ product, index = 0 }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

const dispatch = useDispatch();

const wishlist = useSelector(
  (state) => state.wishlist.wishlist
);


const cart = useSelector(
  (state) => state.cart.cart
);

const isInCart = cart.some(
  (item) => item.productId === product.id
);

//   some()
// JavaScript Array Method.
// Array-ൽ കുറഞ്ഞത് ഒരു item condition satisfy ചെയ്യുന്നുണ്ടോ
  

  const isWishlisted = wishlist.some(
  (item) => item.productId === product.id
);

 
const handleCart = async () => {
  if (isInCart) {
    toast.success("Item already in cart")
    return
  };
  if (!user) {
    navigate("/login");
    return;
  }

  const res = await axios.get(
    `http://localhost:5000/cart?userId=${user.id}&productId=${product.id}`
  );

  if (res.data.length > 0) {
    return;
  }

  await axios.post("http://localhost:5000/cart", {
    userId: user.id,
    productId: product.id,
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
};


const handleWishlist = async () => {
  if (isWishlisted) return;
  if (!user) {
    navigate("/login");
    return;
  }

  const res = await axios.get(
    `http://localhost:5000/wishlist?userId=${user.id}&productId=${product.id}`
  );

  if (res.data.length > 0) {
    return;
  }

  await axios.post("http://localhost:5000/wishlist", {
    userId: user.id,
    productId: product.id,
    title: product.title,
    price: product.price,
    img: product.img,
    category: product.category,
  });

  const updated = await axios.get(
    `http://localhost:5000/wishlist?userId=${user.id}`
  );

  dispatch(setWishlist(updated.data));
};

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <div
        className="
          bg-[#181818]
          rounded-3xl
          overflow-hidden
          border
          border-[#d4af37]/20
          transition-all
          duration-500
          hover:border-[#d4af37]
          hover:shadow-[0_20px_60px_rgba(212,175,55,0.35)]
        "
      >
        {/* IMAGE */}
       <div className="relative overflow-hidden h-[340px]">

          <img
            src={product.img}
            alt={product.title}
            className="
              w-full
              h-full
              object-cover
              transition-all
              duration-700
              group-hover:scale-110
            "
          />

          {/* Overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/70
              via-transparent
              to-transparent
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
            "
          />

          {/* Wishlist */}
         <button
       onClick={handleWishlist}
        disabled={isWishlisted}
            className="
              absolute
              top-4
              right-4
              w-11
              h-11
              rounded-full
              bg-black/70
              backdrop-blur-md
              flex
              items-center
              justify-center
              text-xl
              transition
              duration-300
              hover:scale-125
              hover:rotate-12
            "
          >
            {isWishlisted ? "❤️" : "🤍"}
          </button>

          {/* Category */}
          <span
            className="
              absolute
              bottom-4
              left-4
              bg-[#d4af37]
              text-black
              px-4
              py-1
              rounded-full
              text-xs
              font-bold
              uppercase
            "
          >
            {product.category}
          </span>

          {/* Add To Cart */}
        <button
  onClick={handleCart}
  disabled={isInCart}
            className="
              absolute
              left-4
              right-4
              bottom-4
              translate-y-20
              group-hover:translate-y-0
              transition-all
              duration-500
              bg-[#d4af37]
              text-black
              py-3
              rounded-xl
              font-bold
              hover:bg-yellow-400
            "
          >
          {isInCart ? "Added To Cart" : "Add To Cart"}
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-3">
       
       <div className="flex items-center justify-between mt-2">
  <h3 className="text-white text-lg font-semibold line-clamp-1">
    {product.title}
  </h3>

  <p className="text-xl font-bold text-[#d4af37]">
    ₹{product.price}
  </p>
</div>
      

        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;