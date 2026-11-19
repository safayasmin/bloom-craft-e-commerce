
import { useState } from "react";
import { FiHeart, FiShoppingCart, FiUser, FiMenu, FiX } from "./Icons";
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
    <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-2xl border-b border-[#e9c349]/20 px-4 sm:px-6 lg:px-10 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Mobile Hamburger & Logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-[#f5e6d3] hover:text-[#e9c349] transition focus:outline-none"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <h1
            onClick={() => navigate("/home")}
            className="cursor-pointer text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wide text-[#f5e6d3] hover:text-[#e9c349] transition"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            BloomCraft
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div
          className="hidden lg:flex items-center gap-8 text-[14px] tracking-[2px] font-medium"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <Link className="hover:text-[#e9c349] transition py-1" to="/home">
            HOME
          </Link>
          <Link className="hover:text-[#e9c349] transition py-1" to="/explore">
            EXPLORE
          </Link>
          <Link className="hover:text-[#e9c349] transition py-1" to="/category">
            CATEGORIES
          </Link>
          <Link className="hover:text-[#e9c349] transition py-1" to="/about">
            ABOUT
          </Link>
          <Link className="hover:text-[#e9c349] transition py-1" to="/orders">
            ORDERS
          </Link>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Wishlist */}
          <button
            type="button"
            aria-label="View wishlist"
            onClick={() => handleProtectedRoute("/wishlist", "wishlist")}
            className="relative p-2 cursor-pointer hover:text-[#e9c349] text-[#f5e6d3] transition"
          >
            <FiHeart size={22} />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] min-w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold px-1">
              {user ? wishlist?.length || 0 : 0}
            </span>
          </button>

          {/* Cart */}
          <button
            type="button"
            aria-label="View shopping cart"
            onClick={() => handleProtectedRoute("/cart", "cart")}
            className="relative flex items-center gap-1.5 sm:gap-2 border border-[#e9c349] text-[#f5e6d3] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full cursor-pointer hover:bg-[#e9c349] hover:text-black transition duration-300"
          >
            <FiShoppingCart size={18} />
            <span className="uppercase tracking-wider text-xs hidden sm:inline">
              Cart
            </span>
            <span className="bg-[#e9c349] text-black text-[10px] min-w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold sm:static ml-1">
              {user ? cart?.length || 0 : 0}
            </span>
          </button>

          {/* User Account Dropdown */}
          <div className="relative">
            {!user ? (
              <button
                type="button"
                aria-label="Sign in"
                onClick={() =>
                  navigate("/login", {
                    state: { from: "/home" },
                  })
                }
                className="p-2 text-[#f5e6d3] hover:text-[#e9c349] transition"
              >
                <FiUser size={22} />
              </button>
            ) : (
              <>
                <button
                  type="button"
                  aria-label="User profile options"
                  onClick={() => setOpen(!open)}
                  className="p-2 text-[#f5e6d3] hover:text-[#e9c349] transition focus:outline-none"
                >
                  <FiUser size={22} />
                </button>

                {open && (
                  <div className="absolute right-0 mt-3 w-40 rounded-xl bg-[#1b1b1b] border border-[#e9c349]/30 shadow-2xl overflow-hidden z-50">
                    <div className="px-4 py-2 border-b border-white/10 text-xs text-gray-300 truncate">
                      {user.email || user.username}
                    </div>
                    {user.role === "admin" && (
                      <Link
                        to="/admin/dashboard"
                        onClick={() => setOpen(false)}
                        className="block w-full px-4 py-2.5 text-left text-xs text-[#e9c349] hover:bg-[#e9c349]/10 transition"
                      >
                        Admin Panel
                      </Link>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        logout();
                        setOpen(false);
                        navigate("/home");
                      }}
                      className="w-full px-4 py-2.5 text-left text-xs text-red-400 hover:bg-red-500/10 transition"
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

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 pt-4 border-t border-[#e9c349]/20 flex flex-col gap-3 px-2 text-sm tracking-[2px]">
          <Link
            className="text-[#f5e6d3] hover:text-[#e9c349] py-2 transition"
            to="/home"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            className="text-[#f5e6d3] hover:text-[#e9c349] py-2 transition"
            to="/explore"
            onClick={() => setMenuOpen(false)}
          >
            EXPLORE
          </Link>
          <Link
            className="text-[#f5e6d3] hover:text-[#e9c349] py-2 transition"
            to="/category"
            onClick={() => setMenuOpen(false)}
          >
            CATEGORIES
          </Link>
          <Link
            className="text-[#f5e6d3] hover:text-[#e9c349] py-2 transition"
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            className="text-[#f5e6d3] hover:text-[#e9c349] py-2 transition"
            to="/orders"
            onClick={() => setMenuOpen(false)}
          >
            ORDERS
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;







