
// Perfect 👍. Nammal oru file vechu complete cheyyam. First Users.jsx. Ith search, statistics, block/unblock, pagination, premium theme ellam include cheyyunnu.
// Note: Ith work cheyyan db.json-il users array venam. Oro user-kkum id, name, email, role, status fields undayirikkanam.

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, updateUser } from "../../redux/userSlice";

const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 3;

  //Fetch Users
  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/users");
      dispatch(setUsers(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);


  //Block / Unblock
  const handleStatus = async (user) => {
    const updatedUser = {
      ...user,
      status: user.status === "active" ? "Blocked" : "active",
    };

    try {
      const res = await axios.put(
        `http://localhost:5000/users/${user.id}`,
         updatedUser
      );

      dispatch(updateUser(res.data));
    } catch (error) {
      console.log(error);
    }
  }; 

  // ---------------- Search ----------------

 const filteredUsers = users.filter((item) => {
  return (
    item.fullName.toLowerCase().includes(search.toLowerCase()) ||
    item.username.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase())
  );
});

  // ---------------- Pagination ----------------

  const lastIndex = currentPage * usersPerPage;

  const firstIndex = lastIndex - usersPerPage;

  const currentUsers = filteredUsers.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(
    filteredUsers.length / usersPerPage
  );

  // ---------------- Statistics ----------------

  const totalUsers = users.length;

  const admins = users.filter(
    (item) => item.role === "admin"
  ).length;

  const customers = users.filter(
    (item) => item.role === "user"
  ).length;

  const activeUsers = users.filter(
    (item) => item.status === "active"
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#222222] via-[#2d2823] to-[#3a3128] p-8">

      {/* Heading */}

      <h1 className="text-4xl font-bold text-[#d4af37]">
        Users
      </h1>

      <p className="text-gray-400 mt-2">
        Manage all registered users
      </p>

      {/* Cards */}

      <div className="grid grid-cols-4 gap-6 mt-8">

        <div className="bg-[#111] border border-[#d4af37]/20 rounded-2xl p-6">

          <p className="text-gray-400">
            Total Users
          </p>

          <h2 className="text-3xl text-[#d4af37] font-bold mt-2">
            {totalUsers}
          </h2>

        </div>

        <div className="bg-[#111] border border-[#d4af37]/20 rounded-2xl p-6">

          <p className="text-gray-400">
            Admins
          </p>

          <h2 className="text-3xl text-[#d4af37] font-bold mt-2">
            {admins}
          </h2>

        </div>

        <div className="bg-[#111] border border-[#d4af37]/20 rounded-2xl p-6">

          <p className="text-gray-400">
            Customers
          </p>

          <h2 className="text-3xl text-[#d4af37] font-bold mt-2">
            {customers}
          </h2>

        </div>

        <div className="bg-[#111] border border-[#d4af37]/20 rounded-2xl p-6">

          <p className="text-gray-400">
            Active
          </p>

          <h2 className="text-3xl text-green-500 font-bold mt-2">
            {activeUsers}
          </h2>

        </div>

      </div>

      {/* Search */}

      <input
        type="text"
        placeholder="Search Users..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        className="mt-8 w-80 bg-[#111] border border-[#d4af37]/30 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37]"
      />

      {/* Table */}

      <div className="bg-[#111] border border-[#d4af37]/20 rounded-2xl overflow-hidden shadow-xl mt-8">

        <table className="w-full text-center">

          <thead className="bg-black text-[#d4af37]">

            <tr>

              <th className="p-5">
                Name
              </th>

              <th className="p-5">
                Email
              </th>

              <th className="p-5">
                Role
              </th>

              <th className="p-5">
                Status
              </th>

              <th className="p-5">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {currentUsers.length === 0 ? (

              <tr>

                <td
                  colSpan="5"
                  className="text-gray-400 p-10"
                >
                  No Users Found
                </td>

              </tr>

            ) : (

              currentUsers.map((item) => (

                <tr
                  key={item.id}
                  className="border-b border-[#d4af37]/10 hover:bg-[#1b1611]"
                >

                  <td className="p-5 text-white">

                    <Link
                      to={`/admin/users/${item.id}`}
                      className="hover:text-[#d4af37]"
                    >
                         @{item.username}

                    </Link>

                  </td>

                  <td className="p-5 text-gray-300">
                    {item.email}
                  </td>

                  <td className="p-5 text-white capitalize">
                    {item.role}
                  </td>

                  <td
                    className={`p-5 font-semibold ${
                      item.status === "active"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.status}
                  </td>

                  <td className="p-5">
                    
                    <button
                      onClick={() => handleStatus(item)}
                      className={`px-5 py-2 rounded-lg font-semibold ${
                        item.status === "active"
                          ? "bg-red-700 hover:bg-red-800 text-white"
                          : "bg-green-700 hover:bg-green-800 text-white"
                      }`}
                    >
                      {item.status === "active"
                        ? "Block"
                        : "Unblock"}
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

      {/* Pagination */}

      <div className="flex justify-center mt-8 gap-3">

        {[...Array(totalPages)].map((_, index) => (

          <button
            key={index}
            onClick={() =>
              setCurrentPage(index + 1)
            }
            className={`px-4 py-2 rounded-lg border font-semibold transition ${
              currentPage === index + 1
                ? "bg-[#d4af37] text-black border-[#d4af37]"
                : "bg-[#1b1611] text-[#d4af37] border-[#d4af37]/40 hover:bg-[#2a2218]"
            }`}
          >
            {index + 1}
          </button>

        ))}

      </div>

    </div>
  );
};

export default Users;












