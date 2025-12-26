import React from "react";
import "./FactorsAndSavings.css";

const FactorsAndSavings = () => {
  return (
    <>
      {/* ===============================
          FACTORS AFFECTING PREMIUM
      =============================== */}
      <section className="factors-section">
        <div className="container ils factors-grid">
          <div className="factors-left">
            <h2>
              Factors affecting <br />
              two-wheeler insurance premium
            </h2>
          </div>

          <div className="factors-right">
            <p className="factors-intro">
              A host of factors affect two-wheeler insurance premiums, including:
            </p>

            <ul className="check-list">
              <li>
                <strong>Bike’s age and model</strong> – New bikes and high-end
                models have higher premiums
              </li>
              <li>
                <strong>Engine capacity</strong> – Bikes with high engine
                capacity command higher premiums
              </li>
              <li>
                <strong>Coverage type</strong> – Comprehensive insurance costs
                more than third-party insurance
              </li>
              <li>
                <strong>Add-ons chosen</strong> – More the number of add-ons, the
                higher the premium
              </li>
              <li>
                <strong>Security features</strong> – Higher security features
                lower the premium
              </li>
              <li>
                <strong>Location</strong> – Areas with higher traffic can lead
                to increased premiums
              </li>
              <li>
                <strong>Claim history</strong> – Frequent claims can lead to
                higher premiums
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===============================
          HOW TO SAVE ON PREMIUM
      =============================== */}
      <section className="savings-section">
        <div className="container ils savings-grid">
          <div className="savings-left">
            <h2>How to save on bike insurance premium?</h2>
            <p>
              There are several ways you can cut down on your bike insurance
              premiums. Some of them are:
            </p>
          </div>

          <div className="savings-right">
            <div className="saving-item">
              <h4>Claiming NCB benefit</h4>
              <p>
                Being a responsible driver reduces the chances of making a claim
                and availing of the benefits of{" "}
                <a
                  href="https://www.icicilombard.com/motor-insurance/two-wheeler-insurance/no-claim-bonus-in-bike-insurance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  No Claims Bonus (NCB) in bike insurance
                </a>
                . Use it to your advantage to save on premiums.
              </p>
            </div>

            <div className="saving-item">
              <h4>Installing safety devices</h4>
              <p>
                Installing safety devices reduces the risk of theft. They act as
                deterrents, ensuring better bike security and thus helping you
                lower premiums.
              </p>
            </div>

            <div className="saving-item">
              <h4>Compare plans</h4>
              <p>
                Comparing different bike insurance plans allows you to find the
                best coverage at an attractive price.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FactorsAndSavings;
