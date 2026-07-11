import React from "react";

const orders = [
  {
    id: 1,
    customer: "Safa",
    items: 2,
    total: "₹1,250",
    payment: "Cash",
    status: "Delivered",
    date: "10 Jul 2026",
  },
  {
    id: 2,
    customer: "Shifa",
    items: 1,
    total: "₹850",
    payment: "Online",
    status: "Pending",
    date: "09 Jul 2026",
  },
  {
    id: 3,
    customer: "Amina",
    items: 4,
    total: "₹2,500",
    payment: "Cash",
    status: "Delivered",
    date: "09 Jul 2026",
  },
  {
    id: 4,
    customer: "Nida",
    items: 3,
    total: "₹1,700",
    payment: "Online",
    status: "Processing",
    date: "08 Jul 2026",
  },
  {
    id: 5,
    customer: "Fathima",
    items: 2,
    total: "₹950",
    payment: "Cash",
    status: "Pending",
    date: "08 Jul 2026",
  },
];

const RecentOrders = () => {
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

              <th className="py-3 text-gray-300">
                Customer
              </th>

              <th className="py-3 text-gray-300">
                Items
              </th>

              <th className="py-3 text-gray-300">
                Total
              </th>

              <th className="py-3 text-gray-300">
                Payment
              </th>

              <th className="py-3 text-gray-300">
                Status
              </th>

              <th className="py-3 text-gray-300">
                Date
              </th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (

              <tr
                key={order.id}
                className="border-b border-gray-800 hover:bg-[#2A2A2A]"
              >

                <td className="py-4 text-white">
                  {order.customer}
                </td>

                <td className="py-4 text-gray-300">
                  {order.items}
                </td>

                <td className="py-4 text-yellow-400 font-semibold">
                  {order.total}
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
                        : order.status === "Pending"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {order.status}
                  </span>

                </td>

                <td className="py-4 text-gray-400">
                  {order.date}
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