import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "./Slices/BookSlice";
import authSlice from "./Slices/authSlice";

export const store = configureStore({
    reducer: {
        book: BookSlice,
        auth: authSlice
    }
})