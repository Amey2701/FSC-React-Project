import React from "react";
import "./BlogArticles.css";

const BlogArticles = () => {
  return (
    <section className="blog-section">
      <h2>Two wheeler insurance blog articles</h2>

      <div className="blog-grid">
        <div className="blog-card">
          <h4>Ather 450X and 450S electric scooter specifications</h4>
          <p>Comparing performance, range, pricing and insurance needs.</p>
          <span>14 Dec 2025</span>
        </div>

        <div className="blog-card">
          <h4>Triumph Speed 400 specifications</h4>
          <p>Complete engine, performance and insurance overview.</p>
          <span>16 Dec 2025</span>
        </div>

        <div className="blog-card">
          <h4>TVS iQube specifications and features</h4>
          <p>Battery, variants, riding modes and coverage needs.</p>
          <span>18 Dec 2025</span>
        </div>
      </div>

      <a
        href="https://www.icicilombard.com/blogs/two-wheeler-insurance"
        target="_blank"
        rel="noreferrer"
        className="blog-btn"
      >
        Read more articles
      </a>
    </section>
  );
};

export default BlogArticles;
