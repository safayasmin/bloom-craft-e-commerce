import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("admin");
    navigate("/login");
  };

  return (
    <div className="bg-black text-white w-64 h-screen fixed left-0 top-0 shadow-lg">

      <div className="p-6 border-b border-gray-700">
  <h1 className="text-2xl font-bold text-yellow-400">
    BloomCraft
  </h1>

  <p className="text-sm text-gray-400 mt-1">
    Real Flowers • Crochet • Wedding
  </p>
</div>

      <div className="flex flex-col mt-6">

        <NavLink
          to="/admin/dashboard"
          className="px-6 py-3 hover:bg-yellow-500 hover:text-black duration-300"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/products"
          className="px-6 py-3 hover:bg-yellow-500 hover:text-black duration-300"
        >
          Products
        </NavLink>

        <NavLink
          to="/admin/users"
          className="px-6 py-3 hover:bg-yellow-500 hover:text-black duration-300"
        >
          Users
        </NavLink>

        <NavLink
          to="/admin/orders"
          className="px-6 py-3 hover:bg-yellow-500 hover:text-black duration-300"
        >
          Orders
        </NavLink>

      </div>

      <div className="absolute bottom-5 w-full px-5">

        <button
          onClick={handleLogout}
          className="w-full bg-red-600 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>

      </div>

    </div>
  );
};

export default Sidebar;