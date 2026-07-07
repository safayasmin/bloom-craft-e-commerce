import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-[#222222] via-[#2d2823] to-[#3a3128]">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex-1 ml-64">
        
        {/* Header */}
        <Header />

        {/* Page Content */}
       <div className="p-6 min-h-screen bg-gradient-to-r from-[#222222] via-[#2d2823] to-[#3a3128]">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default AdminLayout;