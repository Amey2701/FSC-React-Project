import React from "react";
import "./WhyCustomersLoveUs.css";

const WhyCustomersLoveUs = () => {
  return (
    <section className="why-love-section">
      <h2>Why do our customers love us?</h2>

      <p className="why-desc">
        ICICI Lombard is synonymous with trust and reliability. Our bike insurance
        is a top choice among customers for several reasons. Here’s what our
        customers appreciate most:
      </p>

      <div className="why-stats">
        {/* ITEM 1 */}
        <div className="why-item">
          <h3>
            6900+ cashless garages<sup>B</sup>
          </h3>
          <p>for prompt service</p>
        </div>

        <span className="divider" />

        {/* ITEM 2 */}
        <div className="why-item">
          <h3>Instant claim approval</h3>
          <p>
            via the{" "}
            <a
              href="https://www.icicilombard.com/il-takecare-app"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              IL Take Care app
            </a>
          </p>
        </div>

        <span className="divider" />

        {/* ITEM 3 */}
        <div className="why-item">
          <h3>24x7 customer support</h3>
          <p>for all your queries</p>
        </div>
      </div>
    </section>
  );
};

export default WhyCustomersLoveUs;
