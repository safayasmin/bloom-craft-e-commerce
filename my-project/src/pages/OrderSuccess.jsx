
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden px-4">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiuZQi8OCaHlBBUW2HLmo0LPm1V0S2mwAdm2vmpFYqFbT8Mp72MasnlEBkoz75T5H43dRq7RayDbyGS-eUwV-TjjYIRjoJ2EewK_Z_ExJehWba_ZYX0khjwyNrAilNaNvMYSXwq8pQvjtewsk_T90O_nTqtF-UMKW6ZlHRqG-tydduW5iqkrlc8rZJFJ8Qyz1n02eRI0V_O9ST4_zbEiCXCkLTH08T5jq-sf0GW7ivybw_nHalMnbHnmM5Pio4jHp-QfxxpyjqdAs"
          alt="Background"
          className="w-full h-full object-cover scale-110 opacity-40"
        />

        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Success Card */}
      <div className="relative z-10 w-full max-w-md bg-black/50 backdrop-blur-xl border border-[#d4af37]/20 rounded-2xl p-8 text-center">

        <div className="w-20 h-20 mx-auto rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-4xl mb-6">
          ✅
        </div>

        <h1
          className="text-4xl text-[#d4af37] mb-3"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Order Placed
        </h1>

        <p className="text-gray-300 mb-6">
          Thank you for shopping with BloomCraft.
          Your order has been placed successfully.
        </p>

        <div className="bg-black/40 border border-[#d4af37]/20 rounded-xl p-5 space-y-3">

          <div className="flex justify-between text-gray-300">
            <span>Payment</span>
            <span className="text-[#d4af37] capitalize">
              {state?.payment}
            </span>
          </div>

          <div className="flex justify-between text-gray-300">
            <span>Total Amount</span>
            <span className="text-[#d4af37] font-semibold">
              ₹{state?.total}
            </span>
          </div>

        </div>

        <button
          onClick={() => navigate("/")}
          className="w-full mt-8 bg-[#d4af37] text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Continue Shopping
        </button>

      </div>
    </div>
  );
};

export default OrderSuccess;