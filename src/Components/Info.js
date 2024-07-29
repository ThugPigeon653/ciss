import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        Experience personalized and dedicated support tailored to your needs. Our services 
        provide comprehensive assistance, expertly designed to enhance your well-being and 
        independence. Connect with a highly skilled support worker and coordinator who is 
        committed to offering expert assistance for daily activities, ensuring you live 
        comfortably and confidently. With personalized care plans, we create customized 
        strategies that cater to your unique requirements, helping you achieve your goals. 
        You can rely on our ongoing support to navigate and coordinate NDIS plans, access 
        community services, and more.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Personalized Support Services"
          description="Our personalized support services are designed to assist you in daily 
          activities and enhance your quality of life. Whether you need help with personal care, 
          household tasks, or accessing community resources, you can rely on dedicated support 
          tailored to your specific needs, ensuring comfort and confidence every day."
          icon={faTruckMedical}
        />

        <InformationCard
          title="NDIS Plan Coordination"
          description="Navigating the NDIS can be complex, but our expert support coordination 
          makes it simple and stress-free. We work closely with you to understand your goals, 
          develop personalized plans, and connect you with the right services and providers. Our 
          aim is to empower you to make informed choices and achieve the best outcomes."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Comprehensive Care Management"
          description="We offer comprehensive care management to ensure all aspects of your well-being 
          are addressed. From coordinating medical appointments and therapies to providing emotional 
          support and advocacy, our holistic approach ensures you receive continuous and compassionate care."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
