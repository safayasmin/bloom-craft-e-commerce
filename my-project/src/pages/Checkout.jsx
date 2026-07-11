
import React, { useState } from "react";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { clearCart } from "../redux/cartSlice";

const Checkout = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useAuth();
 const cart = useSelector(state => state.cart.cart)

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: "cash",
  });

  const [popup, setPopup] = useState({
    show: false,
    message: "", 
    type: "",
  });

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-[#131313] flex items-center justify-center">
          <h1 className="text-white text-3xl">
            Your cart is empty
          </h1>
        </div>
      </>
    );
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // popup msg kanikan
  const showPopup = (message, type) => {
    setPopup({
      show: true,
      message,
      type,
    });

    setTimeout(() => {
      setPopup({
        show: false,
        message: "",
        type: "",
      });
    }, 2500);
  };

const handleSubmit = async () => {
 
  if (
    !form.fullName.trim() ||
    !form.phone.trim() ||
    !form.address.trim() ||
    !form.city.trim() ||
    !form.state.trim() ||
    !form.pincode.trim()
  ) {
    showPopup("Please fill all shipping details.", "error");
    return;
  }

  // Phone validation
  if (!/^\d{10}$/.test(form.phone)) {
    showPopup("Please enter a valid 10-digit phone number.", "error");
    return;
  }

  // Pincode validation
  if (!/^\d{6}$/.test(form.pincode)) {
    showPopup("Please enter a valid 6-digit pincode.", "error");
    return;
  }



  if (form.payment === "cash") {
   

 const newOrder = {
  orderId: Date.now(),

  user: user.id,
  userId: user.id,
  username: user.username,
  email: user.email,

  payment: "Cash on Delivery",

  total,

  productCount: cart.length,

  items: cart,    // items use cheyyuka



    address: {
    fullName: form.fullName,
    phone: form.phone,
    address: form.address,
    city: form.city,
    state: form.state,
    pincode: form.pincode,
  },

  // 👇 Add this
  status: "Order Placed",

  createdAt: new Date().toISOString(),
};


await axios.post("http://localhost:5000/orders", newOrder);

// Cart database-il ninn products delete cheyyuka
for (const item of cart) {
  await axios.delete(`http://localhost:5000/cart/${item.id}`);
}

// Redux cart clear
dispatch(clearCart());

navigate("/order-success", {
  state: newOrder,
  // newOrder next page-lek send cheyyunnu.
});

    return;
  }

  if (form.payment === "razorpay") {
    navigate("/razorpay", {
      state: {
        form,
        cart,
        total,
      },
    });
  }
};

  return (
    <>
      <Navbar />

      {popup.show && (
        <div className="fixed top-5 right-5 z-50">
          <div
            className={`px-6 py-4 rounded-lg text-white ${
              popup.type === "success"
                ? "bg-green-600"
                : "bg-red-600"
            }`}
          >
            {popup.message}
          </div>
        </div>
      )}

      <div className="min-h-screen bg-[#131313] text-white p-10">
        <h1 className="text-4xl text-center mb-10">
          Checkout
        </h1>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="bg-black/40 p-6 rounded-xl border border-[#d4af37]/20">
            <h2 className="text-2xl mb-5">
              Shipping Details
            </h2>

              <div className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                className="w-full p-3 bg-black border border-gray-700 rounded-lg outline-none"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3 bg-black border border-gray-700 rounded-lg outline-none"
              />

              <textarea
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                rows={3}
                className="w-full p-3 bg-black border border-gray-700 rounded-lg outline-none"
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                className="w-full p-3 bg-black border border-gray-700 rounded-lg outline-none"
              />

              <input
                type="text"
                name="state"
                placeholder="State"
                value={form.state}
                onChange={handleChange}
                className="w-full p-3 bg-black border border-gray-700 rounded-lg outline-none"
              />

              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={form.pincode}
                onChange={handleChange}
                className="w-full p-3 bg-black border border-gray-700 rounded-lg outline-none"
              />

              <div className="pt-3">
                <h3 className="mb-2 font-semibold">
                  Payment Method
                </h3>

                <label className="block mb-2">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={form.payment === "cash"}
                    onChange={handleChange}
                  />{" "}
                  Cash on Delivery
                </label>

                <label className="block">
  <input
    type="radio"
    name="payment"
    value="razorpay"
    checked={form.payment === "razorpay"}
    onChange={handleChange}
  />{" "}
  Razorpay
</label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-black/40 p-6 rounded-xl border border-[#d4af37]/20">
            <h2 className="text-2xl mb-6">
              Order Summary
            </h2>

            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b border-gray-700 pb-4"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-24 h-24 rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="text-lg">
                      {item.title}
                    </h3>

                    <p className="text-[#d4af37]">
                      ₹{item.price}
                    </p>

                    <p>
                      Qty : {item.quantity}
                    </p>

                    <p className="font-semibold">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-gray-700 pt-5">
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>

                <span className="text-[#d4af37]">
                  ₹{total}
                </span>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full mt-6 bg-[#d4af37] text-black py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;