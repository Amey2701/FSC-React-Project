import React from "react";
import { useNavigate } from "react-router-dom";
import "./DocumentsAndRenewalBenefits.css";

const DocumentsAndRenewalBenefits = () => {
  const navigate = useNavigate();

  return (
    <section className="docs-renew-section">
      <div className="docs-renew-inner">

        {/* TOP CONTENT */}
        <div className="docs-renew-top">
          <h2>Documents required to buy motor insurance online</h2>

          <p>
            To buy motor insurance online from ICICI Lombard, simply choose your
            insurance type –{" "}
            <span
              className="route-link"
              onClick={() => navigate("/car-insurance")}
            >
              car insurance
            </span>{" "}
            or{" "}
            <span
              className="route-link"
              onClick={() => navigate("/bike-insurance")}
            >
              two wheeler insurance
            </span>{" "}
            – and submit your vehicle details and contact number to get a quote.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="docs-renew-grid">

          {/* LEFT IMAGE */}
          <div className="docs-renew-image">
            <img
              src="https://www.icicilombard.com/docs/default-source/assets/motor-insurance-campaign/images/benefit-bitmap.png"
              alt="Online insurance renewal"
            />
          </div>

          {/* BENEFITS */}
          <div className="docs-renew-benefits">
            <h3>Benefits of online vehicle insurance renewal</h3>

            <ul className="benefits-list">

              <li className="benefit-item">
                <span className="benefit-icon" />
                <div>
                  <strong>Contactless policy renewal</strong>
                  <p>
                    Online motor insurance renewal is completely contactless.
                    Opt for a fully digital renewal process every time.
                  </p>
                </div>
              </li>

              <li className="benefit-item">
                <span className="benefit-icon" />
                <div>
                  <strong>Simple & quick renewal</strong>
                  <p>
                    Renew your vehicle insurance in just a few clicks and receive
                    the renewed policy instantly on email.
                  </p>
                </div>
              </li>

              <li className="benefit-item">
                <span className="benefit-icon" />
                <div>
                  <strong>Easy customisation</strong>
                  <p>
                    Modify coverage, add-ons and view updated premium before
                    making payment.
                  </p>
                </div>
              </li>

              <li className="benefit-item">
                <span className="benefit-icon" />
                <div>
                  <strong>Transparent process</strong>
                  <p>
                    View premium break-up, coverage details and add-ons clearly
                    before renewing your policy.
                  </p>
                </div>
              </li>

              <li className="benefit-item">
                <span className="benefit-icon" />
                <div>
                  <strong>Safe process</strong>
                  <p>
                    Secured payment gateway ensures protection of your personal
                    and financial information.
                  </p>
                </div>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DocumentsAndRenewalBenefits;
