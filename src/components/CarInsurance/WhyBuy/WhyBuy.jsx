import React from 'react';
import './WhyBuy.css';

const WhyBuy = () => {
  return (
    <section className="why-buy-section">
      
      {/* Image Section */}
      <div className="why-buy-img">
        <img
          src="https://www.icicilombard.com/docs/default-source/assets/car-landing-new/images/why_should_you_buy_icici_ins.svg"
          alt="Why should you buy ICICI Lombard car insurance"
        />
      </div>

      {/* Content Section */}
      <div className="why-buy-content">
        <h2>Why should you buy car insurance online from ICICI Lombard?</h2>
        <p className="tagline">We make life simpler!</p>

        <p>
          <strong>Affordable car insurance</strong> premiums, easy renewals, quick claim
          settlement are some of the key features of our private car package
          insurance policy. We also have a set of certified workshops that
          provide digital survey for speedy claim processing, pick-up and drop,
          sanitization of high touchpoints on your car, dedicated customer
          service manager and quality assurance on repairs.
        </p>

        <p>
          Besides, we also offer unique additional covers at a nominal extra
          premium that can significantly boost your car insurance plan. By
          opting for add-ons in a car insurance policy, you can save a lot of
          money in repairs.
        </p>
      </div>

    </section>
  );
};

export default WhyBuy;
