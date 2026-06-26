


import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f0f0f] border-t border-white/10 pt-14 md:pt-20 pb-8">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

        {/* Logo */}
        <div>
          <h2
            className="text-3xl lg:text-4xl text-[#e9c349] mb-5"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            BloomCraft
          </h2>

         <p className="text-gray-400 leading-7 text-sm lg:text-base">
            Elegant floral arrangements handcrafted with passion,
            creativity, and timeless beauty for every special occasion.
          </p>

          <div className="flex gap-4 mt-6">
            <span className="material-symbols-outlined text-gray-400 hover:text-[#e9c349] cursor-pointer">
              public
            </span>

            <span className="material-symbols-outlined text-gray-400 hover:text-[#e9c349] cursor-pointer">
              camera
            </span>

            <span className="material-symbols-outlined text-gray-400 hover:text-[#e9c349] cursor-pointer">
              chat
            </span>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="uppercase tracking-[2px] lg:tracking-[3px] text-white mb-5 lg:mb-6">
            Shop
          </h3>

          <ul className="space-y-3 lg:space-y-4 text-gray-400 text-sm lg:text-base">
            <li>
              <Link to="/flowers" className="hover:text-[#e9c349] transition">
                Real Flowers
              </Link>
            </li>

            <li>
              <Link to="/crochet" className="hover:text-[#e9c349] transition">
                Crochet Collection
              </Link>
            </li>

            <li>
              <Link to="/wedding" className="hover:text-[#e9c349] transition">
                Wedding Collection
              </Link>
            </li>

            <li>
              <Link to="/explore" className="hover:text-[#e9c349] transition">
                Explore Products
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="uppercase tracking-[3px] text-white mb-6">
            Company
          </h3>

          <ul className="space-y-4 text-gray-400">
            <li>
              <Link to="/about" className="hover:text-[#e9c349] transition">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-[#e9c349] transition">
                Our Story
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="uppercase tracking-[3px] text-white mb-6">
            Legal
          </h3>

          <ul className="space-y-4 text-gray-400">
            <li>
              <span className="hover:text-[#e9c349] transition cursor-pointer">
                Privacy Policy
              </span>
            </li>

            <li>
              <span className="hover:text-[#e9c349] transition cursor-pointer">
                Terms of Service
              </span>
            </li>

            <li>
              <span className="hover:text-[#e9c349] transition cursor-pointer">
                Shipping & Returns
              </span>
            </li>

            <li>
              <span className="hover:text-[#e9c349] transition cursor-pointer">
                Refund Policy
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-10 lg:mt-14 pt-6 border-t border-white/10 text-center px-4">
        <p className="text-gray-500 text-sm">
           2026 BloomCraft by Safa Yasmin. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;