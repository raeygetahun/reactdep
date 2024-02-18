import React from "react";
import { Grid } from "@mui/material";
import "./WhatAndWho.css";
import useScrollHandler from "../../hooks/useScrollHandler";
function WhoCanParticpate() {
  const isLineActive = useScrollHandler("WhoCanParticpate");
  return (
    <div className="WhoCanParticpate">
      <div className="WhoCanParticpateHeader">Who can Particpate</div>
      <div
        style={{
          width: "40%",
          backgroundColor: "#ffff",
          borderBottom: "1px solid #fff",
        }}
        className="HorizontalLine"
      ></div>
      <div
        style={{ width: "7%", left: "165.5px", borderTop: "3px solid #ffff" }}
        className={`ShortHorizontalLine ${isLineActive ? "active" : ""}`}
      ></div>
      <div className="WhoCanParticpateWrapper">
        <Grid container spacing={3}>
          <Grid item md={6}>
            <p className="FirstParagraph">
              ConstructorHack welcomes students from every corner of Europe who
              share a passion for technology and innovation. No specific
              requirements are needed to join the excitement; all you need is
              the desire to learn and collaborate. Whether you're a computer
              science guru or a creative writing aficionado, ConstructorHack has
              a spot for you.
            </p>
          </Grid>
          <Grid item md={6}>
            <p className="SecondParagraph">
              {" "}
              Come join us and be a part of the next generation of innovators
              and entrepreneurs! Click the button below to apply now.
              <br />
              <br />
              <a className="applyWrapper" href="https://constructorhack.onrender.com/">
                Pre-register
              </a>
              <div className="applyarrowDirection">&#x1F862;</div>
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default WhoCanParticpate;
