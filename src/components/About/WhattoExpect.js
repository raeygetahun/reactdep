import React, { useEffect, useState } from "react";
import styles from "./about.css";

const WhattoExpect = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className="header">
        <h2>What To Expect</h2>
        <div
          className="line"
          style={{ transform: `translateX(${scrollPosition}px)` }}
        ></div>
      </div>
      <div className="textdiv">
        <p>
          ConstructorHack 2024 is more than just a hackathon – it's an
          extraordinary community of developers, designers, and innovators. Our
          devoted team has crafted an event that combines challenges with
          inspiration, offering abundant opportunities for learning,
          collaboration, and fun. No matter your experience level,
          ConstructorHack 2024 is where you belong.
        </p>
        <p>
          Throughout the 24-hour hackathon, our lineup includes workshops, tech
          talks, and, of course, the hackathon itself. Accompanied by seasoned
          mentors providing guidance and support, you'll have the chance to
          network with like-minded individuals. Don't worry about staying fueled
          up; we've got an array of delicious food, drinks, and snacks to keep
          you going!
        </p>
      </div>
    </div>
  );
};

export default WhattoExpect;
