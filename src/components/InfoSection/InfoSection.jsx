import React from 'react';
import './InfoSection.css';

const InfoSection = () => {
  return (
    <section className="info-wrapper">

      {/* Block 1: Image LEFT | Text RIGHT */}
      <div className="info-block">
        <div className="info-img left">
          <img
            src="https://www.icicilombard.com/docs/default-source/apps/fwfresh/fw-landing/images/il-what-car-insurance.svg"
            alt="What is car insurance"
          />
        </div>

        <div className="info-text right">
          <h3>What is car insurance?</h3>

          <p>
            Car insurance is a type of motor insurance that protects your vehicle
            against losses or damages caused by accidents, theft, natural
            disasters, man-made calamities, etc. Besides providing financial
            protection against uncertainties on the road, it also helps you stay
            legally compliant. In India, at least a third-party liability policy
            is mandatory under the Motor Vehicles Act, 1988.
          </p>

          <p>
            Simply put, having car insurance ensures that if something goes wrong
            on the road, you are not left bearing the full cost on your own.
          </p>

          <p>
            ICICI Lombard offers different types of car insurance policies,
            including comprehensive car insurance, own damage car insurance and
            third-party car insurance. With policies starting at just ₹2,094 per
            year, you also get benefits such as cashless repairs at 6,800+
            garages, quick claim settlement and 24x7 customer support.
          </p>
        </div>
      </div>

      {/* Block 2: Text LEFT | Image RIGHT */}
      <div className="info-block">
        <div className="info-text left">
          <h3>Car insurance for EVs</h3>

          <p>
            Just like regular car insurance, car insurance for electric vehicles
            (EVs) provides coverage against natural events such as floods or
            storms and man-made incidents like accidents or vandalism. It also
            covers the insured EV against third-party liabilities as per the
            policy terms and conditions.
          </p>

          <p>
            If you own an EV, it is important to choose the right protection for
            your vehicle that helps manage high repair costs and ensures peace of
            mind.
          </p>
        </div>

        <div className="info-img right">
          <img
            src="https://www.icicilombard.com/docs/default-source/apps/fwfresh/fw-landing/images/ev's-car.svg"
            alt="Car insurance for EVs"
          />
        </div>
      </div>

    </section>
  );
};

export default InfoSection;
