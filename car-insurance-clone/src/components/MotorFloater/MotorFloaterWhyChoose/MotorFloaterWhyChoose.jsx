/**
 * MotorFloaterWhyChoose
 * --------------------
 * Displays benefits of choosing a Motor Floater policy
 * Uses official ICICI Lombard icons
 */

import React from "react";
import "./MotorFloaterWhyChoose.css";

const MotorFloaterWhyChoose = () => {
  return (
    <section className="motor-whychoose">

      {/* Section Heading */}
      <h2>Why should you choose a Motor Floater policy?</h2>

      {/* Benefits Grid */}
      <div className="whychoose-grid">

        {/* Card 1 */}
        <div className="whychoose-card">
          <img
            src="https://www.icicilombard.com/docs/default-source/assets/sandbox/images/coverage-option.png"
            alt="Single policy document"
          />
          <p>
            One set of insurance policy document to keep track of
          </p>
        </div>

        {/* Card 2 */}
        <div className="whychoose-card">
          <img
            src="https://www.icicilombard.com/docs/default-source/assets/sandbox/images/cal.png"
            alt="Single renewal date"
          />
          <p>
            Take the stress out of shopping for multiple policies each year
          </p>
        </div>

        {/* Card 3 */}
        <div className="whychoose-card">
          <img
            src="https://www.icicilombard.com/docs/default-source/assets/sandbox/images/savemon.png"
            alt="Pool vehicles"
          />
          <p>
            Pool family member’s vehicles in a single policy
          </p>
        </div>

        {/* Card 4 */}
        <div className="whychoose-card">
          <img
            src="https://www.icicilombard.com/docs/default-source/assets/sandbox/images/low-premium.png"
            alt="Individual IDV"
          />
          <p>
            Set individual sub-limits/IDV for each vehicle in the policy
          </p>
        </div>

      </div>
    </section>
  );
};

export default MotorFloaterWhyChoose;
