import React, { useEffect } from "react";
import Navbar from "../component/Navbar";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  setCart,
} from "../redux/cartSlice";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Cart = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const dispatch = useDispatch();

const cart = useSelector(
  (state) => state.cart.cart
);


  useEffect(() => {
  if (!user) {
    navigate("/login", { replace: true });
    return;
  }

  const loadCart = async () => {
    const res = await axios.get(
      `http://localhost:5000/cart?userId=${user.id}`
    );
    dispatch(setCart(res.data));
  };

  loadCart();
}, [user, dispatch]);


  const totalItems = cart.reduce(
  (total, item) => total + item.quantity,
  0
);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleRemove = async (id) => {
  await axios.delete(`http://localhost:5000/cart/${id}`);
  dispatch(removeFromCart(id));
};

const handleIncrease = async (p) => {
  await axios.patch(`http://localhost:5000/cart/${p.id}`, {
    quantity: p.quantity + 1,
  });

  dispatch(increaseQuantity(p.productId));
};

const handleDecrease = async (p) => {
  if (p.quantity === 1) return;

  await axios.patch(`http://localhost:5000/cart/${p.id}`, {
    quantity: p.quantity - 1,
  });

  dispatch(decreaseQuantity(p.productId));
};

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#131313] p-10">
        <h1
          className="text-white text-5xl mb-10 text-center"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Your Cart 🛒
        </h1>

        {cart.length === 0 ? (
          <div className="text-center text-gray-400 mt-20 text-2xl">
            No products in cart
          </div>
        ) : (
          <>
            <div className="max-w-6xl mx-auto space-y-6">
              {cart.map((p) => (
                <div
                  key={p.id}
                  className="bg-black/40 border border-[#d4af37]/20 rounded-xl p-6 flex flex-col md:flex-row gap-8"
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-[240px] h-[240px] object-cover rounded-xl"
                  />

                  <div className="flex-1">
                    <h2 className="text-white text-3xl">
                      {p.title}
                    </h2>

                    <p className="text-[#d4af37] text-xl mt-2">
                      ₹{p.price}
                    </p>

                    <div className="flex items-center gap-4 mt-5">
                      <button
                       onClick={() => handleDecrease(p)}

                        className="w-10 h-10 bg-gray-700 text-white rounded-lg"
                      >
                        -
                      </button>

                      <span className="text-white text-xl">
                        {p?.quantity}
                      </span>

                      <button
                       onClick={() => handleIncrease(p)}
                        className="w-10 h-10 bg-gray-700 text-white rounded-lg"
                      >
                      +
                      </button>
                    </div>

                    <p className="text-white mt-5">
                      Subtotal: ₹{p.price * p.quantity}
                    </p>

                    <button
                      onClick={() => handleRemove(p.id)}
                      className="text-red-500 mt-3"
                    >
                    Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="max-w-6xl mx-auto flex justify-end mt-10">
              <div className="w-full md:w-[380px] bg-black/40 border border-[#d4af37]/20 rounded-xl p-6">
                <h2 className="text-white text-2xl font-semibold mb-6">
                  Order Summary
                </h2>

                <div className="flex justify-between text-white mb-4">
                  <span>Total Items</span>
                  <span>{totalItems}</span>
                </div>

                <div className="flex justify-between text-white mb-6">
                  <span>Total Price</span>
                  <span className="text-[#d4af37] text-xl font-bold">
                    ₹{totalPrice}
                  </span>
                </div>

                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full bg-[#d4af37] text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
                >
                  PROCEED TO ORDER
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;