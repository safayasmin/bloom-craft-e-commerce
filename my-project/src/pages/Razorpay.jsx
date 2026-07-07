import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import { useAuth } from "../contexts/AuthContext";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";

const Razorpay = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();

  const [step, setStep] = useState("loading");

  useEffect(() => {
    if (!user || !state) return;

    const processPayment = async () => {
      try {
       
        setStep("loading");

        setTimeout(async () => {
          setStep("processing");

         
          setTimeout(async () => {
          
const newOrder = {
  orderId: Date.now(),

  user: user.id,
  userId: user.id,
  username: user.username,
  email: user.email,

  payment: "Razorpay",

  total: state.total,

  productCount: state.cart.length,

  items: state.cart,   // ✅ items use cheyyuka



  address: {
    fullName: state.form.fullName,
    phone: state.form.phone,
    address: state.form.address,
    city: state.form.city,
    state: state.form.state,
    pincode: state.form.pincode,
  },




  createdAt: new Date().toISOString(),
};



            // SAVE TO DB
           await axios.post("http://localhost:5000/orders", newOrder);

// Cart database-il ninn products delete cheyyuka
for (const item of state.cart) {
  await axios.delete(`http://localhost:5000/cart/${item.id}`);
}

// Redux cart clear
dispatch(clearCart());

setStep("success");


            // Step 3: redirect
            setTimeout(() => {
              navigate("/order-success", {
                state: newOrder,
              });
            }, 2000);
          }, 2500);
        }, 1500);
      } catch (err) {
        console.log(err);
      }
    };

    processPayment();
  }, [user, state, dispatch, navigate]);

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white">

      {step === "loading" && (
        <div className="text-center">
          <div className="text-5xl animate-spin">⚙️</div>
          <p className="mt-4">Opening Razorpay...</p>
        </div>
      )}

      {step === "processing" && (
        <div className="text-center">
          <div className="text-6xl animate-bounce">💰</div>
          <h2 className="mt-4 text-xl">Processing Payment...</h2>
          <p className="text-gray-300 text-sm mt-2">
            Please wait, do not refresh
          </p>

          <div className="w-64 h-2 bg-gray-700 mt-5 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 animate-pulse w-full"></div>
          </div>
        </div>
      )}

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