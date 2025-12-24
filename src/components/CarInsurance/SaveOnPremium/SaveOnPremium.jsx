import React from "react";
import "./SaveOnPremium.css";

const SaveOnPremium = () => {
  return (
    <section className="save-premium-section">
      <div className="save-premium-container">
        {/* LEFT CONTENT */}
        <div className="save-premium-content">
          <h2>How can you save on your car insurance premium?</h2>

          <p className="intro">
            No matter what type of car you drive, certain discounts can bring
            down your car insurance price –
          </p>

          <div className="content-block">
            <h4>No Claim Bonus in Car Insurance</h4>
            <p>
              If you made no claims in the past years, you get up to 50% NCB.
            </p>
          </div>

          <div className="content-block">
            <h4>Security measures</h4>
            <p>
              If you’ve taken special measures to keep your car from getting
              stolen, you are eligible for a discount on your car insurance
              premium. Typically, you would receive a 2.5% discount for fitting
              an anti-theft device (approved by ARAI) on your car.
            </p>
          </div>

          <p className="note">
            It is unwise to reduce IDV to save on premium. In case of an
            accident, you would find yourself at a disadvantage. Instead, ride
            safe and take security measures to get discounts on car insurance.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="save-premium-image">
          <img
            src="https://www.icicilombard.com/docs/default-source/apps/fwfresh/fw-landing/images/il-save-car-premium.svg"
            alt="Save on car insurance premium"
          />
        </div>
      </div>
    </section>
  );
};

export default SaveOnPremium;
