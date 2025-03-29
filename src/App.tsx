import React, { useEffect, useRef } from "react";
import MainContent from "./components/MainContent";
import styles from "./styles/App.module.css";
import "./styles/global.css";
import "./styles/sections.css"; // Make sure this file exists!
import "./styles/Projects.module.css";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const cardsRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    // Select all elements with the class 'card'
    cardsRef.current = document.querySelectorAll(".card");

    if (!cardsRef.current) return; // Ensure elements exist

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => observer.observe(card));

    return () => {
      if (cardsRef.current) {
        cardsRef.current.forEach((card) => observer.unobserve(card));
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <MainContent />
    </div>
  );
};

export default App;
