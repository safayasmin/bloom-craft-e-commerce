import React from "react";

const StatCard = ({ title, value, color }) => {
  return (
    <div className="bg-[#1F1F1F] rounded-xl p-6 shadow-lg border border-[#2e2e2e]">
      <h3 className="text-gray-400 text-lg">{title}</h3>

      <h2
        className="text-4xl font-bold mt-4"
        style={{ color: color }}
      >
        {value}
      </h2>
    </div>
  );
};

export default StatCard;