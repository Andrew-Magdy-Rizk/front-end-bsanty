import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authReducers";
import productSlice from "./slices/productReducers";
const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
  },
});

export default store;
