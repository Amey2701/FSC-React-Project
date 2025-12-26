import React from "react";
import "./PremiumAndBuyingGuide.css";

const PremiumAndBuyingGuide = () => {
  return (
    <section className="premium-guide-section">
      <div className="container ils">

        {/* =======================
            COMPARE PREMIUM
        ======================= */}
        <h2 className="section-title">
          How to Effectively Compare Bike Insurance Premium?
        </h2>

        <p className="section-subtitle">
          Comparing bike insurance premiums is essential to finding the optimum
          coverage for your needs at the most affordable price.
        </p>

        <div className="compare-grid">
          <div className="compare-item">
            <span className="step">1</span>
            <h4>Premium break-up</h4>
            <p>
              It provides a detailed view of how your bike insurance premium is
              divided among various components, such as coverage, taxes, and
              add-ons.
            </p>
          </div>

          <div className="compare-item">
            <span className="step">3</span>
            <h4>Third-party premium</h4>
            <p>
              Third-party premium is the cost you pay towards your policy for
              availing third-party legal liability coverage.
            </p>
          </div>

          <div className="compare-item">
            <span className="step">2</span>
            <h4>Own damage premium</h4>
            <p>
              The own damage premium is the cost you pay to cover repair or
              replacement of your bike if damaged due to accidents, vandalism,
              or natural disasters.
            </p>
          </div>

          <div className="compare-item">
            <span className="step">4</span>
            <h4>Personal accident premium</h4>
            <p>
              It’s the premium you pay to obtain personal accident coverage,
              providing financial cushion in case of injury.
            </p>
          </div>

          <div className="compare-item">
            <span className="step">5</span>
            <h4>Add-on premium</h4>
            <p>
              Find out the premium breakup for your chosen add-ons. Add-ons offer
              extra protection on top of your base policy.
            </p>
          </div>
        </div>

        {/* =======================
            ADD-ON BENEFITS
        ======================= */}
        <div className="addon-section">
          <div className="addon-left">
            <h2>
              ICICI Lombard two-wheeler insurance policy add-on benefits<sup>G</sup>
            </h2>
            <p>
              Here are some add-ons you can add to your two-wheeler insurance
              policy from ICICI Lombard, along with their benefits:
            </p>
          </div>

          <div className="addon-right">
            <div className="addon-item">
              <h4>Roadside assistance cover</h4>
              <p>
                Stay ahead of unexpected breakdowns or accidents with our roadside assistance cover. Whether your two-wheeler experiences a flat tyre, needs a battery jump-start, requires towing, or minor repairs, this add-on has you covered. It also includes support for hotel stays and cab rides, ensuring you’re never stranded.
              </p>
            </div>

            <div className="addon-item">
              <h4>Zero depreciation cover</h4>
              <p>
                This add-on ensures you get the total claim amount without any deductions for the depreciation of your bike’s parts. Usually, when you make a claim, the insurance company deducts a certain percentage of the claim amount based on the depreciation of the bike’s parts, which reduces the payout. However, with a zero depreciation cover in bike, you get the entire cost of replacing damaged parts without factoring in depreciation.


That said, this add-on applies only if your claim is for loss or damage to the vehicle. It does not cover claims for total loss or constructive total loss of the bike.
              </p>
            </div>
          </div>
        </div>

        {/* =======================
            HOW TO BUY ONLINE
        ======================= */}
        <div className="buy-online-section">
          <div className="buy-left">
            <h2>How to buy two-wheeler insurance online?</h2>
            <p>
              Purchasing two-wheeler insurance online is a relatively easy
              process. All you need to do is:
            </p>
          </div>

          <div className="buy-right">
            <div className="buy-step">
              <span>1</span>
              <p>
                Enter <strong>here</strong> all the necessary details like your
                mobile no, email ID, bike registration number, registration
                year, etc.
              </p>
            </div>

            <div className="buy-step">
              <span>2</span>
              <p>Choose the plan that best fits your requirement</p>
            </div>

            <div className="buy-step">
              <span>3</span>
              <p>
                Customise the plan by editing your coverage, selecting add-ons,
                deductibles, etc.
              </p>
            </div>

            <div className="buy-step">
              <span>4</span>
              <p>
                Pay premium through net banking, debit/credit cards, UPI, etc.
              </p>
            </div>

            <div className="buy-step">
              <span>5</span>
              <p>You get the policy soft copy over email</p>
            </div>
          </div>
        </div>

        {/* =======================
            NCB & IDV
        ======================= */}
        <div className="info-grid">
          <div className="info-card">
            <h3>What is NCB in bike insurance?</h3>
            <p>
              NCB stands for No Claim Bonus. It is a reward offered by insurers
              for not making any claims during the policy period, resulting in
              a discount on renewal premium.
            </p>
          </div>

          <div className="info-card">
            <h3>What is IDV in bike insurance?</h3>
            <p>
              IDV, or Insured Declared Value, is the maximum amount your insurer
              will pay if your bike is stolen or totally damaged beyond repair.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PremiumAndBuyingGuide;
