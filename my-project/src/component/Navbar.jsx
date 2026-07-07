
import React, { useState } from "react";
import { FiHeart, FiShoppingCart, FiUser ,  FiMenu, FiX,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../contexts/AuthContext";


const Navbar = () => {



  const wishlist = useSelector(
  (state) => state.wishlist.wishlist
);

const cart = useSelector(
  (state) => state.cart.cart
);

  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  if (loading) {
    return (
      <nav className="h-20 bg-black/30 backdrop-blur-xl border-b border-white/10" />
    );
  }

  const handleProtectedRoute = (path, action) => {
    if (!user) {
      navigate("/login", {
        state: {
          from: path,
          action,
        },
      });
      return;
    }

    navigate(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-2xl border-b border-[#e9c349]/10 px-5 lg:px-10 py-5">

     <div className="flex items-center justify-between">
      {/* Logo */}
      <h1
  onClick={() => navigate("/home")}
  className="cursor-pointer text-3xl lg:text-4xl font-semibold tracking-wide text-[#f5e6d3] hover:text-[#e9c349] transition"
  style={{ fontFamily: "Playfair Display, serif" }}
>
  BloomCraft
</h1>

      {/* Navigation */}
      <div
  className="hidden lg:flex items-center gap-10 text-[15px] tracking-[3px] font-medium"
  style={{ fontFamily: "Inter, sans-serif" }}
>
        <Link className="hover:text-[#e9c349] transition" to="/home">
          HOME
        </Link>

        <Link className="hover:text-[#e9c349] transition" to="/explore">
          EXPLORE
        </Link>

        <Link className="hover:text-[#e9c349] transition" to="/category">
          CATEGORIES
        </Link>

        <Link className="hover:text-[#e9c349] transition" to="/about">
          ABOUT
        </Link>

        <Link className="hover:text-[#e9c349] transition" to="/orders">
          ORDERS
        </Link>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6">

        {/* Wishlist */}
        <div
          onClick={() => handleProtectedRoute("/wishlist", "wishlist")}
          className="relative cursor-pointer hover:text-[#e9c349] transition"
        >
          <FiHeart size={22} />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] min-w-[18px] h-[18px] rounded-full flex items-center justify-center">
            {user ? wishlist?.length || 0 : 0}
          </span>
        </div>


        {/* Cart */}
        <div
          onClick={() => handleProtectedRoute("/cart", "cart")}
          className="relative flex items-center gap-2 border border-[#e9c349] text-[#f5e6d3] px-4 py-2 rounded-full cursor-pointer hover:bg-[#e9c349] hover:text-black transition duration-300"
        >
          <FiShoppingCart size={18} />

          <span className="uppercase tracking-wider text-xs">
            Cart
          </span>

          <span className="absolute -top-2 -right-2 bg-[#e9c349] text-black text-[10px] min-w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold">
            {user ? cart?.length || 0 : 0}
          </span>
        </div>

        {/* User */}
        <div className="relative">

          {!user ? (
            <FiUser
              size={23}
              className="cursor-pointer hover:text-[#e9c349] transition"
              onClick={() =>
                navigate("/login", {
                  state: { from: "/home" },
                })
              }
            />
          ) : (
            <>
              <FiUser
                size={23}
                className="cursor-pointer hover:text-[#e9c349] transition"
                onClick={() => setOpen(!open)}
              />

              {open && (
                <div className="absolute right-0 mt-3 w-36 rounded-xl bg-[#1b1b1b] border border-[#e9c349]/20 shadow-2xl overflow-hidden">

                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                      navigate("/home");
                    }}
                    className="w-full px-4 py-3 text-left text-red-400 hover:bg-red-500/10 transition"
                  >
                    Logout
                  </button>

                </div>
              )}
            </>
          )}

        </div>

      </div>
      </div>
    </nav>
  );
};

export default Navbar;







