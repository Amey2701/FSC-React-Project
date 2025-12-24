import React from "react";
import "./WhyBuyPolicyOnline.css";

const WhyBuyOnline = () => {
  return (
    <section className="why-buy-online">
      <h2>Why should you buy a car insurance policy online?</h2>
      <p className="subtitle">
        It’s fast and convenient! Explore coverage, choose add-ons, and make the
        payment in just a few minutes.
      </p>

      <div className="why-grid">
        {/* 1 */}
        <div className="why-item">
          <div className="why-number">1</div>
          <div className="why-content">
            <h4>Instant quote</h4>
            <p>
              Just enter your car registration number and contact details to get
              an instant quote.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="why-item">
          <div className="why-number">2</div>
          <div className="why-content">
            <h4>Quick & hassle-free policy</h4>
            <p>
              It only takes a few minutes to buy car insurance online. Pick a
              plan, share a few details, make payment and your policy is issued
              in no time.
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="why-item">
          <div className="why-number">3</div>
          <div className="why-content">
            <h4>Advice from insurance expert</h4>
            <p>
              Got questions? Our experts will answer all your policy-related
              queries so that you have all the information you need.
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className="why-item">
          <div className="why-number">4</div>
          <div className="why-content">
            <h4>No paperwork</h4>
            <p>
              No documents or physical forms needed. Submit a short online form,
              make payment and get your policy issued with zero paperwork.
            </p>
          </div>
        </div>

        {/* 5 */}
        <div className="why-item">
          <div className="why-number">5</div>
          <div className="why-content">
            <h4>Touchless policy issuance</h4>
            <p>
              No human contact required. You can even complete inspection online
              via the IL Take Care app in case of a policy gap.
            </p>
          </div>
        </div>

        {/* 6 */}
        <div className="why-item">
          <div className="why-number">6</div>
          <div className="why-content">
            <h4>Transparent process</h4>
            <p>
              No hidden charges. Choose your plan, customise coverage, and know
              exactly what you’re paying for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuyOnline;
