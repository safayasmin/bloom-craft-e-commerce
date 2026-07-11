// import React from "react";

// const Dashboard = () => {
//   return (
//     <div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

//         {/* Products */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h3 className="text-gray-500 text-lg">
//             Total Products
//           </h3>

//           <h2 className="text-4xl font-bold mt-4 text-yellow-500">
//             0
//           </h2>
//         </div>

//         {/* Users */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h3 className="text-gray-500 text-lg">
//             Total Users
//           </h3>

//           <h2 className="text-4xl font-bold mt-4 text-blue-500">
//             0
//           </h2>
//         </div>

//         {/* Orders */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h3 className="text-gray-500 text-lg">
//             Total Orders
//           </h3>

//           <h2 className="text-4xl font-bold mt-4 text-green-500">
//             0
//           </h2>
//         </div>

//         {/* Revenue */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h3 className="text-gray-500 text-lg">
//             Total Revenue
//           </h3>

//           <h2 className="text-4xl font-bold mt-4 text-red-500">
//             ₹0
//           </h2>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default Dashboard;


import React from "react";
import StatCard from "./StatCard";
import RevenueChart from "./RevenueChart";
import RecentOrders from "./RecentOrders";

const Dashboard = () => {
  return (
    <div className="space-y-8">

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard
          title="Total Products"
          value="17"
          color="#EAB308"
        />

        <StatCard
          title="Total Users"
          value="18"
          color="#3B82F6"
        />

        <StatCard
          title="Total Orders"
          value="21"
          color="#22C55E"
        />

        <StatCard
          title="Revenue"
          value="₹16,500"
          color="#EF4444"
        />

      </div>

      {/* Revenue */}
      <RevenueChart />

      {/* Orders */}
      <RecentOrders />

    </div>
  );
};

export default Dashboard;