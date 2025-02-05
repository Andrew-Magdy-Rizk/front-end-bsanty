import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteProductApi,
  getProductsApi,
  getProductApi,
} from "@/app/_axios/api/products";
export const ProductsThunk = createAsyncThunk(
  "products/ProductsThunk",
  async (data, thunk) => {
    const { rejectWithValue } = thunk;
    try {
      data ? data : (data = { limit: 10, page: 1 });
      const res = await getProductsApi(data.limit, data.page);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const productThunk = createAsyncThunk(
  "products/productThunk",
  async (id, thunk) => {
    const { rejectWithValue } = thunk;
    try {
      const res = await getProductApi(id);

      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const productSlice = createSlice({
  initialState: {
    product: {},
    products: [],
    loading: false,
    error: "",
    pagination: {
      currentPage: 1,
      totalPages: 1,
    },
  },
  name: "products",
  reducers: {
    getProductById: (state, action) => {
      state.product = action.payload;
    },
    getProducts: (state, action) => {
      state.products = action.payload;
      state.pagination = action.payload.pagination;
    },
    getProduct: (state, action) => {
      state.product = action.payload;
    },
    deleteProduct: (state, action) => {
      deleteProductApi(action.payload.id, action.payload.token);
      state.products = state.products.filter(
        (product) => product._id !== action.payload.id
      );
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ProductsThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(ProductsThunk.fulfilled, (state, action) => {
      state.products = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
    });
    builder.addCase(ProductsThunk.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    builder.addCase(productThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(productThunk.fulfilled, (state, action) => {
      console.log(action.payload);
      state.product = action.payload.data;
      state.loading = false;
    });
    builder.addCase(productThunk.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const {
  getProductById,
  getProducts,
  getProduct,
  deleteProduct,
  clearError,
} = productSlice.actions;
export default productSlice.reducer;
