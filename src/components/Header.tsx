/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import styles from "./Header.module.css";

import Navbar from "./Navbar";
import trees from "../assests/Trees.png";

const Header = () => {
  return (
    <div>
      <Navbar />
      <h1>Coding Sauna</h1>

      <div className={styles.detailsBox}>
        <div className={styles.details}>
          <p className={styles.subtitle}>
            [ Meet and grow with other developers ]
          </p>
          <p className={styles.description}>
            Every week we discuss a new topic presented by a community <br />
            member while enjoying snacks and drinks, followed by open <br />
            discussion in the sauna.
          </p>

          <div className={styles.infomation}>
            <p className={styles.subtitle}>&lt;Where&gt;</p>
            <p className={styles.description}>Platform 6, 5th floor</p>
          </div>
          <div className={styles.infomation}>
            <p className={styles.subtitle}>&lt;When&gt;</p>
            <p className={styles.description}>
              Every Monday, 17:00 <br />
              //If the doors are locked, you can send a msg to the telegram chat so someone will open the door.
            </p>
          </div>
        </div>
        <div>
          <img src={trees} alt="Pine Trees" className={styles.trees} />
        </div>
      </div>
    </div>
  );
};

export default Header;
