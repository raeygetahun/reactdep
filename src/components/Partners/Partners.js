import React, { useEffect, useState, useRef } from "react";
import usgLogo from "../../assets/partners/usgLogo.jpeg";
import nehlsen from "../../assets/partners/nehlsen.png";
import Makersite_logo from "../../assets/partners/Makersite_logo.svg";
import microsoft from "../../assets/partners/microsoft.svg";
import gsa_logo from "../../assets/partners/gsa_logo.png";
import Yelp from "../../assets/partners/Yelp_fullcolor_lightbg_RGB.png";
import "./partners.css";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import useScrollHandler from "../../hooks/useScrollHandler";

const imageSources = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://s3.amazonaws.com/challengepost/sponsors/logos/000/001/630/highres/Twilio_logo_red.png",
  Makersite_logo,
  "https://upload.wikimedia.org/wikipedia/commons/9/91/Logo_of_Red_bull.svg",
  usgLogo,
  Yelp,
  "https://upload.wikimedia.org/wikipedia/commons/9/94/Skyscanner_Logo_LockupHorizontal_SkyBlue_RGB.svg",
  microsoft,
  nehlsen,
];

const linkSources = [
  "https://www.google.com",
  "https://www.twilio.com",
  "https://makersite.io/",
  "https://www.redbull.com",
  "https://www.usg.com",
  "https://www.nehlsen.com",
  "https://www.microsoft.com",
  "https://www.yelp.com",
  "https://www.skyscanner.com",
];

const PartnersElement = ({ index, isLineActive }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(isLineActive);
    }, index * 500);

    return () => clearTimeout(timer);
  }, [index, isLineActive]);

  return (
    <Grid item xs={4} key={index}>
      {linkSources[index] ? (
        <a href={linkSources[index]} target="_blank" rel="noopener noreferrer">
          <img
            className={`partnersimage ${isActive ? "active" : ""}`}
            src={imageSources[index]}
            alt="about"
          />
        </a>
      ) : (
        <img
          className={`partnersimage ${isActive ? "active" : ""}`}
          src={imageSources[index]}
          alt="about"
        />
      )}
    </Grid>
  );
};

const Partners = () => {
  const isLineActive = useScrollHandler("line-partners");
  const movingElementPartnersRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("welcome-section");
      const sectionTop = section.offsetTop;
      const sectionBottom = (sectionTop + section.offsetHeight) / 2;

      if (window.scrollY >= sectionBottom) {
        movingElementPartnersRef.current.classList.add(
          "moving-element-partners"
        );
      } else {
        movingElementPartnersRef.current.classList.remove(
          "moving-element-partners"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="partners-section" className="partners-section">
      <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
        <div className="content-container-partners">
          <div className="line-partners">
            <div
              className="moving-element-partners"
              ref={movingElementPartnersRef}
            ></div>
          </div>
          <div className="text-container-partners">
            <h1>PREVIOUSLY PARTNERED WITH</h1>
            <br />
            <p>
              We are proud to partner with some of the most innovative companies
              and organizations.
            </p>
          </div>
          <div className="image-container-partners">
            <Grid container spacing={3}>
              {imageSources.map((_, index) => (
                <PartnersElement
                  key={index}
                  index={index}
                  isLineActive={isLineActive}
                />
              ))}
            </Grid>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default Partners;
