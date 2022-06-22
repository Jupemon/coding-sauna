import React from "react";
import styles from "./Header.module.css";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className={styles.header}>
      <Navbar />
      <h1 className={styles.heading}>Coding Sauna</h1>
      <div className={styles.details}>
        <div>
          <p className={styles.subtitle}>
            [ Meet and grow with other developers ]
          </p>
          <p className={styles.description}>
            Every week we discuss a new topic presented by a community <br />
            member while enjoying snacks and drinks, followed by open <br />
            discussion in the sauna.
          </p>
        </div>
        <div className={styles.infomation}>
          <p className={styles.subtitle}>Where</p>
          <p className={styles.description}>Platform 6, 5th floor</p>
        </div>
        <div className={styles.infomation}>
          <p className={styles.subtitle}>When</p>
          <p className={styles.description}>
            Every Monday, 17:30 <br />
            Doors will be open until 18:00! Please arrive on time.
          </p>
        </div>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/Trees.png"}
        alt="Pine Trees"
        className={styles.trees}
      />
    </div>
  );
};

export default Header;
