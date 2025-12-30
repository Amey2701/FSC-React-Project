import React from 'react';
import './ComparisonTable.css';

const ComparisonTable = () => {
  return (
    <section className="comparison-section bg-grey" >

      <h2>Comprehensive car insurance vs Third party car insurance</h2>

      {/* Comparison Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Comprehensive Car Insurance</th>
              <th>Third-Party Car Insurance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Covers damages to your own car and third-party liabilities</td>
              <td>Covers third-party liabilities only</td>
            </tr>
            <tr>
              <td>Provides complete protection for your car</td>
              <td>Only covers legal liabilities</td>
            </tr>
            <tr>
              <td>
                May include add-ons like zero depreciation, roadside assistance, etc.
              </td>
              <td>
                Only includes mandatory third-party coverage as per law
              </td>
            </tr>
            <tr>
              <td>Higher premium as compared to third-party insurance</td>
              <td>Lower premium as compared to comprehensive insurance</td>
            </tr>
            <tr>
              <td>Can be purchased online or offline</td>
              <td>
                Mandatory needs to be purchased before registering a car
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Description Content */}
      <div className="comparison-description">
        <p>
          Comprehensive car insurance is a more inclusive policy that covers not
          only third-party liabilities but also damage to your own vehicle. On
          the other hand, <span>third-party car insurance</span> only covers legal
          liabilities in case of an accident. Comprehensive car insurance also
          offers add-ons like zero depreciation and roadside assistance, whereas
          third-party insurance only includes mandatory coverage as per law.
        </p>

        <p>
          Comprehensive car insurance has a higher premium as compared to
          third-party insurance, but it provides complete protection for your
          car. The choice between the two depends on your budget and the level
          of coverage you desire. You can easily buy car insurance online or
          offline, but third-party insurance is mandatory and needs to be
          purchased before registering a car.
        </p>
      </div>

    </section>
  );
};

export default ComparisonTable;
