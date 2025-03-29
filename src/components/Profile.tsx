// Profile Card Component
import React from "react";
import styles from "../styles/ProfileCard.module.css";

const ProfileCard: React.FC = () => {
  return (
    <div className={styles.profileCard}>
      <img
        src="/profile.jpg"
        alt="Kelvin Njenga"
        className={styles.profileImage}
      />
      <h2>Kelvin Njenga</h2>
      <p>Developer & Marketer</p>
    </div>
  );
};

export default ProfileCard;
