import React from "react";
import "./PlanComparison.css";

const PlanComparison = () => {
  return (
    <section className="plan-compare">
      <div className="plan-compare-inner">

        {/* ================= COMPARISON TABLE ================= */}
        <h2 className="section-title">
          Compare ICICI Lombard motor insurance plans
        </h2>

        <div className="table-wrapper">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Coverage and benefits</th>
                <th>Comprehensive motor insurance</th>
                <th>Standalone OD cover</th>
                <th>Third-party motor insurance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Accidental damages</td>
                <td className="yes">✓</td>
                <td className="yes">✓</td>
                <td className="no">✕</td>
              </tr>
              <tr>
                <td>Natural calamities</td>
                <td className="yes">✓</td>
                <td className="yes">✓</td>
                <td className="no">✕</td>
              </tr>
              <tr>
                <td>Fire</td>
                <td className="yes">✓</td>
                <td className="yes">✓</td>
                <td className="no">✕</td>
              </tr>
              <tr>
                <td>Theft</td>
                <td className="yes">✓</td>
                <td className="yes">✓</td>
                <td className="no">✕</td>
              </tr>
              <tr>
                <td>Riot, strike & terrorist activities</td>
                <td className="yes">✓</td>
                <td className="yes">✓</td>
                <td className="no">✕</td>
              </tr>
              <tr>
                <td>Damage in transit</td>
                <td className="yes">✓</td>
                <td className="yes">✓</td>
                <td className="no">✕</td>
              </tr>
              <tr>
                <td>Third party property damage</td>
                <td className="yes">✓</td>
                <td className="no">✕</td>
                <td className="yes">✓</td>
              </tr>
              <tr>
                <td>Third party injury</td>
                <td className="yes">✓</td>
                <td className="no">✕</td>
                <td className="yes">✓</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ================= FEATURES ================= */}
        <h2 className="section-title">
          Features and benefits of ICICI Lombard motor insurance
        </h2>

        <div className="features-grid">

          <div className="feature-card">
            <h4>15000+ network garages</h4>
            <p>✔ Hassle-free cashless repairs across India</p>
          </div>

          <div className="feature-card">
            <h4>IL Take Care app</h4>
            <p>✔ Instant policy issuance</p>
            <p>✔ Quick claim settlement</p>
          </div>

          <div className="feature-card">
            <h4>Unique add-ons</h4>
            <p>✔ Buy add-ons to enhance your cover</p>
            <p>✔ Reduce repair expenses</p>
          </div>

          <div className="feature-card">
            <h4>Customised covers</h4>
            <p>✔ Choose as per your usage and needs</p>
            <p>✔ Affordable premium</p>
          </div>

          <div className="feature-card">
            <h4>No claim bonus transfer</h4>
            <p>✔ Avoid losing NCB, transfer it easily</p>
          </div>

          <div className="feature-card">
            <h4>Reliable customer support</h4>
            <p>✔ 300+ branches across India</p>
            <p>✔ 24x7 call and chat assistance</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PlanComparison;
