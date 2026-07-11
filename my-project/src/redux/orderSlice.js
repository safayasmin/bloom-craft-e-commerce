import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "orders",

  initialState,

  reducers: {
    // Set Orders
    setOrders: (state, action) => {
      state.orders = action.payload;
    },

    // Add Order
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },

    // Update Order (Status Change)
    updateOrder: (state, action) => {
      state.orders = state.orders.map((item) =>
        item.id === action.payload.id
          ? action.payload
          : item
      );
    },

    // Delete Order (Optional)
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  setOrders,
  addOrder,
  updateOrder,
  deleteOrder,
} = orderSlice.actions;

export default orderSlice.reducer;