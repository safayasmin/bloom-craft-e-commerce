import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/orders?user=${user.id}`
        );
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiuZQi8OCaHlBBUW2HLmo0LPm1V0S2mwAdm2vmpFYqFbT8Mp72MasnlEBkoz75T5H43dRq7RayDbyGS-eUwV-TjjYIRjoJ2EewK_Z_ExJehWba_ZYX0khjwyNrAilNaNvMYSXwq8pQvjtewsk_T90O_nTqtF-UMKW6ZlHRqG-tydduW5iqkrlc8rZJFJ8Qyz1n02eRI0V_O9ST4_zbEiCXCkLTH08T5jq-sf0GW7ivybw_nHalMnbHnmM5Pio4jHp-QfxxpyjqdAs"
          alt="background"
          className="w-full h-full object-cover scale-110 opacity-40"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto p-8">

        <h1 className="text-4xl font-bold text-[#d4af37] text-center mb-8">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="bg-black/50 backdrop-blur-xl border border-[#d4af37]/30 rounded-xl p-8 text-center">
            <p className="text-gray-300 text-lg">
              No Orders Yet
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-xl border border-[#d4af37]/30 rounded-xl p-6"
              >
                <div className="flex justify-between mb-4">
                  <p className="text-white">
                    <span className="text-[#d4af37] font-semibold">
                      Payment:
                    </span>{" "}
                    {order.payment}
                  </p>

                  <p className="text-white font-bold">
                    ₹{order.total}
                  </p>
                </div>

                <div className="space-y-3">
                  {order.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 border-b border-gray-700 pb-3"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-16 h-16 rounded-lg object-cover border border-[#d4af37]/30"
                      />

                      <div>
                        <h2 className="text-white font-semibold">
                          {item.title}
                        </h2>

                        <p className="text-gray-400">
                          ₹{item.price}
                        </p>
                      </div>
                    </div>
                  ))} 
                </div>




                

                {order.address && (
  <div className="mt-6 bg-black/30 border border-[#d4af37]/30 rounded-lg p-4">
    <h2 className="text-[#d4af37] text-lg font-bold mb-3">
      Delivery Address
    </h2>

    <p className="text-white">
      <span className="font-semibold">Name:</span>{" "}
      {order.address.fullName}
    </p>

    <p className="text-white">
      <span className="font-semibold">Phone:</span>{" "}
      {order.address.phone}
    </p>

    <p className="text-white">
      <span className="font-semibold">Address:</span>{" "}
      {order.address.address}
    </p>

    <p className="text-white">
      <span className="font-semibold">City:</span>{" "}
      {order.address.city}
    </p>

    <p className="text-white">
      <span className="font-semibold">State:</span>{" "}
      {order.address.state}
    </p>

    <p className="text-white">
      <span className="font-semibold">Pincode:</span>{" "}
      {order.address.pincode}
    </p>
  </div>
)} 

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;