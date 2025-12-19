import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  setMobile,
  sendOtp,
  verifyOtp,
  setName,
} from "../../features/auth/authSlice";

import "./LoginModal.css";

const LoginModal = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  if (!auth.showModal) return null;

  return (
    <div className="login-backdrop" onClick={() => dispatch(closeModal())}>
      <div className="login-box" onClick={(e) => e.stopPropagation()}>
        
        <button className="login-close" onClick={() => dispatch(closeModal())}>
          ✕
        </button>

        <h2>Sign In</h2>

        {!auth.nameEntered && (
          <>
            <input
              type="text"
              placeholder="Your Name"
              value={auth.name}
              onChange={(e) => dispatch(setName(e.target.value))}
              className="login-input"
            />

            <button
              className="login-btn"
              onClick={() => auth.name.trim() !== "" && dispatch(sendOtp("skip mobile"))}
            >
              Next
            </button>
          </>
        )}

        {auth.nameEntered && !auth.otpSent && (
          <>
            <input
              type="tel"
              maxLength="10"
              placeholder="Mobile Number"
              value={auth.mobile}
              onChange={(e) => dispatch(setMobile(e.target.value))}
              className="login-input"
            />
            <button
              className="login-btn"
              onClick={() => dispatch(sendOtp())}
            >
              Send OTP
            </button>
          </>
        )}

        {auth.otpSent && !auth.otpVerified && (
          <>
            <h3>OTP Sent to {auth.mobile}</h3>

            <button className="login-btn" onClick={() => dispatch(verifyOtp())}>
              Auto Verify OTP
            </button>
          </>
        )}

        {auth.otpVerified && (
          <>
            <h3>Welcome {auth.name}</h3>

            <button
              className="login-btn"
              onClick={() => dispatch(closeModal())}
            >
              Continue
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
