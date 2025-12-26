import React from "react";
import "./WhatIsBikeInsurance.css";

const WhatIsBikeInsurance = () => {
  return (
    <section className="bike-info-section">
      <div className="bike-info-wrapper">
        {/* LEFT TEXT */}
        <div className="bike-info-text">
          <h2>What is bike insurance?</h2>

          <p>
            Bike insurance is your safety shield on the road. This motor insurance
            policy covers your two-wheeler against damages or losses caused by
            accidents, natural or man-made calamities, theft and more. It also
            protects you against third-party liabilities.
          </p>

          <p>
            Beyond protection, bike insurance is a legal requirement. All bike
            owners in India are required to have at least third-party coverage as
            per the Motor Vehicles Act, 1988. With the right bike insurance, you can
            enjoy complete protection and peace of mind on every ride.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="bike-info-image">
          <img
            src="https://www.icicilombard.com/docs/default-source/apps/fwfresh/fw-landing/images/bike-insurance-illustration.svg"
            alt="Bike Insurance Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIsBikeInsurance;
