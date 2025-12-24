import React from "react";
import "./ScrollNav.css";

const ScrollNav = ({ links }) => {
  return (
    <div className="scroll-nav-container">
      <div className="scroll-nav-inner">

        <ul>
          <li onClick={links.hero}>Car Insurance</li>
          <li onClick={links.features}>Why ICICI Lombard</li>
          <li onClick={links.info}>Inclusions & Exclusions</li>
          <li onClick={links.addons}>Add-ons</li>
          <li onClick={links.policy}>Online Policy</li>
          <li onClick={links.premium}>Premium</li>
          <li onClick={links.save}>Save on premium</li>
          <li onClick={links.faqs}>FAQs</li>
          <li onClick={links.reviews}>Reviews</li>
        </ul>

        <button className="scroll-nav-btn">
          Get Car insurance quote
        </button>

      </div>
    </div>
  );
};

export default ScrollNav;
