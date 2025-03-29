import React from "react";
import styles from "../styles/Footer.module.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Left Section - Brand Info */}
        <div className={styles.footerBrand}>
          <h3>Kelvin Njenga Kamau</h3>
          <p>Full-Stack Developer | Digital Marketer</p>
          <p>Creating seamless web experiences and innovative solutions.</p>
        </div>

        {/* Center Section - Quick Links */}
        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact & Socials */}
        <div className={styles.footerContact}>
          <h3>Contact</h3>
          <p>
            <FaPhoneAlt /> +254 703 642 280
          </p>
          <p>
            <FaEnvelope /> njengak993@gmail.com
          </p>
          <div className={styles.socialIcons}>
            <a href="https://github.com/Njenga993" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kelvin-kamau-788160277"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.footerBottom}>
        <p>
          © {new Date().getFullYear()} Kelvin Njenga Kamau . All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
