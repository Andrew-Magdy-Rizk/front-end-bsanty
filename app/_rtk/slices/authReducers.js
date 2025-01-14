import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const actRegister = createAsyncThunk(
  "auth/actRegister",
  async (data, thunk) => {
    const { rejectWithValue } = thunk;
    try {
      const res = await authApis.register(data);
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
  },
  name: "auth",
  reducers: {
    loginReducer: (state, action) => {
      state.user = action.payload.data;
      state.token = action.payload.token;
    },
    logoutReducer: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actRegister.fulfilled, (state, action) => {
      state.user = action.payload.data;
      state.token = action.payload.token;
    });
    builder.addCase(actRegister.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { loginReducer, logoutReducer } = authSlice.actions;
export default authSlice.reducer;
