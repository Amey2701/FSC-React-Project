import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  mobile: "",
  otpSent: false,
  otpVerified: false,
  name: "",
  nameEntered: false,
  loggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openModal: (state) => { state.showModal = true; },
    closeModal: (state) => { state.showModal = false; },

    setName: (state, action) => {
      state.name = action.payload;
    },

    setMobile: (state, action) => {
      state.mobile = action.payload;
    },

    sendOtp: (state) => {
      if (state.name !== "") {
        state.nameEntered = true;
      }
      if (state.mobile.length === 10) {
        state.otpSent = true;
      }
    },

    verifyOtp: (state) => {
      state.otpVerified = true;
      state.loggedIn = true;
    },

    logout: (state) => {
      state.loggedIn = false;
      state.mobile = "";
      state.otpSent = false;
      state.otpVerified = false;
      state.name = "";
      state.nameEntered = false;
    },
  },
});

export const {
  openModal,
  closeModal,
  setMobile,
  setName,
  sendOtp,
  verifyOtp,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
