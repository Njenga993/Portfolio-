import React from "react";
import styles from "../styles/Contact.module.css";
import {
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactForm: React.FC = () => {
  return (
    <div className={styles.contactContainer}>
      {/* Contact Info & Map Side by Side */}
      <div className={styles.topSection}>
        {/* Contact Information */}
        <div className={`${styles.contactCard} ${styles.infoCard}`}>
          <h2> Get In Touch </h2>
          <ol>
            <p>
              <h3>
                <FaPhone className={styles.icon} />{" "}
                <a href="tel:+254712345678">+254 703 642 280</a>
              </h3>
            </p>
            <p>
              <h3>
                <FaEnvelope className={styles.icon} />{" "}
                <a href="mailto:njengak993@gmail.com">njengak993@gmail.com</a>
              </h3>
            </p>
            <p>
              <h3>
                <FaGithub className={styles.icon} />{" "}
                <a href="https://github.com/Njenga993" target="_blank">
                  GitHub
                </a>
              </h3>
            </p>
            <p>
              <h3>
                <FaLinkedin className={styles.icon} />{" "}
                <a
                  href="https://www.linkedin.com/in/kelvin-kamau-788160277"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </h3>
            </p>
            <h3>
              <a
                href="src/assets/kelvin kamau Resume.pdf"
                download
                className={styles.downloadButton}
              >
                <FaFileDownload className={styles.icon} /> Download Resume
              </a>
            </h3>
          </ol>
        </div>

        {/* Google Map Embed */}
        <div className={`${styles.contactCard} ${styles.mapCard}`}>
          <h3>My Location </h3>
          <FaMapMarkerAlt className={styles.mapIcon} />
          <p>
            <h2>Remote</h2>
          </p>
        </div>
      </div>

      {/* Contact Form Below */}
      <div className={styles.formCard}>
        <h3>Send a Message</h3>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
