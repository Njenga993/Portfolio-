import React from "react";
import styles from "../styles/About.module.css";

const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={styles.cardsContainer}>
        <div className={`${styles.card} card`}>
          <img
            src="src/assets/profile.jpg"
            alt="Kelvin Njenga"
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <h3>Who Am I?</h3>
            <p>
              I'm Kelvin Njenga, a passionate **Developer** and **Marketer**
              based in Kenya. I specialize in **full-stack development**,
              **UI/UX design**, and **digital marketing**.
            </p>
          </div>
        </div>

        <div className={`${styles.card} card`}>
          <img
            src="/coding.jpg"
            alt="Coding Passion"
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <h3>My Passion</h3>
            <p>
              I love building **efficient** and **interactive** web
              applications. I also have experience in **Django**, **React**,
              **Flutter**, and **Vue.js**.
            </p>
          </div>
        </div>

        <div className={`${styles.card} card`}>
          <img
            src="/marketing.jpg"
            alt="Marketing Skills"
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <h3>Marketing & Branding</h3>
            <p>
              With a background in **Marketing**, I help brands grow through
              **SEO**, **content strategy**, and **brand identity**.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
