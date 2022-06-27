import React from "react";
import styles from "./Supporters.module.css";

const Supporters: React.FC = () => {
  return (
    <div className={styles.supporters}>
      <h1 className={styles.heading}>Our supporters</h1>
      <div className={styles.details}>
        <div className={styles.card}>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/TreLogo.png"}
              alt="Tre's logo"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo
            erat, bibendum vel est id, venenatis egestas justo.
          </p>
          <button>Visit us</button>
        </div>

        <div className={styles.card}>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/TribeLogo.png"}
              alt="Tribe's logo"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo
            erat, bibendum vel est id, venenatis egestas justo.
          </p>
          <button>Visit us</button>
        </div>
      </div>
    </div>
  );
};

export default Supporters;
