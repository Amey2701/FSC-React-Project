import React from "react";
import "./WhatIsCovered.css";

const WhatIsCovered = () => {
  return (
    <section
      id="ilCoverage"
      className="section-content bg-lightgray pad-bottom"
    >
      <div className="container ils">
        <h2 className="covered-title">
          What is Covered by ICICI Lombard Two-wheeler Insurance Policy?
        </h2>

        <p className="covered-subtitle">
          ICICI Lombard’s two-wheeler insurance policy covers:
        </p>

        <div className="covered-grid">
          {/* ITEM 1 */}
          <div className="covered-item">
            <span className="check-icon">✔</span>
            <div className="covered-text">
              <h4>
                Loss or damage to your two wheeler due to natural disasters
              </h4>
              <p>
                Our two-wheeler insurance policy covers losses or damages
                suffered by your bike due to lightning, earthquakes,
                typhoons, frost, landslides, etc.
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="covered-item">
            <span className="check-icon">✔</span>
            <div className="covered-text">
              <h4>Personal accident cover</h4>
              <p>
                We offer a personal accident cover of Rs 15 lakh for the
                two-wheeler owner. You can also buy this cover for your
                co-passenger with an additional premium.
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="covered-item">
            <span className="check-icon">✔</span>
            <div className="covered-text">
              <h4>Third-party legal liability</h4>
              <p>
                Our two-wheeler insurance policy offers protection against
                third-party legal liability for accidents and damages caused
                by your bike to a third party.
              </p>
            </div>
          </div>
        </div>

        <p className="covered-note">
          This is an indicative list of inclusions and exclusions. For the
          full list, please refer to the policy wordings.
        </p>

        <hr className="covered-divider" />

        <div className="policy-docs">
          <span>Policy documents:</span>
          <a
            href="https://www.icicilombard.com/downloads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Downloads
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatIsCovered;
