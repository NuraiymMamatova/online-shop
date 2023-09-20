import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
