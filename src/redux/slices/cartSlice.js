import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCartItem: (state, action) => {
      const { type, payload } = action;
      return [...state, payload];
    },
    removeCartItem: (state, action) => {
      const { type, payload } = action;
      return state.filter((item) => item.id !== payload.id);
    },
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
