import { createSlice } from "@reduxjs/toolkit";
import { sneakersList } from "../../utils/productList";
import {
  addCartReducer,
  addFavoriteReducer,
  changeFilterReducer,
  changeSearchReducer,
  cleanCartReducer,
  removeCartReducer,
  removeFavoriteReducer,
  updateCartReducer,
} from "./productsReducers";

const initialState = {
  products: sneakersList,
  filter: "",
  search: "",
  cart: [],
  favorite: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeFilter: changeFilterReducer,
    changeSearch: changeSearchReducer,
    addCart: addCartReducer,
    updateCart: updateCartReducer,
    removeCart: removeCartReducer,
    cleanCart: cleanCartReducer,
    addFavorite: addFavoriteReducer,
    removeFavorite: removeFavoriteReducer,
  },
  extraReducers: (builder) => {},
});

export const {
  changeFilter,
  changeSearch,
  addCart,
  updateCart,
  removeCart,
  cleanCart,
  addFavorite,
  removeFavorite,
} = productSlice.actions;

export const selectProducts = (state) => state.products.products;
export const selectFilter = (state) => state.products.filter;
export const selectSearch = (state) => state.products.search;
export const selectCart = (state) => state.products.cart;
export const selectFavorite = (state) => state.products.favorite;

export default productSlice.reducer;
