import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import "./about.css";
// import useScrollHandler from "../../hooks/useScrollHandler";
import oldpic3 from "./oldpic3.jpg";

const AboutText = () => {
//   const isLineActive = useScrollHandler("ShortLine");

  return (
    <div className="About ">
      <Grid container spacing={3}>
        <Grid className="AboutText" item xs={12} sm= {12} md={12} lg={6}>
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
              <strong>Artificial Intelligence</strong>.
            </p>
            <br />
            <p>
              At ConstructorHack, we believe in the transformative power of
              technology, and our mission is to provide a dynamic platform for
              individuals to explore new frontiers and embark on innovative
              ventures. We empower attendees to seize the reins in this
              thrilling field and contribute to shaping the future.
            </p>
        </Grid>
        <Grid item xs={12} sm={6} md={12} style={{ padding: "135px 75px", height: "100px",width:"200px" }}>
          <img src={oldpic3} />
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutText;
