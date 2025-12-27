/**
 * MotorInsuranceFloater
 * ---------------------
 * Hero section for:
 * Single Owner Multiple Vehicle – Motor Insurance
 *
 * Source reference:
 * ICICI Lombard SOMV Motor Insurance page (HTML file)
 *
 * Responsibilities:
 * - Left content (heading + description)
 * - Right lead capture form
 * - No business logic (UI-only)
 */

import React from "react";
import "./MotorInsuranceFloater.css";

const MotorInsuranceFloater = () => {
  return (
    <section className="motor-floater">

      {/* ================= LEFT CONTENT ================= */}
      <div className="motor-floater-left">

        {/* Small tag line */}
        <p className="motor-floater-tag">
          ‘Single Owner Multiple Vehicle’
        </p>

        {/* Main heading */}
        <h1 className="motor-floater-title">
          Motor Insurance
        </h1>

        {/* Sub heading */}
        <p className="motor-floater-subtitle">
          Convenience of securing all <br />
          vehicles under single policy
        </p>

        {/* Info link */}
        <a href="#" className="motor-floater-link">
          To know more <span>click here</span>
        </a>
      </div>

      {/* ================= RIGHT FORM ================= */}
      <div className="motor-floater-right">
        <form className="motor-floater-form">

          {/* Full Name */}
          <div className="form-field">
            <label>
              Full name <span>*</span>
            </label>
            <input type="text" />
          </div>

          {/* Mobile Number */}
          <div className="form-field">
            <label>
              Mobile no <span>*</span>
            </label>
            <input type="tel" />
          </div>

          {/* Email */}
          <div className="form-field">
            <label>
              Email <span>*</span>
            </label>
            <input type="email" />
          </div>

          {/* Terms */}
          <div className="form-checkbox">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to the Terms and Conditions
            </label>
          </div>

          {/* CTA */}
          <button className="proceed-btn" type="button">
            Proceed
          </button>

        </form>
      </div>

    </section>
  );
};

export default MotorInsuranceFloater;
