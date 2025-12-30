import React from "react";
import "./OnlineBenefits.css";

const OnlineBenefits = () => {
  return (
    <section className="online-benefits">
      <div className="online-benefits-inner">

        {/* ================= TITLE ================= */}
        <h2 className="online-benefits-title">
          Benefits of buying vehicle insurance online
        </h2>

        {/* ================= BENEFITS GRID ================= */}
        <div className="benefits-grid">

          {/* Item 1 */}
          <div className="benefit-item">
            <span className="arrow">▶</span>
            <div>
              <h4>Instant vehicle insurance policy</h4>
              <p>
                All you have to do is submit your vehicle details, contact
                information, choose the cover that suits your needs and make
                payment. You'll receive your ICICI Lombard motor insurance
                policy in your inbox immediately.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="benefit-item">
            <span className="arrow">▶</span>
            <div>
              <h4>Zero paperwork</h4>
              <p>
                Go paperless with online vehicle insurance and say goodbye to
                scrambling through documents. All you need is a device with
                internet connectivity.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="benefit-item">
            <span className="arrow">▶</span>
            <div>
              <h4>Buy anything, anywhere</h4>
              <p>
                Branch too far away? Get free only late at night? You can find
                out all about our policies and buy a motor vehicle insurance
                online anytime from the comfort of your home.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="benefit-item">
            <span className="arrow">▶</span>
            <div>
              <h4>Review customer feedback</h4>
              <p>
                It’s much easier to find important information about any
                insurance provider online. You can read what other customers
                are saying about their policies on their website.
              </p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="benefit-item">
            <span className="arrow">▶</span>
            <div>
              <h4>Easy comparison</h4>
              <p>
                Another benefit of buying vehicle insurance online is you can
                compare multiple covers. Submit your vehicle details, get a
                quote from us, evaluate the policy based on coverage, features
                and add-ons, and accordingly pick a motor insurance cover from
                ICICI Lombard.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OnlineBenefits;
