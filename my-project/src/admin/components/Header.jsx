import React from "react";

const Header = () => {
  return (
    <header className="h-20 bg-black border-b border-gray-700 flex items-center justify-between px-8">

      {/* Left Side */}
      <div>
        <h2 className="text-3xl font-bold text-yellow-400">
          Dashboard
        </h2>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        <div className="text-right">
          <h3 className="text-white font-semibold">
            Administrator
          </h3>
          <p className="text-gray-400 text-sm">
            admin@gmail.com
          </p>
        </div>

        <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-lg">
          A
        </div>

      </div>

    </header>
  );
};

export default Header;