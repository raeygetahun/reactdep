import React from "react";
import "./speakers.css";

const TechTalks = () => {
  return (
    <div className="tech-talks-container">
      <div className="content-container">
        <div className="header-subcomponent">
          <h1>TECH TALKS</h1>
        </div>
        <div className="body-subcomponent">
          <p>
            Prepare to be inspired and enlightened! Our exclusive tech talks
            feature AI experts sharing their insights on the latest trends and
            groundbreaking technologies in the field of Artificial Intelligence.
            Be ready to gain invaluable knowledge and fresh perspectives
            throughout this engaging day of learning.
          </p>
          <a className="learnMoreWrapper" href="#">
            Learn More
          </a>
          <div className="arrowDirection">&#x1F862;</div>
        </div>
      </div>
      <div className="image-subcomponent">
        {/* <img style={{ height: "1000px" }} src={firstPageImage} alt="HackCon" /> */}
      </div>
    </div>
  );
};

export default TechTalks;
