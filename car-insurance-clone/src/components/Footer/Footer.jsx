import { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [openSection, setOpenSection] = useState(1);

  const toggle = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <footer className="footer">
      {/* TOP COMPANY INFO */}
      <div className="footer-top">
        <p className="footer-company">
          <strong>ICICI Lombard General Insurance Company Limited,</strong><br />
          ICICI Lombard House, 414, Veer Savarkar Marg, Near Siddhi Vinayak Temple,
          Prabhadevi, Mumbai – 400025.<br />
          Reg. No.115 | Email: customersupport@icicilombard.com |
          Fax: 022 61961323 | Contact: 1800 2666 (24×7)
        </p>

        <div className="footer-social-apps">
          <div className="social-icons">

            <a
              href="https://www.facebook.com/ICICILombard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.svgrepo.com/show/447133/facebook-fill.svg"
                alt="Facebook"
              />
            </a>

            <a
              href="https://www.instagram.com/icicilombardofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSouX7pHV9Qaz3Akg3qvyWK0z2nhWlqgR4QMw&s"
                alt="Instagram"
              />
            </a>

            <a
              href="https://twitter.com/ICICILombard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvlm9zIkKU6cnPWJJN6QNN7fppxwnR3R13bQ&s"
                alt="Twitter"
              />
            </a>

            <a
              href="https://www.youtube.com/user/ICICILombardLtd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Fa9hsJFTOUERGm182bu975KN1svwkFRuaA&s"
                alt="YouTube"
              />
            </a>

            <a
              href="https://www.linkedin.com/company/icici-lombard?trk=tyah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwIhma57Y8HRQFVI_A5jZ7Fe8iSF1yhJSETQ&s"
                alt="LinkedIn"
              />
            </a>

          </div>

          <div className="app-links">
            <span>IL TakeCare App</span>
            <img src="/images/google-play.png" alt="Google Play" />
            <img src="/images/app-store.png" alt="App Store" />
          </div>
        </div>
      </div>

      {/* DROPDOWN 1 */}
      <div className="footer-dropdown">
        <div className="dropdown-header" onClick={() => toggle(1)}>
          Products
          <span>{openSection === 1 ? "▲" : "▼"}</span>
        </div>

        {openSection === 1 && (
          <div className="dropdown-grid">
            <ul>
              <li><strong>Products</strong></li>
              <li>Motor Insurance</li>
              <li>Car Insurance</li>
              <li>Two Wheeler Insurance</li>
              <li>Health Insurance</li>
              <li>Travel Insurance</li>
              <li>Business Insurance</li>
            </ul>

            <ul>
              <li><strong>Services</strong></li>
              <li>Customer Support</li>
              <li>Retrieve Quote</li>
              <li>Renew Policy</li>
              <li>Portability</li>
            </ul>

            <ul>
              <li><strong>Legal</strong></li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
              <li>Do Not Call Registry</li>
              <li>Ombudsman</li>
            </ul>

            <ul>
              <li><strong>About Us</strong></li>
              <li>Overview</li>
              <li>CSR</li>
              <li>Investor Relations</li>
              <li>Media</li>
            </ul>

            <ul>
              <li><strong>Others</strong></li>
              <li>Agents Portal</li>
              <li>Corporate Login</li>
              <li>Sitemap</li>
            </ul>
          </div>
        )}
      </div>

      {/* DROPDOWN 2 */}
      <div className="footer-dropdown">
        <div className="dropdown-header" onClick={() => toggle(2)}>
          Info Center
          <span>{openSection === 2 ? "▲" : "▼"}</span>
        </div>

        {openSection === 2 && (
          <div className="dropdown-grid">
            <ul>
              <li><strong>Info Center</strong></li>
              <li>Cashless Garages</li>
              <li>Branch Network</li>
              <li>Blogs</li>
              <li>FAQs</li>
            </ul>

            <ul>
              <li><strong>Renewal</strong></li>
              <li>Car Policy Renewal</li>
              <li>Bike Policy Renewal</li>
              <li>Health Policy Renewal</li>
            </ul>

            <ul>
              <li><strong>Claim</strong></li>
              <li>Motor Claims</li>
              <li>Health Claims</li>
              <li>Travel Claims</li>
            </ul>

            <ul>
              <li><strong>Help</strong></li>
              <li>Live Chat</li>
              <li>Whatsapp Support</li>
              <li>Grievance Redressal</li>
            </ul>

            <ul>
              <li><strong>Reviews</strong></li>
              <li>Car Insurance Reviews</li>
              <li>Health Insurance Reviews</li>
            </ul>
          </div>
        )}
      </div>

      {/* DROPDOWN 3 */}
      <div className="footer-dropdown">
        <div className="dropdown-header" onClick={() => toggle(3)}>
          Insurance Categories
          <span>{openSection === 3 ? "▲" : "▼"}</span>
        </div>

        {openSection === 3 && (
          <div className="dropdown-grid">
            <ul>
              <li><strong>Car Insurance</strong></li>
              <li>Comprehensive</li>
              <li>Third Party</li>
              <li>Zero Dep</li>
            </ul>

            <ul>
              <li><strong>Two Wheeler</strong></li>
              <li>Bike Insurance</li>
              <li>Long Term</li>
            </ul>

            <ul>
              <li><strong>Health</strong></li>
              <li>Family Health</li>
              <li>Senior Citizen</li>
              <li>Critical Illness</li>
            </ul>

            <ul>
              <li><strong>Travel</strong></li>
              <li>Student Travel</li>
              <li>International</li>
            </ul>

            <ul>
              <li><strong>SME</strong></li>
              <li>Marine</li>
              <li>Cyber</li>
              <li>Liability</li>
            </ul>
          </div>
        )}
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          ICICI Lombard General Insurance Company Ltd. is one of India’s leading
          private sector general insurance companies.
        </p>

        <div className="trust-logos">
          <img src="https://www.icicilombard.com/docs/default-source/assets/images/entrust.png" />
          <img src="https://www.icicilombard.com/docs/default-source/assets/images/digicert.png" />
          <img src="https://www.icicilombard.com/docs/default-source/assets/images/bima_bharosa.png" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
