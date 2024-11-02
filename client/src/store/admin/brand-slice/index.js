import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    brandList: [],
    categoryList:[],
    brands: null,
};


// get all sub menu
export const getAllSubMenu = createAsyncThunk(
    "/brand/all-sub-menu",
    async () => {
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/admin/sub-category/get-all-menu`
        );

        return response.data;
    }
);


export const getAllBrands = createAsyncThunk(
    "/brand/getAllBrands",
    async () => {
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/admin/brands/get`
        );

        return response.data;
    }
);


export const addBrand = createAsyncThunk(
    "/brand/addBrand",
    async (formData) => {
        const result = await axios.post(
            `${import.meta.env.VITE_API_URL}/api/admin/brands/add`,
            formData,
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        return result.data;
    }
);


// export const updateOrderStatus = createAsyncThunk(
//   "/order/updateOrderStatus",
//   async ({ id, orderStatus }) => {
//     const response = await axios.put(
//       `${import.meta.env.VITE_API_URL}/api/admin/orders/update/${id}`,
//       {
//         orderStatus,
//       }
//     );

//     return response.data;
//   }
// );

const adminBrandSlice = createSlice({
    name: "adminBrandSlice",
    initialState,
    reducers: {
        resetBrands: (state) => {
            state.brands = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllBrands.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllBrands.fulfilled, (state, action) => {
                state.isLoading = false;
                state.brandList = action.payload.data;
            })
            .addCase(getAllBrands.rejected, (state) => {
                state.isLoading = false;
                state.orderList = [];
            })

            .addCase(getAllSubMenu.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllSubMenu.fulfilled, (state, action) => {
                state.isLoading = false;
                state.categoryList = action.payload.data;
            })
            .addCase(getAllSubMenu.rejected, (state) => {
                state.isLoading = false;
                state.orderList = [];
            })


    },
});

export const { resetBrands } = adminBrandSlice.actions;

export default adminBrandSlice.reducer;
