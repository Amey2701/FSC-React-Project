import React, { useState } from 'react';
import './PolicySlider.css';

const policies = [
  {
    title: "Comprehensive car insurance policy",
    desc: "Comprehensive car insurance is a type of car insurance that offers complete protection for your vehicle. It covers both own damage and third-party liabilities.",
    img: "https://www.icicilombard.com/docs/default-source/assets/car-landing-new/images/stand-alone-damage.png" // Replace with image URL
  },
  {
    title: "Third party car insurance",
    desc: "A third-party liability car insurance covers damages or losses incurred to another person, their vehicle or property.",
    img: "https://www.icicilombard.com/docs/default-source/assets/car-landing-new/images/thrid-party.png"
  },
  {
    title: "Zero Depreciation car insurance",
    desc: "As your car ages, the value of its parts decreases. With Zero Depreciation cover, the company offers 100% coverage for parts.",
    img: "https://www.icicilombard.com/docs/default-source/assets/car-landing-new/images/zero-deprecation.png"
  }
];

const PolicySlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === policies.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? policies.length - 1 : current - 1);
  };

  return (
    <section className="slider-section">
      <h2>What are the different types of car insurance policies?</h2>
      <div className="slider-container">
        <button onClick={prevSlide} className="nav-btn left">←</button>
        
        <div className="slide-card">
          <div className="slide-img">
             {/* Dynamic Image */}
             <div className="placeholder-img">Image</div> 
          </div>
          <div className="slide-content">
            <h3>{policies[current].title}</h3>
            <p>{policies[current].desc}</p>
          </div>
        </div>

        <button onClick={nextSlide} className="nav-btn right">→</button>
      </div>
    </section>
  );
};

export default PolicySlider;