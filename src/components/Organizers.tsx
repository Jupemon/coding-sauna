import React from "react";
import styles from "./Organizers.module.css";

const Organizers: React.FC = () => {
  return (
    <div id="organizers">
      <h1>The organizers</h1>
      <div className={styles.people}>
        <div className={styles.profile}>
          <div className={styles.profileImg}></div>
          <div className={styles.profileName}>Etunimi Sukunimi</div>
          <div className={styles.profileEmail}>[ email@email.com ]</div>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileImg}></div>
          <div className={styles.profileName}>Etunimi Sukunimi</div>
          <div className={styles.profileEmail}>[ email@email.com ]</div>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileImg}></div>
          <div className={styles.profileName}>Etunimi Sukunimi</div>
          <div className={styles.profileEmail}>[ email@email.com ]</div>
        </div>
      </div>

      <div className={styles.people}>
        <div className={styles.profile}>
          <div className={styles.profileImg}></div>
          <div className={styles.profileName}>Etunimi Sukunimi</div>
          <div className={styles.profileEmail}>[ email@email.com ]</div>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileImg}></div>
          <div className={styles.profileName}>Etunimi Sukunimi</div>
          <div className={styles.profileEmail}>[ email@email.com ]</div>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileImg}></div>
          <div className={styles.profileName}>Etunimi Sukunimi</div>
          <div className={styles.profileEmail}>[ email@email.com ]</div>
        </div>
      </div>
    </div>
  );
};

export default Organizers;
