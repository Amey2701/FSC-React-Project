import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobile: "",
  otpSent: false,
  otpVerified: false,
  userName: "",
  showModal: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openModal(state) {
      state.showModal = true;
    },
    closeModal(state) {
      state.showModal = false;
    },

    setMobile(state, action) {
      state.mobile = action.payload;
    },

    sendOtp(state) {
      if (state.mobile.length === 10) {
        state.otpSent = true;
      }
    },

    verifyOtp(state) {
      state.otpVerified = true;
      state.userName = "Amey";
    },
  },
});

export const {
  openModal,
  closeModal,
  setMobile,
  sendOtp,
  verifyOtp,
} = authSlice.actions;

export default authSlice.reducer;
