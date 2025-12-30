import React from "react";
import "./WhyChooseBikeInsurance.css";

const WhyChooseBikeInsurance = () => {
  return (
    <section className="why-choose-section">
      <h2>Why choose ICICI Lombard Bike Insurance?</h2>

      <p className="why-choose-desc">
        Choosing ICICI Lombard bike insurance offers the following benefits:
      </p>

      <div className="why-choose-stats">
        {/* ITEM 1 */}
        <div className="choose-item">
          <img
            src="https://www.icicilombard.com/docs/default-source/apps/fwfresh/fw-landing/images/instant-policy.svg"
            alt="Instant policy issuance"
          />
          <h3>Instant policy issuance</h3>
          <p>
            Our bike insurance provides instant online policy issuance, ensuring
            you get coverage without delays.
          </p>
        </div>

        <span className="divider" />

        {/* ITEM 2 */}
        <div className="choose-item">
          <img
            src="https://www.icicilombard.com/docs/default-source/apps/fwfresh/fw-landing/images/roadside-assistance.svg"
            alt="24x7 roadside assistance"
          />
          <h3>24X7 roadside assistance</h3>
          <p>
            Our bike insurance offers 24x7 roadside assistance, ensuring help is
            available whenever and wherever your bike breaks down.
          </p>
        </div>

        <span className="divider" />

        {/* ITEM 3 */}
        <div className="choose-item">
          <img
            src="https://www.icicilombard.com/docs/default-source/apps/fwfresh/fw-landing/images/digital-claims.svg"
            alt="Digital claims inspection"
          />
          <h3>Digital claims inspection</h3>
          <p>
            We offer a seamless digital claims inspection process, allowing you
            to easily submit claims online hassle-free.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseBikeInsurance;
