import React from "react";
import "./KeyFeatures.css";

const KeyFeatures = () => {
  return (
    <section className="key-features-section">
      <div className="container ils">
        <h2 className="key-title">
          Key features of two-wheeler insurance policy
        </h2>

        <div className="features-grid">
          {/* ROW 1 */}
          <div className="feature-card">
            <img
              src="https://www.icicilombard.com/docs/default-source/apps/fwfresh/fw-landing/images/liability.svg"
              alt="Liability coverage"
            />
            <h3>Liability coverage</h3>
            <p>
              Offers financial protection against damages or injuries caused to
              third parties in an accident where you and your bike are at fault.
            </p>
          </div>

          <div className="feature-card">
            <img
              src="https://www.icicilombard.com/docs/default-source/apps/fwfresh/fw-landing/images/own-damage.svg"
              alt="Own damage coverage"
            />
            <h3>Own damage coverage</h3>
            <p>
              It provides you with a financial cushion in the event your bike
              suffers damages from accidents, fire, theft, natural disasters,
              etc.
            </p>
          </div>

          <div className="feature-card">
            <img
              src="https://www.icicilombard.com/docs/default-source/apps/fwfresh/fw-landing/images/personal-accident.svg"
              alt="Personal accident cover"
            />
            <h3>Personal accident cover</h3>
            <p>
              Offers financial support in case you, the rider, suffer accidental
              injury while riding your bike. Also, it provides a payout in case
              of accidental death.
            </p>
          </div>

          {/* ROW 2 */}
          <div className="feature-card">
            <img
              src="https://www.icicilombard.com/docs/default-source/apps/fwfresh/fw-landing/images/add-on.svg"
              alt="Add-on covers"
            />
            <h3>
              Add-on covers<sup>G</sup>
            </h3>
            <p>
              Add-on covers, which require an additional premium, help fortify
              the base policy’s coverage. Common add-ons include engine
              protection, zero depreciation, roadside assistance, etc.
            </p>
          </div>

          <div className="feature-card">
            <img
              src="https://www.icicilombard.com/docs/default-source/apps/fwfresh/fw-landing/images/ncb.svg"
              alt="No claim bonus"
            />
            <h3>No claim bonus</h3>
            <p>
              Rewards you with either a discount in premiums or increased
              coverage for every claim-free year.
            </p>
          </div>

          <div className="feature-card">
            <img
              src="https://www.icicilombard.com/docs/default-source/apps/fwfresh/fw-landing/images/cashless-garage.svg"
              alt="Cashless network garages"
            />
            <h3>Cashless network garages</h3>
            <p>
              These are authorised repair centres where you can repair your
              damaged bike without paying upfront.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
