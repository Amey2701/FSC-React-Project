import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      {/* LEFT CONTENT */}
      <div className="hero-left">
        <h1>Car insurance</h1>
        <h2>Prices starting at just ₹2,094/yr*</h2>
        <p className="subtext">This amount refers to the TP rates only</p>

        <div className="hero-features">
          <div className="feature-item">
            🛠️ Doorstep Cashless Repairs™
            <span className="new-tag">NEW</span>
          </div>
          <div className="feature-item">
            🤕 ₹15 lakh Personal Accident Cover
          </div>
          <div className="feature-item">
            🏷️ Upto 50% off with NCB
          </div>
        </div>

        {/* Floating Person Image */}
        <img
          src="https://www.icicilombard.com/docs/default-source/apps/fwfresh/fw-landing/images/widget-men-vector.png"
          alt="Happy Customer"
          className="hero-img"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="hero-form-card">
        <label>Vehicle registration number</label>
        <input
          type="text"
          placeholder="E.g. MH01A1234"
          className="input-field"
        />

        <div className="link-row">
          <a href="#">Got a new vehicle</a> •{" "}
          <a href="#">What is reg. no.</a>
        </div>

        <input
          type="text"
          placeholder="Mobile number"
          className="input-field"
        />
        <input
          type="text"
          placeholder="Email"
          className="input-field"
        />

        <button className="btn-get-quote">
          Get quote
        </button>

        <div className="checkbox-group">
          <input type="checkbox" />
          <span>I agree to the terms and conditions</span>
        </div>

        <div className="checkbox-group">
          <input type="checkbox" />
          <span>I want to receive updates on WhatsApp</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;