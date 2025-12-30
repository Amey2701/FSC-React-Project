import React, { useState } from "react";
import "./CashlessGarage.css";

const CashlessGarage = () => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (!city.trim()) return;

    const query = encodeURIComponent(`cashless garage near ${city}`);
    const url = `https://www.google.com/maps/search/${query}`;
    window.open(url, "_blank");
  };

  return (
    <section className="cashless-garage">
      <div className="cashless-container">

        {/* LEFT IMAGE */}
        <div className="cashless-image">
          <img
            src="https://www.icicilombard.com/docs/default-source/apps/fwfresh/fw-landing/images/il-locate-img.svg"
            alt="Locate Cashless Garage"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="cashless-content">
          <h2>Locate your nearest cashless garage</h2>

          <p className="network-text">We have a network of</p>

          <h3>
            6900+ <span>cashless garages</span>
          </h3>

          {/* SEARCH BAR */}
          <div className="garage-search">
            <span className="location-icon">📍</span>
            <input
              type="text"
              placeholder="Search by city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button onClick={handleSearch}>Find garage</button>
          </div>

          {/* INFO BOX */}
          <div className="garage-info">
            <div className="info-header">
              <p>
                For doorstep cashless claims, call <strong>1800 2666</strong>
              </p>
              <span className="new-tag">NEW</span>
            </div>

            <div className="info-points">
              <ul>
                <li>Car pick-up & drop</li>
                <li>Service quality assurance</li>
              </ul>
              <ul>
                <li>Dedicated claim manager</li>
                <li>Regular WhatsApp updates & tracking</li>
              </ul>
            </div>

            <div className="info-footer">
              <a
  href="https://www.icicilombard.com/blogs/car-insurance/car/icici-lombards-cashless-doorstep-claims"
  target="_blank"
  rel="noopener noreferrer"
>
  Know more
</a>

              <span className="tc">T&C apply</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CashlessGarage;
