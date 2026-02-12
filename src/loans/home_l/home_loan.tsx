import "./home_loan.css";
import heroHouse from "../../assets/hl/home.jpg";
import applyImg from "../../assets/hl/apply.jpg";
import flexibleImg from "../../assets/hl/flex.jpg";
import emiImg from "../../assets/hl/emi.jpg";
import supportImg from "../../assets/hl/support.jpg";
import eligibilityImg from "../../assets/hl/eli.jpg";
import loanTypesImg from "../../assets/hl/lt.jpg";
import lo from "../../assets/fp/lo.png"
import familyImg from "../../assets/hl/fam.jpg";

const HomeLoan = () => {
  return (
    <div className="home-loan">

      {/* HERO */}
      <section className="hl-hero">
        <div className="hl-hero-left">
          <img src={heroHouse} alt="Home" />
        </div>
        <div className="hl-hero-right">
          <h1>Home Loan</h1>
          <h3>Own your dream home with confidence</h3>
          <p>
            Get the right home loan with expert guidance from Khushi Finance.
            We help you choose the right housing loan, plan your EMIs and complete
            your application smoothly.
          </p>
          <button className="hl-btn-primary">APPLY NOW</button>
        </div>
      </section>


      {/* FEATURES */}
      <section className="hl-features">

        {/* TITLE */}
        <h2 className="hl-section-title">
          <span> Home</span> Loan <span>  Made</span> Simple
        </h2>

        <div className="hl-feature">
          <div className="hl-feature-text-right">
            <h3>Quick and easy online home loan application</h3>
            <p>Apply digitally with guided support and minimal paperwork.</p>
          </div>
          <img src={applyImg} alt="apply" />
        </div>

        <div className="hl-feature">
          <img src={flexibleImg} alt="flexible" />
          <div className="hl-feature-text-left">
            <h3>Flexible loan amount and tenure</h3>
            <p>Select a loan amount and repayment period that fits your budget.</p>
          </div>
        </div>

        <div className="hl-feature">
          <div className="hl-feature-text-right">
            <h3>Structured EMI planning</h3>
            <p>Plan your monthly EMI clearly and stay financially comfortable.</p>
          </div>
          <img src={emiImg} alt="emi" />
        </div>

        <div className="hl-feature">
          <img src={supportImg} alt="support" />
          <div className="hl-feature-text-left">
            <h3>Support for salaried and self-employed applicants</h3>
            <p>We assist working professionals and buisness owners
              <br />End-to-end guidance till disbursal.</p>
          </div>
        </div>

      </section>

      {/* SUPPORT BANNER */}
      <section className="hl-support-banner">
        <img src={eligibilityImg} alt="eligibility" />
        <h3>
          From eligibility check to approval and disbursal,
          we support you fully.
        </h3>
      </section>

      {/* LOAN TYPES */}
      <section className="hl-loan-types">
        <div className="hl-loan-text">
          <h3>Buy, build or switch your home loan</h3>
          <ul>
            <li>Home purchase loan</li>
            <li>Construction home loan</li>
            <li>Home loan balance transfer</li>
            <li>Top-up on existing home loan</li>
          </ul>
        </div>
        <img src={loanTypesImg} alt="home" />
      </section>

      {/* CTA */}
      <section className="hl-cta">
        <div className="hl-cta-fam">
          <img src={familyImg} alt="family image" className="cta-fam" />
          <div>
            <img src={lo} alt="logo" className="ct-lo" />
            <h3>Start your home loan journey today</h3>
            <p>
              Apply for a home loan with Khushi Finance and move closer to your dream home with clarity and confidence.
            </p>
          </div>
        </div>
        
        <div className="hl-cta-buttons">
          <button className="hl-cta-btn-primary">APPLY NOW</button>
          <button className="hl-cta-btn-secondary">CONTACT US</button>
        </div>

      </section>

    </div>
  );
};

export default HomeLoan;
