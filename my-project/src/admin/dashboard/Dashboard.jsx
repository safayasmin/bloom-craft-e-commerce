
import React from "react";
import StatCard from "./StatCard";
import RevenueChart from "./RevenueChart";
import RecentOrders from "./RecentOrders";

const Dashboard = () => {
  return (
    <div className="space-y-8">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard
          title="Total Products"
          type="products"
          color="#EAB308"
        />

        <StatCard
          title="Total Users"
          type="users"
          color="#3B82F6"
        />

        <StatCard
          title="Total Orders"
          type="orders"
          color="#22C55E"
        />

        <StatCard
          title="Revenue"
          type="revenue"
          color="#EF4444"
        />

      </div>

      <RevenueChart />

      <RecentOrders />
    </div>
  );
};

export default Dashboard;


















// import React from "react";
// import StatCard from "./StatCard";
// import RevenueChart from "./RevenueChart";
// import RecentOrders from "./RecentOrders";

// const Dashboard = () => {
//   return (
//     <div className="space-y-8">

//       {/* Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

//         <StatCard
//           title="Total Products"
//           value="17"
//           color="#EAB308"
//         />

//         <StatCard
//           title="Total Users"
//           value="18"
//           color="#3B82F6"
//         />

//         <StatCard
//           title="Total Orders"
//           value="21"
//           color="#22C55E"
//         />

//         <StatCard
//           title="Revenue"
//           value="₹16,500"
//           color="#EF4444"
//         />

//       </div>

//       {/* Revenue */}
//       <RevenueChart />

//       {/* Orders */}
//       <RecentOrders />

//     </div>
//   );
// };

// export default Dashboard;