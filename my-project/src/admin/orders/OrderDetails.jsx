import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const OrderDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [order, setOrder] = useState(null);

  const getOrder = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/orders/${id}`
      );

      setOrder(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  if (!order) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#222222] via-[#2d2823] to-[#3a3128]">
        <h1 className="text-[#d4af37] text-3xl">
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#222222] via-[#2d2823] to-[#3a3128] p-8">

      {/* Heading */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold text-[#d4af37]">
            Order Details
          </h1>

          <p className="text-gray-400 mt-2">
            View complete order information
          </p>

        </div>

        <button
          onClick={() => navigate("/admin/orders")}
          className="bg-[#d4af37] hover:bg-[#c19a2b] text-black font-semibold px-6 py-3 rounded-xl"
        >
          Back
        </button>

      </div>

      {/* Customer */}

      <div className="bg-[#111] border border-[#d4af37]/20 rounded-2xl p-6 mb-6">

        <h2 className="text-2xl text-[#d4af37] font-bold mb-5">
          Customer Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <p className="text-gray-400">Username</p>

            <p className="text-white text-lg">
              {order.username}
            </p>

          </div>

          <div>

            <p className="text-gray-400">Email</p>

            <p className="text-white text-lg">
              {order.email}
            </p>

          </div>

          <div>

            <p className="text-gray-400">Payment</p>

            <p className="text-white text-lg">
              {order.payment}
            </p>

          </div>

          <div>

            <p className="text-gray-400">Status</p>

            <p
              className={`font-bold text-lg
                ${
                  order.status === "Delivered"
                    ? "text-green-500"
                    : order.status === "Cancelled"
                    ? "text-red-500"
                    : order.status === "Shipped"
                    ? "text-blue-400"
                    : "text-yellow-400"
                }`}
            >
              {order.status}
            </p>

          </div>

          <div>

            <p className="text-gray-400">Order Date</p>

            <p className="text-white">
              {new Date(
                order.createdAt
              ).toLocaleString()}
            </p>

          </div>

          <div>

            <p className="text-gray-400">
              Grand Total
            </p>

            <p className="text-[#d4af37] text-2xl font-bold">
              ₹{order.total}
            </p>

          </div>

        </div>

      </div>

      {/* Address */}

      <div className="bg-[#111] border border-[#d4af37]/20 rounded-2xl p-6 mb-6">

        <h2 className="text-2xl text-[#d4af37] font-bold mb-5">
          Delivery Address
        </h2>

        <div className="space-y-2 text-white">

          <p>
            <span className="text-[#d4af37]">
              Name :
            </span>{" "}
            {order.address?.fullName}
          </p>

          <p>
            <span className="text-[#d4af37]">
              Phone :
            </span>{" "}
            {order.address?.phone}
          </p>

          <p>
            <span className="text-[#d4af37]">
              Address :
            </span>{" "}
            {order.address?.address}
          </p>

          <p>
            <span className="text-[#d4af37]">
              City :
            </span>{" "}
            {order.address?.city}
          </p>

          <p>
            <span className="text-[#d4af37]">
              State :
            </span>{" "}
            {order.address?.state}
          </p>

          <p>
            <span className="text-[#d4af37]">
              Pincode :
            </span>{" "}
            {order.address?.pincode}
          </p>

        </div>

      </div>

      {/* Products */}

      <div className="bg-[#111] border border-[#d4af37]/20 rounded-2xl overflow-hidden">

        <h2 className="text-2xl text-[#d4af37] font-bold p-6">
          Ordered Products
        </h2>

        <table className="w-full">

          <thead className="bg-black text-[#d4af37]">

            <tr>

              <th className="p-5 text-left">
                Image
              </th>

              <th className="p-5 text-left">
                Product
              </th>

              <th className="p-5 text-left">
                Price
              </th>

              <th className="p-5 text-left">
                Qty
              </th>

              <th className="p-5 text-left">
                Total
              </th>

            </tr>

          </thead>

          <tbody>

            {order.items?.map((item) => (

              <tr
                key={item.id}
                className="border-b border-[#d4af37]/10 hover:bg-[#1b1611]"
              >

                <td className="p-5">

                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-20 rounded-lg object-cover"
                  />

                </td>

                <td className="p-5 text-white">
                  {item.title}
                </td>

                <td className="p-5 text-white">
                  ₹{item.price}
                </td>

                <td className="p-5 text-white">
                  {item.quantity}
                </td>

                <td className="p-5 text-[#d4af37] font-bold">
                  ₹
                  {item.price *
                    item.quantity}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default OrderDetails;