import React, { useState } from "react";
import "./WhatIsCovered.css";

const WhatIsCovered = () => {
  const [activeTab, setActiveTab] = useState("inclusions");

  return (
    <section className="covered-section">
      <div className="covered-inner">

        {/* ================= HEADING ================= */}
        <h2 className="covered-title">
          What is covered by ICICI Lombard motor insurance?
        </h2>

        {/* ================= TABS ================= */}
        <div className="covered-tabs">
          <button
            className={activeTab === "inclusions" ? "active" : ""}
            onClick={() => setActiveTab("inclusions")}
          >
            Inclusions
          </button>

          <button
            className={activeTab === "exclusions" ? "active" : ""}
            onClick={() => setActiveTab("exclusions")}
          >
            Exclusions
          </button>
        </div>

        <div className="tab-divider"></div>

        {/* ================= INCLUSIONS ================= */}
        {activeTab === "inclusions" && (
          <div className="covered-content">

            <div className="covered-item">
              <span className="icon yes">✔</span>
              <div>
                <h4>Loss or damage due to natural disasters</h4>
                <p>
                  Any damage to your vehicle due to natural disasters such as
                  earthquakes, floods, cyclones and storms, landslides and
                  landslips, hailstorms, frosts etc. will be covered by us.
                </p>
              </div>
            </div>

            <div className="covered-item">
              <span className="icon yes">✔</span>
              <div>
                <h4>Personal accident cover</h4>
                <p>
                  <a href="https://www.icicilombard.com/health-insurance/personal-accident-insurance" target="_blank" rel="noreferrer">
                    A Personal Accident (PA) cover
                  </a>{" "}
                  of ₹15 lakh will be available for the registered owner-driver
                  of the insured vehicle and an optional PA cover of ₹2 lakh
                  will be available for co-passengers at extra premium.
                </p>
              </div>
            </div>

            <div className="covered-item">
              <span className="icon yes">✔</span>
              <div>
                <h4>Loss or damage against man-made disasters</h4>
                <p>
                  Losses or damages to your insured vehicle caused due to man-made
                  disasters including theft, fire, riot, strike, road accident,
                  terrorist activity and damage during transit by road, rail,
                  inland waterway, lift, elevator or air will be covered by us.
                </p>
              </div>
            </div>

            <div className="covered-item">
              <span className="icon yes">✔</span>
              <div>
                <h4>Third-party legal liability</h4>
                <p>
                  We provide protection against legal liabilities arising due to
                  an accident involving your vehicle, resulting in bodily
                  injuries, death, or property damage to a third party.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ================= EXCLUSIONS ================= */}
        {activeTab === "exclusions" && (
          <div className="covered-content">

            <div className="covered-item">
              <span className="icon no">✕</span>
              <p>Damage due to wear and tear and ageing of vehicle</p>
            </div>

            <div className="covered-item">
              <span className="icon no">✕</span>
              <p>Loss due to depreciation of the vehicle</p>
            </div>

            <div className="covered-item">
              <span className="icon no">✕</span>
              <p>Damage or loss while driving/riding without valid licence</p>
            </div>

            <div className="covered-item">
              <span className="icon no">✕</span>
              <p>
                Damage or loss while driving/riding under the influence of liquor
                or drugs
              </p>
            </div>

            <div className="covered-item">
              <span className="icon no">✕</span>
              <p>
                Damages caused when a vehicle is being used for a purpose it is
                not meant for
              </p>
            </div>

            <div className="covered-item">
              <span className="icon no">✕</span>
              <p>Mechanical or electrical breakdown</p>
            </div>

          </div>
        )}

        {/* ================= FOOTER ================= */}
        <div className="policy-docs">
          <span>Policy documents:</span>
          <a
            href="https://www.icicilombard.com/downloads"
            target="_blank"
            rel="noreferrer"
          >
            Downloads
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhatIsCovered;
