import React from "react";
import "./welcome.css";
import videoBg from "../../assets/pexels_videos_2699 (1080p).mp4";
import logo from "../../assets/Artificial (3).png";
import { Box } from "@mui/material";
import WelcomeImg from "../../assets/welcomeBgImage.png";

const Welcome = () => {
  return (
    <section id="welcome-section" className="welcome-section">
      <div className="welcomeWrapper">
        {/* <img src={logo} height="110%"/> */}
        <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <video src={videoBg} autoPlay loop muted />
          <div className="videoBox">
            <img src={logo} height="110%" />
          </div>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
          <img src={WelcomeImg} height="350px" width="100%" />
          <div className="videoBox" style={{top:"-280px"}}>
            <img src={logo} height="45%" />
          </div>
        </Box>
      </div>
    </section>
  );
};

export default Welcome;
