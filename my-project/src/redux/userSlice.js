import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",

  initialState,

  reducers: {
    // Set all users
    setUsers: (state, action) => {
      state.users = action.payload;
    },

    // Add user
    addUser: (state, action) => {
      state.users.push(action.payload);
    },

    // Delete user
    deleteUser: (state, action) => {
      state.users = state.users.filter(
        (item) => item.id !== action.payload
      );
    },

    // Update user (Block / Unblock)
    updateUser: (state, action) => {
      state.users = state.users.map((item) =>
        item.id === action.payload.id
          ? action.payload
          : item
      );
    },
  },
});

export const {
  setUsers,
  addUser,
  deleteUser,
  updateUser,
} = userSlice.actions;

export default userSlice.reducer;