import React from "react";
import "./KeyFeatures.css";

const KeyFeatures = () => {
  return (
    <section className="key-features-section">
      <h2>Key features of ICICI Lombard&apos;s car insurance</h2>

      <div className="key-features-table">
        <table>
          <thead>
            <tr>
              <th>Key Feature</th>
              <th>Benefits</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Car Insurance Premium</td>
              <td>Starts at ₹2,094<sup>B</sup></td>
            </tr>

            <tr>
              <td>No Claim Bonus</td>
              <td>Up to 50%</td>
            </tr>

            <tr>
              <td>Cashless Garages</td>
              <td>6900+ Network Garages<sup>C</sup> &amp; Roadside Assistance</td>
            </tr>

            <tr>
              <td>Add-on Covers</td>
              <td>Multiple Add-on Covers<sup>G</sup></td>
            </tr>

            <tr>
              <td>Personal Accident Cover</td>
              <td>Up to ₹15 lakhs</td>
            </tr>

            <tr>
              <td>Third Party Damage Cover</td>
              <td>Covers injuries to third party &amp; property</td>
            </tr>

            <tr>
              <td>Own Damage Cover</td>
              <td>
                Covers accidents, natural calamities, theft, fire &amp; personal
                belongings accident cover
              </td>
            </tr>

            <tr>
              <td>Claim Settlement</td>
              <td>Instant claim settlement via IL TakeCare</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default KeyFeatures;
