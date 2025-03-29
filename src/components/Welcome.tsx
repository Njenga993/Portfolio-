import { useState, useEffect } from "react";
import styles from "src/styles/Welcome.module.css";

const Welcome = () => {
  const text = "Welcome to My Portfolio";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust speed (100ms per letter)

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={styles.section}>
      <h1 className={styles.animatedText}>{displayedText}</h1>
      <p className={styles.subText}>
        I'm Kelvin Njenga, a Developer & Marketer.
      </p>
    </section>
  );
};

export default Welcome;
