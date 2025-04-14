import React from "react";
import SupportWorker from "../Assets/support-worker-01.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={SupportWorker} alt="Support Worker" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to Christine Walton Independent Support Services, your trusted partner for accessible and
          personalised support. With years of industry experience, we offer online consultations
          and specialised services, prioritising your well-being. Join us on
          this journey towards a healthier you.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>
        <SolutionStep
          title="Choose Your Support"
          description="Find the perfect support worker or coordinator tailored to your unique needs. Our experienced professionals are dedicated to providing compassionate and expert assistance, prioritizing your well-being."
        />

        <SolutionStep
          title="Schedule with Ease"
          description="Select the date and time that suits you best, and enjoy the convenience of personalized care at your doorstep. Our dedicated team ensures seamless and reliable support coordination."
        />

        <SolutionStep
          title="Achieve Your Goals"
          description="Receive expert guidance and personalized care plans designed to help you achieve your goals. Whether it's daily support or navigating NDIS plans, we are here to ensure your success and independence."
        />

      </div>
    </div>
  );
}

export default About;
