import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 26000 },
  { month: "May", revenue: 21000 },
  { month: "Jun", revenue: 32000 },
  { month: "Jul", revenue: 28000 },
];

const RevenueChart = () => {
  return (
    <div className="bg-[#1F1F1F] rounded-xl shadow-lg p-6 border border-[#2d2d2d]">

      <h2 className="text-2xl font-bold text-yellow-400 mb-1">
        Revenue Overview
      </h2>

      <p className="text-gray-400 mb-6">
        Monthly Revenue Report
      </p>

      <div className="w-full h-[380px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid
              stroke="#333"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="month"
              stroke="#9CA3AF"
            />

            <YAxis
              stroke="#9CA3AF"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#EAB308"
              strokeWidth={3}
              dot={{
                r: 5,
                fill: "#EAB308",
              }}
              activeDot={{
                r: 8,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default RevenueChart;