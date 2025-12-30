import React, { useState } from "react";
import "./BikeHero.css";
import { submitBikeLead } from "../../../services/leadService";

const BikeHero = () => {
  const [form, setForm] = useState({
    regNo: "",
    mobile: "",
    email: "",
    whatsappUpdates: true,
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
    if (!form.regNo || !form.mobile || !form.email) {
      alert("Please fill all required fields");
      return;
    }

    if (!form.termsAccepted) {
      alert("Please accept terms and conditions");
      return;
    }

    try {
      await submitBikeLead({
        ...form,
        createdAt: new Date().toISOString()
      });
      alert("Bike lead saved successfully");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="hero-section bike-hero">
      {/* LEFT CONTENT */}
      <div className="hero-left">
        <h1>Bike Insurance</h1>

        <h2>
          Up to <span className="highlight">93% off</span> on two-wheeler policies
          <sup>¹</sup>
        </h2>

        <div className="hero-features horizontal-features">
          <div className="feature-item">
            <span>AI-backed claims for quick processing</span>
            <span>Personal Accident cover</span>
          </div>
        </div>

        <img
          src="https://www.icicilombard.com/docs/default-source/assets/marketing/images/check-bike-img.png"
          alt="Bike Insurance"
          className="bike-hero-img"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="hero-form-card">
        <input
          type="text"
          name="regNo"
          placeholder="Vehicle registration number"
          className="input-field"
          value={form.regNo}
          onChange={handleChange}
        />

        <div className="link-row bike-links">
          <a href="#">Got a new vehicle</a>
          <a href="#">What is this?</a>
        </div>

        <input
          type="text"
          name="mobile"
          placeholder="Mobile number"
          className="input-field"
          value={form.mobile}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-field"
          value={form.email}
          onChange={handleChange}
        />

        <button className="btn-get-quote" onClick={handleSubmit}>
          Get quote
        </button>

        <div className="link-row retrieve-link">
          <a href="#">Retrieve quote</a>
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={form.termsAccepted}
            onChange={handleChange}
          />
          <span>
            I agree to the <a href="#">terms and conditions</a>
          </span>
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            name="whatsappUpdates"
            checked={form.whatsappUpdates}
            onChange={handleChange}
          />
          <span>I want to receive updates on WhatsApp</span>
        </div>
      </div>
    </section>
  );
};

export default BikeHero;
