import React, { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import "./about.css";
import useScrollHandler from "../../hooks/useScrollHandler";
import oldpic3 from "../../assets/PreviousCompPics/oldpic3.jpg";

const AboutText = () => {
  const isLineActive = useScrollHandler("ShortLine");

  return (
    <div className="About ">
      <Grid container spacing={3}>
        <Grid className="AboutText" item xs={12} md={6}>
          <div className="VerticalLine"></div>
          <div className={`ShortLine ${isLineActive ? "active" : ""}`}></div>
          <div className="AboutTextWrapper">
            <h4>ABOUT ConstructorHack</h4>
            <br />
            <p>
              ConstructorHack is the thrilling student-run hackathon hosted at
              Constructor University, bringing together tech enthusiasts from
              all corners of Europe. For 24 adrenaline-fueled hours,
              participants collaborate on kick-ass projects while immersing
              themselves in programming challenges, engaging tech talks,
              exciting games, and epic Nerf-gun battles. Our theme for the 9th
              edition of ConstructorHack is{" "}
              <strong>Artificial Intelligence</strong>. Join us on{" "}
              <strong>November 18th-19th</strong> for an unforgettable
              experience.
            </p>
            <br />
            <p>
              At ConstructorHack, we believe in the transformative power of
              technology, and our mission is to provide a dynamic platform for
              individuals to explore new frontiers and embark on innovative
              ventures. We empower attendees to seize the reins in this
              thrilling field and contribute to shaping the future.
            </p>
          </div>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          style={{ padding: "135px 75px" }}
          display={{ xs: "none", md: "block" }}
        >
          <img src={oldpic3} />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          style={{
            padding: "125px 35px",
            paddingRight: "35px",
            height: "600px",
            width: "800px",
          }}
          display={{ xs: "block", md: "none" }}
        >
          <img src={oldpic3} />
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutText;
