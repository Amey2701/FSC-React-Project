import React from "react";
import "./HowToChoosePolicy.css";

const HowToChoosePolicy = () => {
  return (
    <section className="choose-policy-section">
      <div className="container ils choose-policy-wrapper">
        {/* LEFT IMAGE */}
        <div className="choose-policy-image">
          <img
            src="https://www.icicilombard.com/docs/default-source/apps/fwfresh/fw-landing/images/choose-policy-bike.svg"
            alt="Choose bike insurance policy"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="choose-policy-content">
          <h2>How to choose the right two wheeler insurance policy?</h2>

          <p className="choose-policy-desc">
            Choosing the right bike insurance policy is a culmination of several
            factors. Keeping in mind the following factors can help you choose
            the right policy:
          </p>

          <ul className="choose-policy-list">
            <li>
              <span className="check">✔</span>
              <p>
                <strong>Assess your needs:</strong> Find out what coverage you
                need. Consider if you want protection for third-party
                liabilities, own damage, or both.
              </p>
            </li>

            <li>
              <span className="check">✔</span>
              <p>
                <strong>Compare plans:</strong> Look at different policies from
                multiple insurers. Compare coverage, premiums, and benefits.
              </p>
            </li>

            <li>
              <span className="check">✔</span>
              <p>
                <strong>Check coverage:</strong> Make sure your policy has a
                robust coverage against various risks.
              </p>
            </li>

            <li>
              <span className="check">✔</span>
              <p>
                <strong>Read the fine print:</strong> Understand the policy’s
                terms, conditions, and exclusions, if any. Look out for any
                limits or deductibles.
              </p>
            </li>

            <li>
              <span className="check">✔</span>
              <p>
                <strong>Check the claims process:</strong> Make sure the claim
                process is straightforward and easy.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowToChoosePolicy;
