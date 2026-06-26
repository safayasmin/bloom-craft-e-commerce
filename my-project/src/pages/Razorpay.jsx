import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { useAuth } from "../contexts/AuthContext";


const Razorpay = () => {
  const { clearCart } = useShop();
   const { user } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
 

  const [step, setStep] = useState("loading"); 
  // loading → processing → success

  useEffect(() => {
    // Step 1: loading screen
    setTimeout(() => {
      setStep("processing");

     setTimeout(() => {
  setStep("success");
  clearCart();

  // 💾 SAVE ORDER TO LOCALSTORAGE
 const newOrder = {
  items: state?.cart,
  total: state?.total,
  payment: "razorpay",
  orderId: Date.now(),
  userEmail: user?.email,
};

  const oldOrders =
    JSON.parse(localStorage.getItem("orders")) || [];

  oldOrders.push(newOrder);

  localStorage.setItem(
    "orders",
    JSON.stringify(oldOrders)
  );

  // ⏩ NAVIGATE TO ORDER SUCCESS PAGE
  setTimeout(() => {
    navigate("/order-success", {
      state: newOrder,
    });
  }, 2000);
}, 2500);

    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white">
      
      {/* LOADING */}
      {step === "loading" && (
        <div className="text-center">
          <div className="text-5xl animate-spin">⚙️</div>
          <p className="mt-4">Opening Razorpay...</p>
        </div>
      )}

      {/* PROCESSING (COIN STYLE) */}
      {step === "processing" && (
        <div className="text-center">
          <div className="text-6xl animate-bounce">💰</div>
          <h2 className="mt-4 text-xl">
            Processing Payment...
          </h2>

          <div className="mt-3 text-gray-300 text-sm">
            Please wait, do not refresh
          </div>

          {/* fake loading bar */}
          <div className="w-64 h-2 bg-gray-700 mt-5 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 animate-pulse w-full"></div>
          </div>
        </div>
      )}

      {/* SUCCESS SCREEN */}
      {step === "success" && (
        <div className="text-center">
          <div className="text-6xl">✅</div>
          <h2 className="mt-4 text-2xl text-green-400">
            Payment Successful
          </h2>

          <p className="text-gray-300 mt-2">
            Order Confirmed Successfully
          </p>

          <div className="mt-4 text-sm text-gray-400">
            Redirecting to home...
          </div>
        </div>
      )}
    </div>
  );
};

export default Razorpay;