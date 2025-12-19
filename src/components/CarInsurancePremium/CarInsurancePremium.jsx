import React from "react";
import "./CarInsurancePremium.css";

const CarInsurancePremium = () => {
  return (
    <section className="premium-section">
      <h2>How is car insurance premium calculated?</h2>

      <div className="premium-wrapper">
        {/* LEFT COLUMN */}
        <div className="premium-left">
          <p className="intro-text">
            <strong>Your car insurance premium includes three major components:</strong>
          </p>

          {/* Item 1 */}
          <div className="premium-item">
            <div className="number">1</div>
            <div className="text">
              <p>
                <strong>Third-party liability premium</strong> – this is stipulated
                by the Insurance Regulatory and Development Authority of India
                (IRDAI), and it is directly proportional to your car’s cubic
                capacity.
              </p>

              <div className="premium-table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Cubic capacity</th>
                      <th>Premium with effect from 1st June 2022 (Rs.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Not exceeding 1000 cc</td>
                      <td>₹2,094</td>
                    </tr>
                    <tr>
                      <td>Exceeding 1000 cc but not exceeding 1500 cc</td>
                      <td>₹3,416</td>
                    </tr>
                    <tr>
                      <td>Exceeding 1500 cc</td>
                      <td>₹7,897</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="premium-item">
            <div className="number">2</div>
            <div className="text">
              <p>
                <strong>Own damage premium</strong> – this is calculated as
                IDV × [Tariff Rate] – [Discounts] + Add On Covers
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="premium-item">
            <div className="number">3</div>
            <div className="text">
              <p>
                <strong>Personal accident cover premium</strong> + Additional covers
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="premium-right">
          <p className="intro-text">
            <strong>
              Factors that affect these three components and your final car
              insurance price, include:
            </strong>
          </p>

          <ul className="factor-list">
            <li>
              <strong>IDV</strong> – IDV is the maximum amount you can claim under
              your policy. The higher your car’s market value, the higher your
              IDV and premium will be.
            </li>

            <li>
              <strong>Make and model</strong> – Higher-end models are insured at
              a higher price, simply because the cost of repairs/replacement for
              such vehicle is higher.
            </li>

            <li>
              <strong>Fuel type</strong> – Repairing petrol-fuelled cars is cheaper
              than those that run on diesel and CNG. As a result, they are also
              less expensive to insure.
            </li>

            <li>
              <strong>Year of manufacture</strong> – Certain new cars may be costly
              to cover since their spare parts may not be available yet.
            </li>

            <li>
              <strong>Location</strong> – Since urban areas have denser traffic,
              there’s a greater probability of accidental damages. Thus, your
              premium may vary depending on your location.
            </li>

            <li>
              <strong>Claim history</strong> – If you have made no car insurance
              claims in the past year, you stand to gain a No Claim Bonus on
              your premium.
            </li>

            <li>
              <strong>Add-ons</strong> – A small additional cost will be included
              in your premium for the add-ons you pick.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CarInsurancePremium;
