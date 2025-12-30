import React, { useState } from "react";
import "./MotorHero.css";
import { submitMotorLead } from "../../../services/leadService";

const MotorHero = () => {
  const [activeTab, setActiveTab] = useState("car");
  const [isNewVehicle, setIsNewVehicle] = useState(false);

  const [form, setForm] = useState({
    regNo: "",
    mobile: "",
    email: "",
    termsAccepted: true,
    whatsappUpdates: true
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
      await submitMotorLead({
        ...form,
        insuranceType: activeTab,
        newVehicle: isNewVehicle,
        source: "motor-hero",
        createdAt: new Date().toISOString()
      });
      alert("Motor insurance lead submitted");
    } catch (err) {
      console.error(err);
      alert("Submission failed");
    }
  };

  return (
    <section className="motor-hero" id="motor-hero">
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
                name="regNo"
                placeholder="Vehicle registration number*"
                value={form.regNo}
                onChange={handleChange}
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
                name="mobile"
                placeholder="Mobile number*"
                value={form.mobile}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={form.email}
                onChange={handleChange}
              />

              {/* CHECKBOXES */}
              <div className="checkbox-wrapper">
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={form.termsAccepted}
                    onChange={handleChange}
                  />
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
                  <input
                    type="checkbox"
                    name="whatsappUpdates"
                    checked={form.whatsappUpdates}
                    onChange={handleChange}
                  />
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

              <button className="get-quote-btn" onClick={handleSubmit}>
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
