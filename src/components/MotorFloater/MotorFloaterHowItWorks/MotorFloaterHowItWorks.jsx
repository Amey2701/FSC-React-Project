/**
 * MotorFloaterHowItWorks
 * ---------------------
 * Explains how Motor Floater policy works
 * Displayed as arrow-point bullet list
 */

import React from "react";
import "./MotorFloaterHowItWorks.css";

const MotorFloaterHowItWorks = () => {
  return (
    <section className="motor-howitworks">

      {/* Section Heading */}
      <h2>How does it work?</h2>

      {/* Bullet Points */}
      <ul className="howitworks-list">
        <li>
          The total premium is calculated by applying the appropriate rate
          against the individual Sum Insured.
        </li>

        <li>
          With every claim, the total Sum Insured of the policy reduces.
        </li>

        <li>
          Total SI is the sum of all individual vehicle IDVs.
        </li>

        <li>
          The sub-limit of each insured vehicle depends on individual IDV.
        </li>

        <li>
          The policy start date for vehicles is defined separately, as per
          the expiry of existing OD cover.
        </li>

        <li>
          Midterm inclusion of vehicles can be done by paying a pro-rata
          premium for that individual vehicle.
        </li>
      </ul>

    </section>
  );
};

export default MotorFloaterHowItWorks;
