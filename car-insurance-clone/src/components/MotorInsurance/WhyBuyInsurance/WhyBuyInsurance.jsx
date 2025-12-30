import React from "react";
import "./WhyBuyInsurance.css";

const WhyBuyInsurance = () => {
  return (
    <section className="whybuy-section">
      <div className="whybuy-inner">

        {/* ================= HEADING ================= */}
        <h2 className="whybuy-title">
          Why should you buy motor vehicle insurance?
        </h2>

        {/* ================= TOP 4 REASONS ================= */}
        <div className="whybuy-cards">

          {/* Card 1 */}
          <div className="whybuy-card light">
            <div className="whybuy-card-inner">
              <div className="whybuy-icon">⚖️</div>
              <div className="whybuy-content">
                <h4>Adherence to law</h4>
                <p>
                  It is mandatory by law to avail third-party insurance for all
                  vehicles before they are allowed on road.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="whybuy-card tinted">
            <div className="whybuy-card-inner">
              <div className="whybuy-icon">🧾</div>
              <div className="whybuy-content">
                <h4>Escape traffic fines</h4>
                <p>
                  As per the Motor Vehicles (Amended) Act of 2019, if you're caught
                  driving an uninsured vehicle, you may have to pay a penalty of
                  up to ₹2000 for the first instance and from second instance it
                  may go up to ₹4000.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="whybuy-card tinted">
            <div className="whybuy-card-inner">
              <div className="whybuy-icon">🚗</div>
              <div className="whybuy-content">
                <h4>Coverage against loss or damage</h4>
                <p>
                  A motor package policy takes care of your expenses in case of any
                  loss or damage to your vehicle arising due to theft, road accident
                  or other natural and man-made disasters.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="whybuy-card light">
            <div className="whybuy-card-inner">
              <div className="whybuy-icon">🧍</div>
              <div className="whybuy-content">
                <h4>Personal accident cover</h4>
                <p>
                  You will get a personal accident cover of ₹15 lakhs for yourself
                  and an optional cover of ₹2 lakhs for the co-passengers travelling
                  with you. This coverage is available at nominal additional premium.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ================= 6 REASONS ================= */}
        <div className="six-reasons">

          <div className="six-left">
            <h3>
              <span>6 Reasons</span><br />
              to buy vehicle insurance from ICICI Lombard
            </h3>
          </div>

          <div className="six-right">

            <div className="reason-row">
              <span className="num">1</span>
              <p>Save up to 78% premium^</p>
            </div>

            <div className="reason-row">
              <span className="num">2</span>
              <p>Instant online vehicle insurance policy</p>
            </div>

            <div className="reason-row">
              <span className="num">3</span>
              <p>Cashless network garages across India</p>
            </div>

            <div className="reason-row">
              <span className="num">4</span>
              <p>Instant claim approval on live video**</p>
            </div>

            <div className="reason-row">
              <span className="num">5</span>
              <p>Vehicle pick up & drop arrangement</p>
            </div>

            <div className="reason-row">
              <span className="num">6</span>
              <p>24x7 roadside assistance^^</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyBuyInsurance;
