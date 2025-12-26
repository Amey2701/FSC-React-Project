import React, { useState } from "react";
import "./MotorHero.css";

const MotorHero = () => {
  const [activeTab, setActiveTab] = useState("car");
  const [isNewVehicle, setIsNewVehicle] = useState(false);

  return (
    <section className="motor-hero">
      <div className="motor-hero-inner">

        {/* LEFT */}
        <div className="motor-hero-left">
          <h1>
            Vehicle insurance <br />
            that is right for you.
          </h1>

          <div className="motor-hero-features">
            <div className="feature-item">
              <span className="feature-icon">💼</span>
              <span>Affordable Premiums</span>
            </div>

            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span>Superfast Claims</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="motor-hero-right">
          <div className="quote-card">

            {/* TABS */}
            <div className="quote-tabs">
              <button
                className={activeTab === "car" ? "active" : ""}
                onClick={() => setActiveTab("car")}
              >
                Car Insurance
                <span>Starting from ₹2094*</span>
              </button>

              <button
                className={activeTab === "bike" ? "active" : ""}
                onClick={() => setActiveTab("bike")}
              >
                Bike Insurance
                <span>Starting from ₹538*</span>
              </button>
            </div>

            {/* FORM */}
            <div className="quote-form">
              <input
                type="text"
                placeholder="Vehicle registration number*"
              />

              <button
                type="button"
                className="new-vehicle-btn"
                onClick={() => setIsNewVehicle(!isNewVehicle)}
              >
                {isNewVehicle
                  ? "My vehicle is already registered"
                  : "Got a new vehicle"}
              </button>

              <input
                type="text"
                placeholder="Mobile number*"
              />

              <input
                type="email"
                placeholder="Email*"
              />

              {/* ✅ UPDATED CHECKBOX SECTION */}
              <div className="checkbox-wrapper">
                <label className="checkbox-item">
                  <input type="checkbox" defaultChecked />
                  <span>
                    I agree to the{" "}
                    <a
                      href="https://www.icicilombard.com/legal/privacy-policy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      terms and conditions
                    </a>
                  </span>
                </label>

                <label className="checkbox-item">
                  <input type="checkbox" defaultChecked />
                  <span className="whatsapp-text">
                    I want to receive updates on
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                    />
                    WhatsApp
                  </span>
                </label>
              </div>

              <button className="get-quote-btn">
                Get quote
              </button>

              <div className="quote-links">
                <a
                  href="https://www.icicilombard.com/manage-your-policy/search-quote1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Retrieve quote
                </a>
                <span>|</span>
                <a
                  href="https://www.icicilombard.com/motor-insurance/two-wheeler-insurance/renewal"
                  target="_blank"
                  rel="noreferrer"
                >
                  Renew your ICICI Lombard policy
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MotorHero;
