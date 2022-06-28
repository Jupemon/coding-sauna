import React from "react";

import styles from "./Venue.module.css";
import Map from "../assests/Map.png";

const Venue: React.FC = () => {
  return (
    <div className={styles.venue}>
      <div>
        <h1>The venue</h1>

        <div className={styles.details}>
          <div className={styles.addressBox}>
            <h2>Platform6, Åkerlundinkatu 8</h2>
            <p className={styles.description}>
              [ One stop for all things startup ]
            </p>
          </div>

          <p className={styles.information}>
            Tribe Tampere has the run of Platform6's 5th floor, so <br /> be
            sure to join us there. You can check out more of <br />
            Tribe Tampere's events and services{" "}
            <a
              className={styles.informationLink}
              href="https://tribetampere.com/"
            >
              here
            </a>
            , or take a look <br /> at everything Platform6 has to offer{" "}
            <a className={styles.informationLink} href="https://platform6.fi/">
              here
            </a>
            .
          </p>
        </div>
      </div>
      <div className={styles.map}>
        <img src={Map} alt="Location Map" />
      </div>
    </div>
  );
};

export default Venue;
