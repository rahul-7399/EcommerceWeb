import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/cartslice";
import productReducer from "../feature/productSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product:productReducer
  },
});
