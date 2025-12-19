import React from "react";
import "./HowToChoosePolicy.css";

const HowToChoosePolicy = () => {
  return (
    <section className="choose-policy-section">
      <div className="choose-policy-container">

        <h2>How to choose the right car insurance policy online?</h2>

        <div className="policy-cards">

          <div className="policy-card">
            <div className="step-number">1</div>
            <div className="card-content">
              <h4>What kind of coverage you need:</h4>
              <p>
                Choose from options like liability, collision, comprehensive, or
                personal injury protection.
              </p>
            </div>
          </div>

          <div className="policy-card">
            <div className="step-number">2</div>
            <div className="card-content">
              <h4>How much your car is worth:</h4>
              <p>
                Make sure the cost of your insurance policy matches your
                vehicle's value.
              </p>
            </div>
          </div>

          <div className="policy-card">
            <div className="step-number">3</div>
            <div className="card-content">
              <h4>How you drive:</h4>
              <p>
                Your driving habits, such as how often you drive and what type of
                driving you do, can affect the cost of insurance.
              </p>
            </div>
          </div>

          <div className="policy-card">
            <div className="step-number">4</div>
            <div className="card-content">
              <h4>How much you're willing to pay out of pocket:</h4>
              <p>
                If you're not comfortable paying repair costs yourself, opt for
                Own Damage cover along with a Third-party policy.
              </p>
            </div>
          </div>

          <div className="policy-card">
            <div className="step-number">5</div>
            <div className="card-content">
              <h4>Where you live:</h4>
              <p>
                Car insurance costs can differ based on traffic and crime levels
                in your area.
              </p>
            </div>
          </div>

          <div className="policy-card">
            <div className="step-number">6</div>
            <div className="card-content">
              <h4>Discounts:</h4>
              <p>
                Look for discounts for safe driving, low mileage, or multiple
                policies.
              </p>
            </div>
          </div>

        </div>

        <p className="policy-footer-text">
          Before buying car insurance online, read the policy details and fine
          print carefully. Reviewing your policy regularly helps ensure you’re
          not overpaying for coverage you don’t need.
        </p>

      </div>
    </section>
  );
};

export default HowToChoosePolicy;
