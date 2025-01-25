import { loginApi, signupApi } from "@/app/_axios/api/auth";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const actRegister = createAsyncThunk(
  "auth/actRegister",
  async (data, thunk) => {
    const { rejectWithValue } = thunk;
    try {
      const res = await signupApi(data);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const actLogin = createAsyncThunk(
  "auth/actLogin",
  async (data, thunk) => {
    const { rejectWithValue } = thunk;
    try {
      const res = await loginApi(data);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const authSlice = createSlice({
  initialState: {
    user: null,
    token: null,
    error: null,
    loading: false,
  },
  name: "auth",
  reducers: {
    loginReducer: (state, action) => {
      Cookies.set("auth", JSON.stringify(action.payload), { expires: 7 });
      state.user = action.payload.data;
      state.token = action.payload.token;
    },
    logoutReducer: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove("auth");
    },
    clearError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    // Register
    builder.addCase(actRegister.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(actRegister.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(actRegister.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.response?.data;
    });

    // Login
    builder.addCase(actLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(actLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.data.data;
      state.token = action.payload.data.token;
      Cookies.set("auth", JSON.stringify(action.payload.data), { expires: 7 });
    });
    builder.addCase(actLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.response?.data;
    });
  },
});

export const { loginReducer, logoutReducer, clearError } = authSlice.actions;
export default authSlice.reducer;
