import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "../features/profile/profileSlice";
import productSlice from "../features/products/productsSlice";

export const store = configureStore({
  reducer: {
    profile: profileSlice,
    products: productSlice,
  },
});
