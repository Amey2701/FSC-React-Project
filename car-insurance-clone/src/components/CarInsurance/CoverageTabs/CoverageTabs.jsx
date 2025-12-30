import React, { useState } from "react";
import "./CoverageTabs.css";

const CoverageTabs = () => {
  const [activeTab, setActiveTab] = useState("inclusions");

  return (
    <section className="coverage-section">
      <h2>What does our car insurance policy cover and not cover?</h2>

      {/* Tabs */}
      <div className="coverage-tabs">
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

      <div className="coverage-divider"></div>

      {/* Inclusions */}
      {activeTab === "inclusions" && (
        <div className="coverage-content">
          <h4>What’s included:</h4>

          <div className="coverage-grid">
            <ul>
              <li>Coverage for natural disasters like earthquakes, floods, fires and storms</li>
              <li>Cashless repairs in 6900+ network garages</li>
              <li>Coverage for theft, accidents and terrorist activities</li>
              <li>No claim bonus up to 50%</li>
            </ul>

            <ul>
              <li>₹15 lakh Personal Accident Cover</li>
              <li>Multiple add-ons to choose from</li>
              <li>Third-party legal liabilities cover</li>
              <li>Instant claim settlement via InstaSpect</li>
            </ul>
          </div>
        </div>
      )}

      {/* Exclusions */}
      {activeTab === "exclusions" && (
        <div className="coverage-content">
          <h4>What’s not:</h4>

          <div className="coverage-grid">
            <ul className="exclude">
              <li>Car wear & tear and aging</li>
              <li>Damages while driving under the influence of drugs or liquor</li>
              <li>Any consequential loss</li>
            </ul>

            <ul className="exclude">
              <li>Mechanical or electrical breakdown</li>
              <li>Damages while driving without a valid license</li>
              <li>Loss/damage due to war, mutiny or nuclear risk</li>
            </ul>
          </div>
        </div>
      )}

      <div className="coverage-footer">
        <span>Policy documents:</span>
        <a
          href="https://drive.google.com/uc?export=download&id=1vrz4MtNPMDBqYeq7pcqORkq_82YpvUi7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Downloads
        </a>
      </div>
    </section>
  );
};

export default CoverageTabs;
