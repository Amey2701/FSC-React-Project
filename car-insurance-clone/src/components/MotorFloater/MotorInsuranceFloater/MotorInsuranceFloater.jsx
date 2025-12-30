/**
 * MotorInsuranceFloater
 * ---------------------
 * Hero section for:
 * Single Owner Multiple Vehicle – Motor Insurance
 *
 * Responsibilities:
 * - Left content (heading + description)
 * - Right lead capture form
 * - Minimal form handling + lead submission
 */

import React, { useState } from "react";
import "./MotorInsuranceFloater.css";
import { submitMotorLead } from "../../../services/leadService";

const MotorInsuranceFloater = () => {
  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async () => {
    if (!form.fullName || !form.mobile || !form.email) {
      alert("All fields are required");
      return;
    }

    if (!form.termsAccepted) {
      alert("Please accept the terms and conditions");
      return;
    }

    try {
      await submitMotorLead({
        ...form,
        source: "motor-floater",
        createdAt: new Date().toISOString()
      });
      alert("Motor Floater lead submitted successfully");
    } catch (err) {
      console.error(err);
      alert("Submission failed");
    }
  };

  return (
    <section className="motor-floater">

      {/* ================= LEFT CONTENT ================= */}
      <div className="motor-floater-left">
        <p className="motor-floater-tag">
          ‘Single Owner Multiple Vehicle’
        </p>

        <h1 className="motor-floater-title">
          Motor Insurance
        </h1>

        <p className="motor-floater-subtitle">
          Convenience of securing all <br />
          vehicles under single policy
        </p>

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
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
            />
          </div>

          {/* Mobile Number */}
          <div className="form-field">
            <label>
              Mobile no <span>*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="form-field">
            <label>
              Email <span>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          {/* Terms */}
          <div className="form-checkbox">
            <input
              type="checkbox"
              id="terms"
              name="termsAccepted"
              checked={form.termsAccepted}
              onChange={handleChange}
            />
            <label htmlFor="terms">
              I agree to the Terms and Conditions
            </label>
          </div>

          {/* CTA */}
          <button
            className="proceed-btn"
            type="button"
            onClick={handleSubmit}
          >
            Proceed
          </button>

        </form>
      </div>

    </section>
  );
};

export default MotorInsuranceFloater;
