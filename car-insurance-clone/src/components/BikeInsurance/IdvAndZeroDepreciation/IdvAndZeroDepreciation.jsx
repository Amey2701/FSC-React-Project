import React from "react";
import "./IdvAndZeroDepreciation.css";

const IdvAndZeroDepreciation = () => {
  return (
    <>
      {/* ===============================
          IDV + CALCULATE (BEIGE)
      =============================== */}
      <section className="idv-section">
        <div className="container ils">

          {/* =========================
              IDV FACTORS
          ========================= */}
          <div className="idv-row">
            <div className="idv-image">
              <img
                src="https://www.icicilombard.com/docs/default-source/apps/fwfresh/fw-landing/images/bike-idv.png"
                alt="IDV illustration"
              />
            </div>

            <div className="idv-content">
              <h2>What impacts the insured’s declared value (IDV)?</h2>
              <p className="intro">
                Several factors impact the bike's IDV, including:
              </p>

              <ul className="check-list">
                <li>
                  <strong>Bike’s age:</strong> As your bike gets older, its value
                  depreciates. The older the bike, the lower its IDV.
                </li>
                <li>
                  <strong>Bike’s make and model:</strong> Premium bikes or models
                  with higher market demand usually have a higher IDV.
                </li>
                <li>
                  <strong>Depreciation:</strong> The bike’s value depreciates every
                  year based on standard depreciation rates.
                </li>
              </ul>
            </div>
          </div>

          {/* =========================
              CALCULATE PREMIUM
          ========================= */}
          <div className="calculate-row">
            <div className="calculate-left">
              <h2>How to calculate two-wheeler insurance premium online?</h2>
              <p>
                Thanks to online calculators, you can easily calculate premiums
                online. To calculate premiums:
              </p>
            </div>

            <div className="calculate-right">
              <div className="calc-step">
                <span>1</span>
                <p>
                  Enter necessary details like mobile number, email ID, bike
                  registration number, and registration year.
                </p>
              </div>

              <div className="calc-step">
                <span>2</span>
                <p>Choose the insurance policy you want to buy.</p>
              </div>

              <div className="calc-step">
                <span>3</span>
                <p>
                  Submit the details and instantly know the premium amount.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================
          ZERO DEPRECIATION – FULL WIDTH WHITE
      ========================= */}
      <section className="zero-dep-full">
        <div className="container ils">
          <h2>What is zero depreciation in bike insurance?</h2>
          <p>
            When settling a claim, insurers deduct depreciation on your bike’s
            parts. A zero depreciation add-on eliminates this deduction and
            ensures you receive the full claim amount. This add-on is available
            at a nominal extra premium.
          </p>
        </div>
      </section>
    </>
  );
};

export default IdvAndZeroDepreciation;
