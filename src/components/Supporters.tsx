import React from "react";

import styles from "./Supporters.module.css";
import TreLogo from "../assests/TreLogo.png";
import TribeLogo from "../assests/TribeLogo.png";
import TampereGamehubLogo from "../assests/TampereGameHubLogo.png";
import DashboaLogo from "../assests/DashboaLogo.png";

const Supporters: React.FC = () => {
  return (
    <div className={styles.supporters}>
      <h1>Our supporters</h1>

      <div className={styles.details}>
        <div className={styles.card}>
          <div>
            <img src={TreLogo} alt="Tre's logo" className={styles.logo} />
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo
            erat, bibendum vel est id, venenatis egestas justo.
          </p>
          <button className={styles.visit}>
            <a href="https://tamperees.com/">Visit us</a>
          </button>
        </div>

        <div className={styles.card}>
          <div>
            <img src={TribeLogo} alt="Tribe's logo" className={styles.logo} />
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo
            erat, bibendum vel est id, venenatis egestas justo.
          </p>
          <button className={styles.visit}>
            <a href="https://tribetampere.com/">Visit us</a>
          </button>
        </div>

        {/* <div className={styles.card}>
          <div>
            <img src={TampereGamehubLogo} alt="Tampere Gamehub's logo" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo
            erat, bibendum vel est id, venenatis egestas justo.
          </p>
          <button>Visit us</button>
        </div>

        <div className={styles.card}>
          <div>
            <img src={DashboaLogo} alt="Dashboa's logo" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo
            erat, bibendum vel est id, venenatis egestas justo.
          </p>
          <button>Visit us</button>
        </div> */}
      </div>
    </div>
  );
};

export default Supporters;
