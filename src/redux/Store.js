import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slices/CartSlice"; // Import the reducer, not the slice

export const store = configureStore({
  reducer: {
    cart: CartReducer, // Assign the reducer
  },
});
