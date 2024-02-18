import React from "react";
import { Grid } from "@mui/material";
import "./WhatAndWho.css";
import useScrollHandler from "../../hooks/useScrollHandler";
function WhattoExpect() {
  const isLineActive = useScrollHandler("WhattoExpect");
  return (
    <div className="WhattoExpect">
      <div className="WhattoExpectHeader">What to Expect</div>
      <div
        style={{ width: "40%", borderBottom: "1px solid #000" }}
        className="HorizontalLine"
      ></div>
      <div
        style={{ width: "7%", left: "165.8px" }}
        className={`ShortHorizontalLine ${isLineActive ? "active" : ""}`}
      ></div>
      <div className="WhattoExpectWrapper">
        <Grid container spacing={3}>
          <Grid item md={6}>
            <p className="FirstParagraph">
              ConstructorHack 2024 is more than just a hackathon. It's an
              extraordinary community of developers, designers, and innovators.
              Our devoted team has crafted an event that combines challenges
              with inspiration, offering abundant opportunities for learning,
              collaboration, and fun. No matter your experience level,
              ConstructorHack 2024 is where you belong.
            </p>
          </Grid>
          <Grid item md={6}>
            <p className="SecondParagraph">
              {" "}
              Throughout the 24-hour hackathon, our lineup includes workshops,
              tech talks, and, of course, the hackathon itself. Accompanied by
              seasoned mentors providing guidance and support, you'll have the
              chance to network with like-minded individuals. Don't worry about
              staying fueled up; we've got an array of delicious food, drinks,
              and snacks to keep you going!
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default WhattoExpect;
