import "./Footer.css";
import coin from "../assets/coin.png";

const Footer = () => {
  return (
    <section className="about-khushi">

      {/* tittle + text */}
      <div className="about-container">
        <div className="about-title">
          <div className="coin_image">
            <img src={coin} alt="About Khushi Finance" />
          </div>

          <div className="title_text">
            <h2><u>About Khushi Finance</u></h2>
          </div>

          <div className="coin_image">
            <img src={coin} alt="About Khushi Finance" />
          </div>
        </div>

        <div className="about-text">
          <p>
            Khushi Finance is a financial consultation and loan advisory firm
            committed to helping people make confident, well-informed money
            decisions.
          </p>
        </div>
      </div>

      {/* all links */}
      <div className="link-groups">
        <div className="quick-links">

          <div className="links-title">
            <h2>Quick Links</h2>
          </div>

          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Loans</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>

        </div>

        <div className="services-links">
          <div className="services-title">
            <h2>Our Services</h2>
          </div>

          <ul>
            <li>Financial Consultation</li>
            <li>Personal Loans</li>
            <li>Home Loans</li>
            <li>Business Loans</li>
            <li>Education Loans</li>
          </ul>
        </div>
      </div>

      {/* contact us */}
      <div className="contactUs">
        <h3>Contact Us</h3>
        <p className="lo"><i className="fa-solid fa-location-dot"></i> Bengaluru, India</p>
        <p className="ph"><i className="fa-solid fa-phone"></i> +91 94483 35635</p>
        <p className="em"><i className="fa-solid fa-envelope"></i> support@khushifinance.com</p>
      </div>

      {/* bottom */}
      <div className="footer-bottom">
        <p>
          © 2026 Khushi Finance. Created by TechVaraha Solution Pvt Ltd.
          All rights reserved. Investments and loans are subject to eligibility and market.
        </p>
      </div>

    </section>
  );
};

export default Footer;
