import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import styles from "../styles/Sidebar.module.css";

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

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className={styles.mobileMenuBtn}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.menu}>
          <li>
            <a onClick={() => scrollToSection("home")}>Home</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("about")}>About</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("education")}>Education</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("projects")}>Projects</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("contact")}>Contact</a>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
