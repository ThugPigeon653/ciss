import React, { useEffect, useState } from "react";
import SupportWorker from "../Assets/support-worker.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Specialized Independant Support</p>
          <h2 className="text-title">
            Connect today for compassionate support
          </h2>
          <p className="text-descritpion">
            Discover your independent support worker for personalized care and assistance. 
            Whether you need help at home, guidance with daily tasks, or companionship, our 
            dedicated professionals are here to provide compassionate support tailored to 
            your needs. Connect with an independent support worker today to start receiving 
            the personalized care you deserve.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Schedule a Call
          </button>
          <div className="text-stats">
          <div className="text-stats-container">
            <p>100%</p>
            <p>Client Satisfaction</p>
          </div>

          <div className="text-stats-container">
            <p>100%</p>
            <p>Successful NDIS Plan Navigation</p>
          </div>

          <div className="text-stats-container">
            <p>10+</p>
            <p>Years of Experience</p>
          </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={SupportWorker} alt="SupportWorker" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
