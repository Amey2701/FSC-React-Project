import React from "react";
import "./BikeHero.css";

const BikeHero = () => {
  return (
    <section className="hero-section bike-hero">
      {/* LEFT CONTENT */}
      <div className="hero-left">
        <h1>Bike Insurance</h1>

        <h2>
          Up to <span className="highlight">93% off</span> on two-wheeler policies<sup>¹</sup>
        </h2>

        {/* FEATURES */}
        <div className="hero-features horizontal-features">
          <div className="feature-item">
            <span>AI-backed claims for quick processing</span>
            <span>Personal Accident cover</span>
          </div>
        </div>

        {/* Bike Illustration */}
        <img
          src="https://www.icicilombard.com/docs/default-source/assets/marketing/images/check-bike-img.png"
          alt="Bike Insurance Illustration"
          className="bike-hero-img"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="hero-form-card">
        <input
          type="text"
          placeholder="Vehicle registration number"
          className="input-field"
        />

        <div className="link-row bike-links">
          <a href="#">Got a new vehicle</a>
          <a href="#">What is this?</a>
        </div>

        <input
          type="text"
          placeholder="Mobile number"
          className="input-field"
        />

        <input
          type="email"
          placeholder="Email"
          className="input-field"
        />

        <button className="btn-get-quote">Get quote</button>

        <div className="link-row retrieve-link">
          <a href="#">Retrieve quote</a>
        </div>

        <div className="checkbox-group">
          <input type="checkbox" />
          <span>
            I agree to the <a href="#">terms and conditions</a>
          </span>
        </div>

        <div className="checkbox-group">
          <input type="checkbox" defaultChecked />
          <span>I want to receive updates on WhatsApp</span>
        </div>
      </div>
    </section>
  );
};

export default BikeHero;
