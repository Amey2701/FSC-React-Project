import React from "react";
import "./VehicleInsuranceInfo.css";

/*
  VehicleInsuranceInfo Component
  ------------------------------
  1. About vehicle insurance section
  2. Types of vehicle insurance coverage in India
*/

const VehicleInsuranceInfo = () => {
  return (
    <section className="vehicle-info">
      <div className="vehicle-info-inner">

        {/* ================= ABOUT VEHICLE INSURANCE ================= */}
        <div className="about-section">

          {/* LEFT CONTENT */}
          <div className="about-left">
            <h2>About vehicle insurance</h2>

            <p>
              Vehicle insurance or motor insurance is meant for cars, two wheelers
              and other road vehicles. A motor package policy protects the insured
              vehicle against the damages caused due to accidents and natural disasters.
            </p>

            <p>
              In addition to the own vehicle damage, motor vehicle insurance also
              provides the mandatory coverage for third-party liabilities.
            </p>

            <p>
              Simply put, a comprehensive vehicle insurance allows for worry-free
              drives by curbing your vehicle repair expenses and helping you adhere
              to the law when on road.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="about-right">
            <img
              src="https://www.icicilombard.com/docs/default-source/assets/motor/about-vehicle-insurance.png"
              alt="Vehicle insurance illustration"
            />
          </div>
        </div>

        {/* ================= TYPES OF INSURANCE ================= */}
        <h2 className="types-heading">
          Types of vehicle insurance coverage in India
        </h2>

        <div className="types-grid">

          {/* CARD 1 */}
          <div className="type-card">
            <div className="icon-circle">
              <img
                src="https://www.icicilombard.com/docs/default-source/assets/motor/comprehensive-icon.png"
                alt="Comprehensive motor insurance"
              />
            </div>

            <h3>Comprehensive motor insurance</h3>

            <p>
              A comprehensive vehicle insurance policy provides coverage against the third-party legal liabilities as well as the losses or damages to the insured vehicle during an accident or mishap. 
              It covers the vehicle against natural and man-made disasters, including road accidents, fire, theft, earthquake, storm, flood etc.
            </p>

            <p className="recommend blue">
              <b>Recommended for: Vehicle owners who want all-round
              protection for their vehicle.</b>
            </p>
          </div>

          {/* CARD 2 */}
          <div className="type-card">
            <div className="icon-circle">
              <img
                src="https://www.icicilombard.com/docs/default-source/assets/motor/standalone-od-icon.png"
                alt="Standalone OD cover"
              />
            </div>

            <h3>Standalone OD cover</h3>

            <p>
              Introduced by the IRDAI, the standalone Own Damage (OD) cover policies allow the vehicle owners to get coverage against the losses or damages caused to their vehicle due to natural or man-made disasters. 
              This type of policy can be purchased by those who already have a third-party cover from a different or the same insurer.
            </p>

            <p className="recommend blue">
              <b>Recommended for: Vehicle owners who already have a third-party cover and want to add protection for their vehicle against damages and losses.</b> 
            </p>
          </div>

          {/* CARD 3 */}
          <div className="type-card">
            <div className="icon-circle">
              <img
                src="https://www.icicilombard.com/docs/default-source/assets/motor/third-party-icon.png"
                alt="Third-party motor insurance"
              />
            </div>

            <h3>Third-party motor insurance</h3>

            <p>
              Third-party motor insurance is mandatory in India as per the law. 
              It protects the policyholder against legal liabilities arising due to an accident involving his/her vehicle. 
              It means that in case an insured vehicle causes bodily injuries, death or property damage to a third-party, the insurer will take care of the legal liability.
            </p>

            <p className="recommend blue">
              <b>Recommended for: As this doesn’t cover the vehicle itself, only third party cover is not recommended for any vehicle. Even if you hardly take your vehicle out on the road, there’s still risk of theft and parking damages. 
              If you choose this type of policy, you’ll have to pay for any damages to your vehicle yourself.</b>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VehicleInsuranceInfo;
