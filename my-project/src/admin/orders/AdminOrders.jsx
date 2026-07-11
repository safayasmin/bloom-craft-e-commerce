import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setOrders,
  updateOrder,
} from "../../redux/orderSlice";

const AdminOrders = () => {
  const dispatch = useDispatch();

  const orders = useSelector(
    (state) => state.orders.orders
  );

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const ordersPerPage = 3;

  // ---------------- Fetch Orders ----------------

  const getOrders = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/orders"
      );

      dispatch(setOrders(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  // ---------------- Update Status ----------------

  const handleStatus = async (order, status) => {
    const updatedOrder = {
      ...order,
      status,
    };

    try {
      const res = await axios.put(
        `http://localhost:5000/orders/${order.id}`,
        updatedOrder
      );

      dispatch(updateOrder(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  // ---------------- Search ----------------

  const filteredOrders = orders.filter((item) => {
    return (
      item.username
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      item.email
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );
  });

  // ---------------- Pagination ----------------

  const lastIndex =
    currentPage * ordersPerPage;

  const firstIndex =
    lastIndex - ordersPerPage;

  const currentOrders =
    filteredOrders.slice(
      firstIndex,
      lastIndex
    );

  const totalPages = Math.ceil(
    filteredOrders.length /
      ordersPerPage
  );

  // ---------------- Statistics ----------------

  const totalOrders = orders.length;

  const placed = orders.filter(
    (item) =>
      item.status === "Order Placed"
  ).length;

  const shipped = orders.filter(
    (item) =>
      item.status === "Shipped"
  ).length;

  const delivered = orders.filter(
    (item) =>
      item.status === "Delivered"
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#222222] via-[#2d2823] to-[#3a3128] p-8">

      {/* Heading */}

      <h1 className="text-4xl font-bold text-[#d4af37]">
        Orders
      </h1>

      <p className="text-gray-400 mt-2">
        Manage Customer Orders
      </p>

      {/* Cards */}

      <div className="grid grid-cols-4 gap-6 mt-8">

        <div className="bg-[#111] border border-[#d4af37]/20 rounded-2xl p-6">
          <p className="text-gray-400">
            Total Orders
          </p>

          <h2 className="text-3xl font-bold text-[#d4af37] mt-2">
            {totalOrders}
          </h2>
        </div>

        <div className="bg-[#111] border border-[#d4af37]/20 rounded-2xl p-6">
          <p className="text-gray-400">
            Placed
          </p>

          <h2 className="text-3xl font-bold text-yellow-400 mt-2">
            {placed}
          </h2>
        </div>

        <div className="bg-[#111] border border-[#d4af37]/20 rounded-2xl p-6">
          <p className="text-gray-400">
            Shipped
          </p>

          <h2 className="text-3xl font-bold text-blue-400 mt-2">
            {shipped}
          </h2>
        </div>

        <div className="bg-[#111] border border-[#d4af37]/20 rounded-2xl p-6">
          <p className="text-gray-400">
            Delivered
          </p>

          <h2 className="text-3xl font-bold text-green-500 mt-2">
            {delivered}
          </h2>
        </div>

      </div>

      {/* Search */}

      <input
        type="text"
        placeholder="Search Orders..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        className="mt-8 w-80 bg-[#111] border border-[#d4af37]/30 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37]"
      />

      {/* Table */}

      <div className="bg-[#111] border border-[#d4af37]/20 rounded-2xl overflow-hidden mt-8">

        <table className="w-full">

          <thead className="bg-black text-[#d4af37]">

            <tr>

              <th className="p-5 text-left">
                Customer
              </th>

              <th className="p-5 text-left">
                Payment
              </th>

              <th className="p-5 text-left">
                Total
              </th>

              <th className="p-5 text-left">
                Status
              </th>

              <th className="p-5 text-left">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {currentOrders.map((item) => (

              <tr
                key={item.id}
                className="border-b border-[#d4af37]/10 hover:bg-[#1b1611]"
              >

                <td className="p-5 text-white">
                  {item.username}
                </td>

                <td className="p-5 text-gray-300">
                  {item.payment}
                </td>

                <td className="p-5 text-white">
                  ₹{item.total}
                </td>

                <td className="p-5">

                  <select
                    value={item.status}
                    onChange={(e) =>
                      handleStatus(
                        item,
                        e.target.value
                      )
                    }
                    className="bg-[#1b1611] border border-[#d4af37]/30 rounded-lg px-3 py-2 text-white"
                  >
                    <option>
                      Order Placed
                    </option>

                    <option>
                      Processing
                    </option>

                    <option>
                      Shipped
                    </option>

                    <option>
                      Delivered
                    </option>

                    <option>
                      Cancelled
                    </option>

                  </select>

                </td>

                <td className="p-5">

                  <Link
                    to={`/admin/orders/${item.id}`}
                    className="bg-[#d4af37] text-black px-5 py-2 rounded-lg font-semibold hover:bg-[#c19a2b]"
                  >
                    View
                  </Link>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Pagination */}

      <div className="flex justify-center mt-6 gap-3">

        {[...Array(totalPages)].map((_, index) => (

          <button
            key={index}
            onClick={() =>
              setCurrentPage(index + 1)
            }
            className={`px-4 py-2 rounded-lg border transition ${
              currentPage === index + 1
                ? "bg-[#d4af37] text-black border-[#d4af37]"
                : "bg-[#1b1611] text-[#d4af37] border-[#d4af37]/40"
            }`}
          >
            {index + 1}
          </button>

        ))}

      </div>

    </div>
  );
};

export default AdminOrders;