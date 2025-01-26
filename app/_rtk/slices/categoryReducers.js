import {
  deleteCategoryApi,
  getCategoriesApi,
} from "@/app/_axios/api/categories";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const categoryThunk = createAsyncThunk(
  "category/categoryThunk",
  async (data, thunk) => {
    const { rejectWithValue } = thunk;
    try {
      data ? data : (data = { limit: 10, page: 1 });
      const res = await getCategoriesApi(data.limit, data.page);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteCategoryThunk = createAsyncThunk(
  "category/DeleteCategoryThunk",
  async (data, thunk) => {
    const { rejectWithValue } = thunk;
    try {
      const res = await deleteCategoryApi(data.id, data.token);
      console.log(res);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const categorySlice = createSlice({
  initialState: {
    category: {},
    categories: [],
    loading: false,
    error: "",
  },
  name: "category",
  reducers: {
    getCategoryById: (state, action) => {
      state.category = action.payload;
    },
    getCategories: (state, action) => {
      state.categories = [...state.categories, action.payload.data];
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category._id !== action.payload.id
      );
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  //
  extraReducers: (builder) => {
    // add
    builder.addCase(categoryThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(categoryThunk.fulfilled, (state, action) => {
      state.categories = action.payload.data;
      state.loading = false;
    });
    builder.addCase(categoryThunk.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    // delete
    builder.addCase(deleteCategoryThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteCategoryThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = state.categories.filter(
        (category) => category._id !== action.payload.id
      );
    });
    builder.addCase(deleteCategoryThunk.rejected, (state, action) => {
      state.error = action.payload.response.data;
      state.loading = false;
    });
  },
});

export const { getCategoryById, getCategories, deleteCategory, clearError } =
  categorySlice.actions;
export default categorySlice.reducer;
