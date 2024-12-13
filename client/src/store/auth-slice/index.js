import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
  userAllDetails: null,
  recoveryEmail: null,
};

export const registerUser = createAsyncThunk(
  "/auth/register",
  async (formData) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/register`,
      formData,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

export const forgetPasswordUser = createAsyncThunk(
  "/auth/forgot-password",

  async (formData) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/forgot-password`,
      formData,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

export const verifyUserOtp = createAsyncThunk(
  "/auth/verify-otp",

  async (formData) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/verify-otp`,
      formData,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

export const verifyEmail = createAsyncThunk(
  "/auth/verify-email",

  async (formData) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/verify-email`,
      formData,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

export const resetPasswordUser = createAsyncThunk(
  "/auth/reset-password",

  async (formData) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/reset-password`,
      formData,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

export const userDetails = createAsyncThunk(
  "/auth/user-all-details",
  async (id) => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/auth/user-details/${id}`,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

export const updateUserDetails = createAsyncThunk(
  "/auth/user-all-details",
  async (formData) => {
    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/api/auth/update-user/${formData?._id}`,
      formData,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);


export const loginUser = createAsyncThunk(
  "/auth/login",
  async (formData) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/login`,
      formData,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

export const logoutUser = createAsyncThunk(
  "/auth/logout",

  async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/logout`,
      {},
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

export const resendEmailOtp = createAsyncThunk(
  "/auth/resend-otp",
  async (formData) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/resend-otp`,
      formData,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

export const checkAuth = createAsyncThunk(
  "/auth/checkauth",

  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/auth/check-auth`,
      {
        withCredentials: true,
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      }
    );

    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => { },
    setRecoveryMail: (state, action) => {
      state.recoveryEmail = action.payload.email

    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.recoveryEmail=action.payload.email
        state.isAuthenticated = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(userDetails.fulfilled, (state, action) => {
        console.log("action", action)
        state.isLoading = false;
        state.userAllDetails = action.payload.success ? action.payload.data : null;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        // console.log(action);

        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user : null;
        state.isAuthenticated = action.payload.success;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user : null;
        state.isAuthenticated = action.payload.success;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      }).addCase(forgetPasswordUser.fulfilled, (state, action) => {
        // state.isLoading = false;
        // state.user = null;
        // state.isAuthenticated = false;
      }).addCase(verifyUserOtp.fulfilled, (state, action) => {
        // state.isLoading = false;
        // state.user = null;
        // state.isAuthenticated = false;
      }).addCase(resetPasswordUser.fulfilled, (state, action) => {
        // state.isLoading = false;
        // state.user = null;
        // state.isAuthenticated = false;
      }).addCase(verifyEmail.pending, (state, action) => {
        state.isLoading = true;
        state.user = null;
        state.isAuthenticated = false;
      }).addCase(verifyEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recoveryEmail=null
      }).addCase(verifyEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      }).addCase(resendEmailOtp.fulfilled, (state, action) => {
        state.isLoading = false;
      })
  },
});

export const { setUser, setRecoveryMail } = authSlice.actions;
export default authSlice.reducer;
