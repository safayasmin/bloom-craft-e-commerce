// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice";
// import wishlistReducer from "./wishlistSlice";

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     wishlist: wishlistReducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";
import productReducer from "./productSlice";
import orderReducer from "./orderSlice";
import userReducer from "./userSlice";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,

    products: productReducer,
    orders: orderReducer,
    users: userReducer,
  },
});