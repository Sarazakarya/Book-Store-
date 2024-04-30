import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
    name: "auth",
    initialState: { name: "sara", isLogin: false },
    reducers: {
        logOut: (state) => {
            state.isLogin = !state.isLogin;
        }
    },
})

export const { logOut } = authSlice.actions;
export default authSlice.reducer;

