import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import styles from "../styles/Navbar.module.css";

// Smooth scrolling function
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 50, // Adjust offset for navbar height
      behavior: "smooth",
    });
  }
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>K K</div>

      {/* Mobile Menu Button */}
      <button
        className={styles.mobileMenuBtn}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <nav className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <a onClick={() => scrollToSection("home")}>Home</a>
        <a onClick={() => scrollToSection("projects")}>Projects</a>
        <a onClick={() => scrollToSection("contact")}>Contact</a>
      </nav>

      {/* Social Media Icons */}
      <div className={styles.socialIcons}>
        <a
          href="https://github.com/Njenga993"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kelvin-kamau-788160277"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://x.com/kamau_nje"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </header>
  );
};

export default Navbar;
