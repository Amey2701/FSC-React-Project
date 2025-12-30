import React from "react";
import "./RenewPolicy.css";

const RenewPolicy = () => {
  return (
    <section className="renew-section">
      <div className="renew-grid">

        {/* LEFT
        <div className="renew-left">
          <h2>How to renew a two-wheeler insurance policy?</h2>
          <p>You can quickly renew your two-wheeler insurance policy online in a few clicks. All you need to do is:</p>

          <div className="renew-steps">
            <div><span>1</span> Visit the website of your insurer and check the bike renewal page</div>
            <div><span>2</span> Fill up the required details, including your vehicle number, existing policy details, etc</div>
            <div><span>3</span> Make the required payment online to renew your policy</div>
          </div>
        </div> */}

        {/* RIGHT */}
        <div className="renew-right">
          <h2>How to renew an expired two-wheeler insurance policy?</h2>
          <p>Failing to renew your policy within the due date results in expiry. You can renew it by following these steps:</p>

          <ul>
            <li>Visit the insurer’s website and provide your expired policy and vehicle registration details</li>
            <li>Opt for the desired coverage type and pay the premium</li>
            <li>Your policy gets renewed upon premium payment</li>
          </ul>

          <small>
            Note: Your insurer may inspect your bike before renewal due to a break in coverage.
          </small>
        </div>

      </div>
    </section>
  );
};

export default RenewPolicy;
