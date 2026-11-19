import { useEffect, useState } from "react";
import axios from "axios";

const RecentOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/orders"
        );
        const lastFive = res.data.slice(-5).reverse();
        setOrders(lastFive);
      } catch (error) {
        console.error("Error fetching recent orders:", error);
      }
    };

    getOrders();
  }, []);

  return (
    <div className="bg-[#1F1F1F] rounded-xl p-6 border border-[#2d2d2d] shadow-lg">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-yellow-400">
          Recent Orders
        </h2>

        <span className="text-gray-400 text-sm">
          {orders.length} Orders
        </span>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="border-b border-gray-700 text-left">
              <th className="py-3 text-gray-300">Customer</th>
              <th className="py-3 text-gray-300">Items</th>
              <th className="py-3 text-gray-300">Total</th>
              <th className="py-3 text-gray-300">Payment</th>
              <th className="py-3 text-gray-300">Status</th>
            </tr>
          </thead>

          <tbody>

            {orders.map((order) => (

              <tr
                key={order.id}
                className="border-b border-gray-800 hover:bg-[#2A2A2A]"
              >

                <td className="py-4 text-white">
                  {order.username}
                </td>

                <td className="py-4 text-gray-300">
                  {order.productCount}
                </td>

                <td className="py-4 text-yellow-400 font-semibold">
                  ₹{order.total}
                </td>

                <td className="py-4 text-gray-300">
                  {order.payment}
                </td>

                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium
                      ${
                        order.status === "Delivered"
                          ? "bg-green-500/20 text-green-400"
                          : order.status === "Processing"
                          ? "bg-blue-500/20 text-blue-400"
                          : order.status === "Shipped"
                          ? "bg-purple-500/20 text-purple-400"
                          : order.status === "Cancelled"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                  >
                    {order.status}
                  </span>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
};

export default RecentOrders;