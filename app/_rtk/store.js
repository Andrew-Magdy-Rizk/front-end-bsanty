import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authReducers";
import productSlice from "./slices/productReducers";
import categorySlice from "./slices/categoryReducers";
const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
    categories: categorySlice,
  },
});

export default store;
