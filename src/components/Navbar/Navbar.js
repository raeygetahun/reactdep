import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import oldpic3 from "../../assets/logo.png";
import { Box } from "@mui/material";
import "./navbar.css";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="logo">
        {/* <img src={oldpic3} height="100%" width="250px"/> */}
      </div>
      <ul className="nav-links">
        <li>
          <Link
            to="About"
            spy={false}
            smooth={true}
            offset={-30}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="schedule-container"
            spy={false}
            smooth={true}
            offset={-20}
            duration={1500}
          >
            Schedule
          </Link>
        </li>
        <li>
          <Link
            to="Contactcontainer"
            spy={false}
            smooth={true}
            offset={-70}
            duration={1500}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="team-section"
            spy={false}
            smooth={true}
            offset={0}
            duration={1500}
          >
            Team
          </Link>
        </li>
        <li>
          <Link
            to="FAQ-section"
            spy={false}
            smooth={true}
            offset={-20}
            duration={1500}
          >
            FAQ
          </Link>
        </li>
        <li>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <Link
              to="partners-section"
              spy={false}
              smooth={true}
              offset={-20}
              duration={1500}
            >
              Partners
            </Link>
          </Box>
        </li>
        <li>
          <Link>
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              <a
                className="MLHlogo"
                id="mlh-trust-badge"
                href="https://mlh.io/eu?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white"
                target="_blank"
              >
                <img
                  src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
                  alt="Major League Hacking 2023 Hackathon Season"
                  style={{
                    display: "block",
                    maxWidth: "100px",
                    minWidth: "60px",
                    position: "fixed",
                    right: "50px",
                    top: "-10px",
                    width: "10%",
                    zIndex: "10000",
                  }}
                />
              </a>
            </Box>
          </Link>
        </li>
      </ul>
      {/* <a
        className="MLHlogo"
        id="mlh-trust-badge"
        href="https://mlh.io/eu?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white"
        target="_blank"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
          alt="Major League Hacking 2023 Hackathon Season"
          style={{ width: "100%", height: "auto", maxHeight: "150px" }}
        />
      </a> */}

      {/* <img
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
        alt="Major League Hacking 2023 Hackathon Season"
        style={{ width: "100%", height: "150px" }}
      ></img> */}
    </nav>
  );
};

export default Navbar;
