import "./about_us.css";
import logo from "../assets/logo.png"; // replace with your logo path

const AboutUs = () => {
  return (
    <section className="about-page">
      <div className="about-wrapper">

        {/* LEFT CARD */}
        <div className="about-card">
          <img src={logo} alt="Khushi Finance" className="about-logo" />

          <h3 className="owner-name">RAVI H R</h3>
          <p className="owner-role">OWNER</p>

          <button className="email-btn">Email Us</button>

          <div className="social-icons">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-linkedin-in"></i>
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
            <button className="apply-btn">Apply for a Loan</button>
            <button className="talk-btn">Talk to an Advisor</button>
          </div>
        </div>

      </div>
    </section>

  );
};

export default AboutUs;
