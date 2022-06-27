import React from "react";
import styles from "./Venue.module.css";

const Venue: React.FC = () => {
  return (
    <div className={styles.venue}>
      <h1 className={styles.heading}>The venue</h1>
      <div className={styles.details}>
        <div className={styles.addressBox}>
          <h2>Platform6, Åkerlundinkatu 8</h2>
          <p className={styles.description}>
            [ One stop for all things startup ]
          </p>
        </div>
        <div className={styles.informationBox}>
          <p>
            Tribe Tampere has the run of Platform6's 5th floor, so be sure to
            join us there. You can check out more of Tribe Tampere's events and
            services <a href="https://tribetampere.com/">here</a>, or take a
            look at everything Platform6 has to offer{" "}
            <a href="https://platform6.fi/">here</a>.
          </p>
        </div>
      </div>
      {/* <div className={styles.map}>
        <img src={process.env.PUBLIC_URL + "/Map.png"} alt="Map" />
      </div> */}
    </div>
  );
};

export default Venue;
