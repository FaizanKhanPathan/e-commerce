import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  usersList: [],
  paymentList: []
};

export const getAdminUsers = createAsyncThunk(
  "/admin/users",
  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/admin/users/get`
    );

    return response.data;
  }
);

export const getAllPayments = createAsyncThunk(
  "/admin/payments",
  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/admin/payments/get`
    );

    return response.data;
  }
);


const adminCommonSlice = createSlice({
  name: "adminCommonSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdminUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdminUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.usersList = action.payload.data;
      })
      .addCase(getAdminUsers.rejected, (state) => {
        state.isLoading = false;
        state.usersList = [];
      })
      .addCase(getAllPayments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPayments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.paymentList = action.payload.data;
      })
      .addCase(getAllPayments.rejected, (state) => {
        state.isLoading = false;
        state.paymentList = [];
      });
  },
});

export default adminCommonSlice.reducer;
