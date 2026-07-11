import React from "react";

const UserDetails = ({
  user,
  handleBlock,
  handleDelete,
}) => {
  return (
    <tr className="border-b border-[#d4af37]/10 hover:bg-[#1b1611] transition">

      {/* Name */}
      <td className="p-4 text-white font-medium">
        {user.name}
      </td>

      {/* Email */}
      <td className="p-4 text-gray-300">
        {user.email}
      </td>

      {/* Role */}
      <td className="p-4">

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold
          ${
            user.role === "admin"
              ? "bg-red-900/40 text-red-300 border border-red-700"
              : "bg-blue-900/40 text-blue-300 border border-blue-700"
          }`}
        >
          {user.role}
        </span>

      </td>

      {/* Status */}
      <td className="p-4">

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold
          ${
            user.status === "Active"
              ? "bg-green-900/40 text-green-300 border border-green-700"
              : "bg-red-900/40 text-red-300 border border-red-700"
          }`}
        >
          {user.status}
        </span>

      </td>

      {/* Actions */}
      <td className="p-4 flex gap-3">

        <button
          onClick={() => handleBlock(user)}
          className={`px-4 py-2 rounded-lg font-semibold transition
          ${
            user.status === "Active"
              ? "bg-red-800 hover:bg-red-700 text-white"
              : "bg-green-700 hover:bg-green-600 text-white"
          }`}
        >
          {user.status === "Active"
            ? "Block"
            : "Unblock"}
        </button>

        <button
          onClick={() => handleDelete(user.id)}
          className="bg-[#d4af37] hover:bg-[#b9912d] text-black px-4 py-2 rounded-lg font-semibold"
        >
          Delete
        </button>

      </td>

    </tr>
  );
};

export default UserDetails;