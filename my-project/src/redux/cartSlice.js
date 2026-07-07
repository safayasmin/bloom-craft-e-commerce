
import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  cart: savedCart,
};

const save = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
      save(state.cart);
    },

    addToCart: (state, action) => {
      const exists = state.cart.find(
        (item) => item.productId === action.payload.productId
      );

      if (exists) {
        exists.quantity += 1;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }

      save(state.cart);
    },

   removeFromCart: (state, action) => {
  state.cart = state.cart.filter(
    (item) => item.id !== action.payload
  );

  save(state.cart);
},

    increaseQuantity: (state, action) => {
      const item = state.cart.find(
        (item) => item.productId === action.payload
      );

      if (item) item.quantity += 1;

      save(state.cart);
    },

    decreaseQuantity: (state, action) => {
      const item = state.cart.find(
        (item) => item.productId === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      save(state.cart);
    },

    clearCart: (state) => {
      state.cart = [];
      save([]);
    },
  },
});

export const {
  setCart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;



