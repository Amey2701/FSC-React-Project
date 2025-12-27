import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [regNo, setRegNo] = useState("");

  return (
    <section className="hero-section">
      {/* LEFT CONTENT */}
      <div className="hero-left">
        <h1>Car insurance</h1>
        <h2>Prices starting at just ₹2,094/yr*</h2>
        <p className="subtext">This amount refers to the TP rates only</p>

        {/* FEATURES */}
        <div className="hero-features">
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <img
                src="https://www.icicilombard.com/docs/default-source/apps/fwfresh/fw-landing/images/doorstep-cashless.svg"
                alt="Doorstep Cashless Repairs"
              />
            </div>
            <div className="feature-text">
              Doorstep Cashless Repairs
              <span className="new-badge">NEW</span>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <img
                src="https://www.icicilombard.com/docs/default-source/apps/fwfresh/fw-landing/images/personal-accident-cover.svg"
                alt="Personal Accident Cover"
              />
            </div>
            <div className="feature-text">
              ₹15 lakh Personal Accident<br/> Cover
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <img
                src="https://www.icicilombard.com/docs/default-source/apps/fwfresh/fw-landing/images/ncb.svg"
                alt="NCB Discount"
              />
            </div>
            <div className="feature-text">
              Upto 50% off with NCB
            </div>
          </div>
        </div>

        {/* Floating Image */}
        <img
          src="https://www.icicilombard.com/docs/default-source/apps/fwfresh/fw-landing/images/widget-men-vector.png"
          alt="Happy Customer"
          className="hero-img"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="hero-form-wrapper">
        <div className="hero-form-card">
          <div className={`floating-field ${regNo ? "filled" : ""}`}>
            <input
              type="text"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              required
            />
            <label>Vehicle registration number</label>
          </div>

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

          <button className="btn-get-quote">Get quote</button>

          <div className="checkbox-group">
            <input type="checkbox" />
            <span>
              I agree to the <u>terms and conditions</u>
            </span>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" />
            <span>I want to receive updates on WhatsApp</span>
          </div>
        </div>

        <div className="renew-policy">
          <a
            href="https://www.icicilombard.com/motor-insurance/car-insurance/renewal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Renew your ICICI Lombard policy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
