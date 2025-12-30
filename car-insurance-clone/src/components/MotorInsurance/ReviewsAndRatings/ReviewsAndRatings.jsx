import React, { useState } from "react";
import "./ReviewsAndRatings.css";

const reviews = [
  {
    name: "Rajiv",
    rating: 5,
    text:
      "ICICI Lombard has extremely great motor insurance policies. I recently opted for a car insurance policy and I am very glad I did. The features and benefits of this policy are great and it was exactly what I was looking for.",
  },
  {
    name: "Farzan Juwle",
    rating: 4,
    text:
      "I was very much impressed by ICICI Lombard's motor insurance policy. It has a lot of great features and benefits. I needed a two-wheeler policy and found the perfect one.",
  },
  {
    name: "Subrahmanyam Kancharla",
    rating: 4,
    text:
      "I received clear and transparent information from customer support. The representative explained third party liability and personal accident cover clearly.",
  },
  {
    name: "Andrew Dsouza",
    rating: 5,
    text:
      "The representative was very helpful and patient while explaining the policy. All my doubts were clarified before making a decision.",
  },
  {
    name: "Amit Tamore",
    rating: 4,
    text:
      "Nice guidance and assistance offered. The salesperson helped me understand the policy features and benefits clearly.",
  },
  {
    name: "Naresh Kumar Jain",
    rating: 5,
    text:
      "Very good experience with ICICI Lombard. The agent was professional and ensured a smooth transaction.",
  },
];

const ReviewsAndRatings = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < reviews.length - 2) setIndex(index + 2);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 2);
  };

  const renderStars = (count) =>
    Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? "star filled" : "star"}>★</span>
    ));

  return (
    <section className="reviews-section">
      <div className="reviews-container">

        {/* HEADER */}
        <h2>Reviews and ratings</h2>

        <div className="rating-summary">
          <span className="rating-number">4.5</span>
          <span className="star filled">★</span>
          <div className="rating-text">
            <span>Our customers have rated us</span>
            <small>Based on 832 reviews</small>
          </div>
        </div>

        {/* SLIDER */}
        <div className="reviews-slider">
          <button className="nav-btn" onClick={prev}>‹</button>

          <div className="reviews-cards">
            {reviews.slice(index, index + 2).map((item, i) => (
              <div className="review-card" key={i}>
                <div className="review-header">
                  <strong>{item.name}</strong>
                  <div className="stars">{renderStars(item.rating)}</div>
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <button className="nav-btn" onClick={next}>›</button>
        </div>

        {/* DOT INDICATORS */}
        <div className="dots">
          {Array.from({ length: Math.ceil(reviews.length / 2) }).map((_, i) => (
            <span
              key={i}
              className={i * 2 === index ? "dot active" : "dot"}
            />
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://www.icicilombard.com/motor-insurance/two-wheeler-insurance/customer-reviews"
          target="_blank"
          rel="noreferrer"
          className="read-all-btn"
        >
          Read all reviews
        </a>

        {/* DISCLAIMER */}
        <div className="reviews-disclaimer">
          <h4>Disclaimers:</h4>
          <p>*The premium of ₹2094 applies to Motor Third Party Liability Insurance for private cars with cubic capacity of less than 1000 cc for a 1 year policy and may vary depending on the cubic capacity of the vehicle. The TP rates are provided by IRDAI and are subject to change as per the guidelines issued by authority from time to time.</p>

          <p>*Premium of ₹538 applies to Motor Third Party Liability Insurance for two wheelers with cubic capacity of less than 75 cc for a 1 year policy and may vary depending on the cubic capacity of the vehicle. The TP rates are provided by IRDAI and are subject to change as per the guidelines issued by authority from time to time.</p>

          <p>*Instant approval is subject to policy terms & conditions and type of loss/damage.</p>

          <p>*Discounts has been calculated on the basis of the rates prescribed under erstwhile Indian Motor Tariff. Discount applicable only to the Own Damage section and discount may vary as per the vehicle make, model, RTO, age of the vehicle.</p>

          <p>^^This is an add-on cover available by paying additional premium.</p>

          <p>##As on April 1, 2025</p>
        </div>

      </div>
    </section>
  );
};

export default ReviewsAndRatings;
