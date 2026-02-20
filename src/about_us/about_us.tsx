import "./about_us.css";
import { useState } from "react";

import logo from "../assets/logo.png"; // replace with your logo path

type ContactPopupProps = {
  onClose: () => void;
};

const ContactPopup = ({ onClose }: ContactPopupProps) => (
  <div className="au-popup-overlay">
    <div className="au-popup">

      <button className="au-close-btn" onClick={onClose}>
        <i className="fa-solid fa-x"></i>
      </button>

      <h3>Contact Us</h3>

      <button
        className="au-popup-btn-whatsapp"
        onClick={() => window.open("https://wa.me/9739871634", "_blank")}
      >
        <i className="fa-brands fa-whatsapp"></i> WhatsApp
      </button>

      <a href="tel:+919739871634" className="au-popup-btn-call">
        <i className="fa-solid fa-phone"></i> Call Now
      </a>

    </div>
  </div>
);

const AboutUs = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleContactClick = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = "tel:+919739871634";
    } else {
      setShowPopup(true);
    }
  };

  return (
    <>
      <section className="about-page">
        <div className="about-wrapper">

          {/* LEFT CARD */}
          <div className="about-card">
            <img src={logo} alt="Khushi Finance" className="about-logo" />

            <h3 className="owner-name">RAVI H R</h3>
            <p className="owner-role">OWNER</p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=support@khushifinance.com&su=Loan%20Application&body=Hi%20Khushi%20Finance%20Team,%0A%0AI%20want%20to%20apply%20for%20a%20loan.%0A%0AName:%0APhone:%0ALoan%20Type:%0AAmount:%0A%0AThanks"
              target="_blank"
              rel="noopener noreferrer"
              className="email-btn"
            >
              Email Us
            </a>





            {/* SOCIAL ICONS */}
            <div className="social-icons">

              <a
                href="https://instagram.com/YOUR_PAGE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="https://twitter.com/YOUR_PAGE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>

              <a
                href="https://facebook.com/YOUR_PAGE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href="https://linkedin.com/company/YOUR_PAGE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="about-content2">
            <h2>About Khushi Finance</h2>

            <ul>
              <li>
                At Khushi Finance, we believe money decisions should never feel confusing,
                stressful, or rushed.
              </li>
              <li>
                We started Khushi Finance with one simple goal to help people make better
                financial choices with clarity and confidence. Whether you are planning your
                future, managing your monthly expenses, or looking for the right loan, our
                team is here to guide you honestly and responsibly.
              </li>
              <li>
                We take time to understand your income, expenses, commitments and life goals
                before suggesting any solution. Our advice is always practical, transparent
                and tailored to what truly works for you, not just what looks good on paper.
              </li>
              <li>
                From personal financial planning and cash flow support to home loans,
                personal loans and business funding, Khushi Finance stands by you at every
                stage of your financial journey as a trusted partner you can rely on today
                and in the years ahead.
              </li>
            </ul>

            <div className="about-buttons">
              <button className="apply-btn" onClick={() => setShowPopup(true)}>Apply for a Loan</button>
              <button className="talk-btn" onClick={handleContactClick}>Talk to an Advisor</button>
            </div>
          </div>

        </div>
      </section>

      {showPopup && <ContactPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default AboutUs;
