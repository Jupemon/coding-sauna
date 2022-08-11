import React from "react";

import styles from "./Navbar.module.css";
import Logo from "../assests/LogoPNG.png";

const Navbar: React.FC = () => {
  return (
    <div className={styles.nav}>
      <img src={Logo} alt="Coding Sauna Logo" className={styles.logo} />
      <div className={styles.heading}>
        <a href="/">Home</a>
        <a href="#organizers">About Us</a>
       { /* <a href="#news">News</a>*/}
      </div>
    </div>
  );
};

export default Navbar;
