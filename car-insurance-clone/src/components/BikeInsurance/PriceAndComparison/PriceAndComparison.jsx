import React from "react";
import "./PriceAndComparison.css";

const PriceAndComparison = () => {
  return (
    <section className="price-section">

      <h2>Bike insurance price for different two-wheelers</h2>
      <p className="price-desc">
        The cost of third-party insurance depends on the bike’s cubic capacity.
      </p>

      <table className="price-table">
        <thead>
          <tr>
            <th>Bike's cubic capacity</th>
            <th>Third-party insurance policy price</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Less than 75 CC</td><td>₹538</td></tr>
          <tr><td>75 to 150 CC</td><td>₹714</td></tr>
          <tr><td>150 – 350 CC</td><td>₹1,366</td></tr>
          <tr><td>Greater than 350 CC</td><td>₹2,804</td></tr>
        </tbody>
      </table>

      <h2 className="compare-title">
        Compare ICICI Lombard two-wheeler insurance policies
      </h2>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Features</th>
            <th>Package policy</th>
            <th>Standalone OD</th>
            <th>Third-party</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Own vehicle damage</td><td>✔</td><td>✔</td><td>✖</td></tr>
          <tr><td>Theft</td><td>✔</td><td>✔</td><td>✖</td></tr>
          <tr><td>Add-ons</td><td>✔</td><td>✔</td><td>✖</td></tr>
          <tr><td>Damage to property</td><td>✔</td><td>✖</td><td>✔</td></tr>
          <tr><td>₹15 lakh PA cover</td><td>✔</td><td>✖</td><td>✔</td></tr>
        </tbody>
      </table>

    </section>
  );
};

export default PriceAndComparison;
