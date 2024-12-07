import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
  allBestSellerAndFeatureProducts: [],
  productDetails: null,
  isTypeChange: "2"
};

export const fetchAllFilteredProducts = createAsyncThunk(
  "/products/fetchAllProducts",
  async ({ filterParams, sortParams, type }) => {

    const query = new URLSearchParams({
      ...filterParams,
      sortBy: sortParams,
      type
    });

    const result = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/shop/products/get?${query}`
    );

    return result?.data;
  }
);

export const fetchAllBestSellerAndFeatureProducts = createAsyncThunk(
  "/products/fetchAllBestSellerAndFeatureProducts",
  async () => {
    const result = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/shop/products/seller-feature`
    );

    return result?.data;
  }
)

export const fetchProductDetails = createAsyncThunk(
  "/products/fetchProductDetails",
  async (id) => {
    const result = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/shop/products/get/${id}`
    );

    return result?.data;
  }
);

const shoppingProductSlice = createSlice({
  name: "shoppingProducts",
  initialState,
  reducers: {
    // setProductDetails: (state) => {
    //   state.productDetails = null;
    // },
    setIsTypeChange: (state, action) => {
      state.isTypeChange = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilteredProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload.data;
      })
      .addCase(fetchAllFilteredProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.productList = [];
      })
      .addCase(fetchProductDetails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetails = action.payload.data;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.productDetails = null;
      })
      .addCase(fetchAllBestSellerAndFeatureProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAllBestSellerAndFeatureProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allBestSellerAndFeatureProducts = action.payload.data;
      })
      .addCase(fetchAllBestSellerAndFeatureProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.allBestSellerAndFeatureProducts = null;
      });
  },
});

export const { setProductDetails, setIsTypeChange } = shoppingProductSlice.actions;

export default shoppingProductSlice.reducer;
