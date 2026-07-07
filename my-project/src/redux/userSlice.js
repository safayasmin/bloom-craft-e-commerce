import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },

   blockUser: (state, action) => {
  state.users = state.users.map((user) =>
    user.id === action.payload
      ? {
          ...user,
          isBlocked: !user.isBlocked,
        }
      : user
  );
},

  },
});

export const { setUsers, blockUser } = userSlice.actions;

export default userSlice.reducer;