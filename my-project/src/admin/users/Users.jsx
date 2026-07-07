import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  setUsers,
  blockUser,
} from "../../redux/userSlice";

const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users);

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 5;

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

  const handleBlock = async (user) => {
    try {
      const updatedUser = {
        ...user,
        isBlocked: !user.isBlocked,
      };

      await axios.put(
        `http://localhost:5000/users/${user.id}`,
        updatedUser
      );

      dispatch(blockUser(user.id));

      toast.success(
        updatedUser.isBlocked
          ? "User Blocked"
          : "User Unblocked"
      );
    } catch (error) {
      console.log(error);
    }
  };

  const filteredUsers = users.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;

  const currentUsers = filteredUsers.slice(
    firstIndex,
    lastIndex
  );

  const totalPages = Math.ceil(
    filteredUsers.length / usersPerPage
  );

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-3xl font-bold">
            Users
          </h1>

          <p className="text-gray-500">
            Manage Registered Users
          </p>

        </div>

      </div>

      {/* Search */}

      <input
        type="text"
        placeholder="Search User..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        className="border rounded-lg p-3 w-80 mb-6"
      />

      {/* Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-black text-yellow-400">

            <tr>

              <th className="p-4">Name</th>

              <th>Email</th>

              <th>Phone</th>

              <th>Status</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {currentUsers.length === 0 ? (

              <tr>

                <td
                  colSpan="5"
                  className="text-center p-10"
                >
                  No Users Found
                </td>

              </tr>

            ) : (

              currentUsers.map((user) => (

                <tr
                  key={user.id}
                  className="border-b text-center"
                >

                  <td className="p-4">
                    {user.name}
                  </td>

                  <td>{user.email}</td>

                  <td>{user.phone}</td>

                  <td>

                    {user.isBlocked ? (

                      <span className="text-red-600 font-semibold">
                        Blocked
                      </span>

                    ) : (

                      <span className="text-green-600 font-semibold">
                        Active
                      </span>

                    )}

                  </td>

                  <td>

                    <button
                      onClick={() => handleBlock(user)}
                      className={`px-4 py-2 rounded text-white

                      ${
                        user.isBlocked
                          ? "bg-green-600"
                          : "bg-red-600"
                      }`}
                    >
                      {user.isBlocked
                        ? "Unblock"
                        : "Block"}
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
            className={`px-4 py-2 rounded

            ${
              currentPage === index + 1
                ? "bg-yellow-500"
                : "bg-gray-300"
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