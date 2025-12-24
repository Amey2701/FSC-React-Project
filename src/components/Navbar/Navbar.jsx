import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal, logout } from "../../features/auth/authSlice";
import "./Navbar.css";

const Navbar = ({ variant = "default" }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const location = useLocation();

  const [showMotorMenu, setShowMotorMenu] = useState(false);
  const closeTimer = useRef(null);

  const isMotorRoute =
    location.pathname.startsWith("/car-insurance") ||
    location.pathname.startsWith("/bike-insurance") ||
    location.pathname.startsWith("/motor-insurance") ||
    location.pathname.startsWith("/motor-floater");

  const openMenu = () => {
    clearTimeout(closeTimer.current);
    setShowMotorMenu(true);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => {
      setShowMotorMenu(false);
    }, 120);
  };

  return (
    <nav className={`navbar navbar-${variant}`}>
      {/* ================= TOP BAR ================= */}
      <div className="nav-top">
        <div className="nav-left-sm">
          <span>Call Back</span>
          <span className="dot">•</span>
          <span className="live-dot"></span>
          <span>Live Chat</span>
        </div>

        <div className="nav-right-sm">
          <span>Help</span>
          <span>Info Centre</span>
          <span>Investor Relations</span>

          <button className="btn-advisor">Become an advisor</button>

          {!auth.loggedIn && (
            <button className="btn-login" onClick={() => dispatch(openModal())}>
              Login
            </button>
          )}

          {auth.loggedIn && (
            <div className="user-panel">
              <span>Hello, {auth.name}</span>
              <button className="btn-login" onClick={() => dispatch(logout())}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="nav-main">
        <div className="nav-logo">
          <img
            src="https://www.icicilombard.com/docs/default-source/assets/home-revamp/images/il-logo.png"
            alt="ICICI Lombard"
          />
        </div>

        <ul className="nav-menu">
          {/* MOTOR INSURANCE */}
          <li
            className="nav-parent"
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
          >
            Motor Insurance ▾

            {(showMotorMenu || isMotorRoute) && (
              <div
                className="motor-megamenu"
                onMouseEnter={openMenu}
                onMouseLeave={closeMenu}
              >
                <div className="motor-item">
                  <img src="/icons/car.svg" alt="" />
                  <div>
                    <Link to="/car-insurance">Car Insurance</Link>
                    <p>Custom cover for your car</p>
                  </div>
                </div>

                <div className="motor-item">
                  <img src="/icons/bike.svg" alt="" />
                  <div>
                    <Link to="/bike-insurance">Bike Insurance</Link>
                    <p>Custom cover for two wheelers</p>
                  </div>
                </div>

                <div className="motor-item">
                  <img src="/icons/motor.svg" alt="" />
                  <div>
                    <Link to="/motor-insurance">Motor Insurance</Link>
                    <p>Reliable protection for your vehicle</p>
                  </div>
                </div>

                <div className="motor-item">
                  <img src="/icons/floater.svg" alt="" />
                  <div>
                    <Link to="/motor-floater">Motor Floater</Link>
                    <p>Multiple vehicles under one policy</p>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li>Health Insurance ▾</li>
          <li>Travel Insurance ▾</li>
          <li>SME Insurance ▾</li>
          <li>Corporate Insurance ▾</li>
          <li>Other Insurance ▾</li>
          <li>Renewals ▾</li>
          <li>Claims ▾</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
