import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [] },
  reducers: {
    addCartItem: (state, action) => {
      const { payload } = action;
      if (!Array.isArray(state.cartItems)) {
        state.cartItems = [];
      }
      state.cartItems.push(payload);
    },
    removeCartItem: (state, action) => {
      const { payload } = action;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addCartItem, removeCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
