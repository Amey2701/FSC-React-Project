import React from "react";
import "./AddOnCovers.css";

const AddOnCovers = () => {
  return (
    <section className="addon-section">

      <h2>
        What are the key add-on<sup>G</sup> covers offered by our car insurance?
      </h2>

      <p className="addon-subtext">
        Choose from an assorted range of add-ons, for an additional premium, when
        buying ICICI Lombard car insurance.
      </p>

      <div className="addon-grid">

        <div className="addon-card">
          <img
            src="https://www.icicilombard.com/docs/default-source/assets/car-landing-new/images/roadside-assistance-cover.svg"
            alt="Roadside assistance cover"
          />
          <h4>Roadside assistance cover</h4>
          <p>
            Get immediate help in case of breakdown or accident, ensuring you are
            never stranded.
          </p>
        </div>

        <div className="addon-card">
          <img
            src="https://www.icicilombard.com/docs/default-source/assets/car-landing-new/images/engine-protect-cover.svg"
            alt="Engine protection cover"
          />
          <h4>Engine protection cover</h4>
          <p>
            Compensates for repair or replacement of a damaged engine.
          </p>
        </div>

        <div className="addon-card">
          <img
            src="https://www.icicilombard.com/docs/default-source/assets/car-landing-new/images/consumables-protect-cover.svg"
            alt="Consumables cover"
          />
          <h4>Consumables cover</h4>
          <p>
            Covers consumables like engine oil, screws, washers etc.
          </p>
        </div>

        <div className="addon-card">
          <img
            src="https://www.icicilombard.com/docs/default-source/assets/car-landing-new/images/zero-depreciation-cover.svg"
            alt="Zero depreciation cover"
          />
          <h4>Zero depreciation cover</h4>
          <p>
            Protects you against deduction of claim value because of depreciation.
          </p>
        </div>

        <div className="addon-card">
          <img
            src="https://www.icicilombard.com/docs/default-source/assets/car-landing-new/images/garage-cash-cover.svg"
            alt="Garage cash cover"
          />
          <h4>Garage cash cover</h4>
          <p>
            Get a daily allowance for transport when your car is under repair.
          </p>
        </div>

        <div className="addon-card">
          <img
            src="https://www.icicilombard.com/docs/default-source/assets/car-landing-new/images/loss-personal-belongings-cover.svg"
            alt="Loss of personal belongings cover"
          />
          <h4>Loss of personal belongings cover</h4>
          <p>
            Get cover for valuables like laptops, phones, clothes etc.
          </p>
        </div>

      </div>

      <p className="addon-policy-links">
        For detailed terms & conditions of above covers, read{" "}
        <a
          href="https://www.icicilombard.com/docs/default-source/default-document-library/private-car-package-policy-wording.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Private car package policy wordings
        </a>
        ,{" "}
        <a
          href="https://www.icicilombard.com/docs/default-source/default-document-library/stand-alone-own-damage-private-car-insurance-policy-wording.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Standalone own damage policy wordings
        </a>
        .
      </p>

    </section>
  );
};

export default AddOnCovers;
