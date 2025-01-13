import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authReducers";
const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;
