import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isSidebarOpen: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = {
        ...action.payload,
        name: action.payload.name || "Default User", // Ensure name is set
      };
      localStorage.setItem("userInfo", JSON.stringify(state.user));
    },
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("userInfo");
    },
    setOpenSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setCredentials, logout, setOpenSidebar } = authSlice.actions;

export default authSlice.reducer;