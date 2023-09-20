import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { toast } from "react-toastify";

const signUp = createAsyncThunk("auth/signUp", async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}auth/signUp`, data);
    localStorage.setItem("userData", JSON.stringify(response.data));
    toast.success("Вы успешно зарегистрировались!");
    return response.data;
  } catch (error) {
    toast.error(error.message);
    return error.message;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isAuthorized: false,
    data: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuthorized = true;
        if (typeof payload !== "string") {
          state.data = payload;
        }
      })
      .addCase(signUp.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export { authSlice, signUp };
