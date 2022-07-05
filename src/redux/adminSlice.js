import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {},
  reducers: {
    storeAdminInfo(state, action) {
      if (action.payload.adminInfo.accesToken) {
        state.token = action.payload.adminInfo.accesToken;
        state.admin = action.payload.adminInfo.admin;
      } else {
        return state;
      }
    },
    logout(state) {
      state.token = null;
      state.admin = null;
    },
  },
});

export const { storeAdminInfo, logout } = adminSlice.actions;
export default adminSlice.reducer;
