import React from 'react';
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.instagram.com/constructorhack/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://www.tiktok.com/@constructorhack23" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/company/constructorhack/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
      </div>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} ConstructorHack. All rights reserved.
        <br/>
        Designed and Developed by IT and Design Team.
      </p>
    </footer>
  );
};

export default Footer;
