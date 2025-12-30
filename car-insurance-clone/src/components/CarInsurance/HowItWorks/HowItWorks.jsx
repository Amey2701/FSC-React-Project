import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-it-works-container">

        {/* LEFT IMAGE */}
        <div className="how-it-works-image">
          <img
            src="https://www.icicilombard.com/docs/default-source/apps/fwfresh/fw-landing/images/il-car-insurance-work.svg"
            alt="How ICICI Lombard car insurance works"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="how-it-works-content">
          <h2>How does ICICI Lombard car insurance work?</h2>

          <p className="intro-text">
            ICICI Lombard car insurance is easy to buy and renew online. Once you
            purchase our car insurance policy, we email your policy documents
            and also send a hard copy by post. You can then drive worry-free,
            because –
          </p>

          <ul className="how-it-works-list">
            <li>
              Our car insurance covers you for natural and man-made calamities
            </li>

            <li>
              We’ve got 6900+ {" "}
              <a
                href="https://www.icicilombard.com/cashless-garages"
                target="_blank"
                rel="noopener noreferrer"
              >
                network garages
              </a>{" "}
              for cashless repairs in case of damage
            </li>

            <li>
              Claiming is easy through our call Center, website and app
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
