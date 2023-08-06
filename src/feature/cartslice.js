import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialState = {
  cart: items,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      let find = state.cart.find((item) => item.id === action.payload.id);
      if (find) {
        find.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    incrementQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      // localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
  },
});
export const { addTocart, incrementQty, decrementQty, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
