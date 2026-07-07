import React from "react";

const Dashboard = () => {
  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Products */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-500 text-lg">
            Total Products
          </h3>

          <h2 className="text-4xl font-bold mt-4 text-yellow-500">
            0
          </h2>
        </div>

        {/* Users */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-500 text-lg">
            Total Users
          </h3>

          <h2 className="text-4xl font-bold mt-4 text-blue-500">
            0
          </h2>
        </div>

        {/* Orders */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-500 text-lg">
            Total Orders
          </h3>

          <h2 className="text-4xl font-bold mt-4 text-green-500">
            0
          </h2>
        </div>

        {/* Revenue */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-500 text-lg">
            Total Revenue
          </h3>

          <h2 className="text-4xl font-bold mt-4 text-red-500">
            ₹0
          </h2>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;