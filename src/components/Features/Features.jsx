import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-header">
        <h2>Why our customers love us?</h2>
        <p>And, we think you will too.</p>
      </div>

      <div className="features-row">

        {/* Card 1 */}
        <div className="card-block">
          <div className="flexclass">
            <div className="img_section">
              <img
                src="https://www.icicilombard.com/docs/default-source/assets/car-landing-new/images/cashless-garages.svg"
                alt="cashless garages"
              />
            </div>
            <div className="content_section">
              <h4>6900+ cashless garages</h4>
              <span>for a hassle-free service</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card-block">
          <div className="flexclass">
            <div className="img_section">
              <img
                src="https://www.icicicilombard.com/docs/default-source/assets/car-landing-new/images/instant-motor-claims.svg"
                alt="instant motor claims"
              />
            </div>
            <div className="content_section">
              <h4>Instant motor claims</h4>
              <span>through our IL Take Care app</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card-block">
          <div className="flexclass">
            <div className="img_section">
              <img
                src="https://www.icicilombard.com/docs/default-source/assets/car-landing-new/images/customer-support.svg"
                alt="customer support"
              />
            </div>
            <div className="content_section">
              <h4>Reliable customer support</h4>
              <span>Call Center • Chat • 320+ branches</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Features;
