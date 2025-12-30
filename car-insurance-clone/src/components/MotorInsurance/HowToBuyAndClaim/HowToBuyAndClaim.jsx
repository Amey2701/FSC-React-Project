import React from "react";
import "./HowToBuyAndClaim.css";

const HowToBuyAndClaim = () => {

  // 🔑 SCROLL FUNCTION
  const scrollToMotorHero = () => {
    const hero = document.getElementById("motor-hero");
    if (hero) {
      hero.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="howbuy-section">
      <div className="howbuy-inner">

        {/* ================= HOW TO BUY ================= */}
        <h2 className="howbuy-title">
          How to buy vehicle insurance online
        </h2>

        <div className="howbuy-steps">

          {/* STEP 1 */}
          <div className="howbuy-step">
            <img
              src="https://www.icicilombard.com/docs/default-source/assets/motor-insurance-campaign/images/step-motor.png"
              alt="Step 1"
            />
            <h4>Step 1</h4>

            <p>
              <span
                className="scroll-link"
                onClick={scrollToMotorHero}
              >
                Click here
              </span>{" "}
              and share your vehicle’s registration no. and your contact
              details to get a quote.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="howbuy-step">
            <img
              src="https://www.icicilombard.com/docs/default-source/assets/motor-insurance-campaign/images/step-document.png"
              alt="Step 2"
            />
            <h4>Step 2</h4>
            <p>
              Evaluate the covers based on features and add-ons.
              Choose a suitable motor insurance policy for your vehicle.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="howbuy-step">
            <img
              src="https://www.icicilombard.com/docs/default-source/assets/motor-insurance-campaign/images/payment-online-email.png"
              alt="Step 3"
            />
            <h4>Step 3</h4>
            <p>
              Make online payment and get your policy on email instantly.
            </p>
          </div>

        </div>

        {/* ================= CLAIM PROCESS ================= */}
        <div className="claim-section">

          {/* LEFT */}
          <div className="claim-left">
            <h2>Claim process of motor insurance</h2>
            <p>
              With digitisation, motor insurance claim processing is now possible on-the-go with our 
              IL TakeCare app. Moreover, with emerging need for zero contact processes, 
              it is now possible to survey the condition of your vehicle virtually through 
              InstaSpect, our live video inspection feature on the IL TakeCare app.
            </p>
          </div>

          {/* RIGHT */}
          <div className="claim-right">
            <h4>Below are the steps to file a claim</h4>

            <div className="claim-step">
              <img
                src="https://www.icicilombard.com/docs/default-source/assets/motor-insurance-campaign/images/claim-registeration.png"
                alt="Claim"
              />
              <div>
                <h5>Claim</h5>
                <p>
                  Call our toll-free helpline number <strong>1800 2666</strong> or IL TakeCare app / ICICI Lombard website 
                  for assistance in case of an unfortunate accident / breakdown or 
                  for vehicle insurance claim intimation.
                </p>
              </div>
            </div>

            <div className="claim-step">
              <img
                src="https://www.icicilombard.com/docs/default-source/assets/motor-insurance-campaign/images/inspection.png"
                alt="Inspection"
              />
              <div>
                <h5>Inspection</h5>
                <p>
                  Opt for video inspection/ physical inspection of your vehicle.
                </p>
              </div>
            </div>

            <div className="claim-step">
              <img
                src="https://www.icicilombard.com/docs/default-source/assets/motor-insurance-campaign/images/approval.png"
                alt="Approval"
              />
              <div>
                <h5>Approval</h5>
                <p>
                  Get instant repair approval and track your claim status through our Claim Tracker.
                </p>
              </div>
            </div>

            <p className="claim-footer">
              You can also visit the{" "}
              <a
                href="https://www.icicilombard.com/customer-support"
                target="_blank"
                rel="noreferrer"
              >
                customer support section
              </a>.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowToBuyAndClaim;
