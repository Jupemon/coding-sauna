import React from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <img
        src={process.env.PUBLIC_URL + "/LogoPNG.png"}
        alt="Coding Sauna Logo"
        className={styles.logo}
      />
      <div className={styles.heading}>
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">News</a>
      </div>
    </div>
  );
};

export default Navbar;
