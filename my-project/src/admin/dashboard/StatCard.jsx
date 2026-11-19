import { useEffect, useState } from "react";
import axios from "axios";

const StatCard = ({ title, type, color }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        if (type === "products") {
          const res = await axios.get("http://localhost:5000/Products");
          setValue(res.data.length);
        } else if (type === "users") {
          const res = await axios.get("http://localhost:5000/users");
          setValue(res.data.length);
        } else if (type === "orders") {
          const res = await axios.get("http://localhost:5000/orders");
          setValue(res.data.length);
        } else if (type === "revenue") {
          const res = await axios.get("http://localhost:5000/orders");
          const totalRevenue = res.data.reduce((sum, order) => sum + (Number(order.total) || 0), 0);
          setValue(totalRevenue);
        }
      } catch (error) {
        console.error("Error loading stat data:", error);
      }
    };

    getData();
  }, [type]);

  return (
    <div className="bg-[#1F1F1F] rounded-xl p-6 shadow-lg border border-[#2e2e2e]">
      <h3 className="text-gray-400 text-lg">{title}</h3>

      <h2
        className="text-4xl font-bold mt-4"
        style={{ color }}
      >
        {type === "revenue" ? `₹${value}` : value}
      </h2>
    </div>
  );
};

export default StatCard;