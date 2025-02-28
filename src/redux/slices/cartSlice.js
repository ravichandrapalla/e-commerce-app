import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [] },
  reducers: {
    addCartItem: (state, action) => {
      const { type, payload } = action;

      if (!Array.isArray(state.cartItems)) {
        state.cartItems = [];
      }
      console.log("pushed item", action.payload);
      state.cartItems.push(action.payload);
      // console.log("payload", payload, "state", state);
      // return [...state, payload];
    },
    removeCartItem: (state, action) => {
      const { type, payload } = action;
      console.log("payload", payload, "state", state);
      return state.cartItems.filter((item) => item.id !== payload.id);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
