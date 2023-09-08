import React from "react";
import "./WhyHackCon.css";
import {Box} from "@mui/material"
import useScrollHandler from "../../../hooks/useScrollHandler";

const WhyHackCon = () => {
  const isLineActive = useScrollHandler("parallax"); // Replace "targetClassName" with the actual class name of your target element

  return (
    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} style={{ height: "auto", margin: "0 auto" }}>
      <div  class="parallax">
        <div  className={`box ${isLineActive ? "active" : ""}`}>
          <div  className="VerticalLine"></div>
          <div  className={`ShortLine ${isLineActive ? "active" : ""}`}></div>
          <span  className="header-text">WHY ConstructorHack</span>
          <span  className="title-text">A Different Kind of<br></br> Hackathon</span>{" "}
          <p  className="body-text">
            At ConstructorHack, we go beyond just building cool projects. It's
            about fostering collaboration among like-minded individuals and
            offering an environment that sparks creativity, nurtures innovation,
            and promotes continuous learning. Experience a unique blend of
            technical prowess and imaginative thinking as you dive into the
            world of AI.
          </p>
        </div>
      </div>
      {/* <div className={`box ${isLineActive ? "active" : ""}`}>
        <span className="header-text">WHY ConstructorHack</span>
        <span className="title-text">A Different Kind of Hackathon</span>{" "}
        <p className="body-text">
          ConstructorHack is not just about building cool projects. It's about
          collaborating with like-minded individuals and learning from experts
          in the field of AI. We provide a unique environment that fosters
          creativity, innovation, and learning.
        </p>
        <a
          className="learn-more"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        >
          Learn More
          <span className="arrow"></span>
        </a>
      </div>
      <div className="image-container">
        <img
          src={firstScreenImage}
          alt="ConstructorHack"
          style={{ maxWidth: "40%", maxHeight: "600px" }}
        />
      </div> */}
    </Box>
  );
};

export default WhyHackCon;
