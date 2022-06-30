import React from "react";

import styles from "./Supporters.module.css";
import TreLogo from "../assests/TreLogo.png";
import TribeLogo from "../assests/TribeLogo.png";
import TampereGamehubLogo from "../assests/TampereGameHubLogo.png";
import DashboaLogo from "../assests/DashboaLogo.png";

import Carousel, { CarouselItem } from "./Carousel";

const Supporters: React.FC = () => {
  return (
    <div className={styles.supporters}>
      <h1>Our supporters</h1>

      <div className={styles.logos}>
        <a href="https://tamperees.com/">
          <img src={TreLogo} alt="Tre's logo" className={styles.logoLink} />
        </a>
        <a href="https://tribetampere.com/">
          <img src={TribeLogo} alt="Tribe's logo" className={styles.logoLink} />
        </a>
        <a href="https://tampere.games/">
          <img
            src={TampereGamehubLogo}
            alt="Tampere Gamehub's logo"
            className={styles.logoLink}
          />
        </a>
        <a href="https://dashboa.com/">
          <img
            src={DashboaLogo}
            alt="Dashboa's logo"
            className={styles.logoLink}
          />
        </a>
      </div>

      <Carousel>
        <CarouselItem width={"10%"}>
          <div className={styles.card}>
            <div className={styles.logo}>
              <img src={TreLogo} alt="Tre's logo" />
            </div>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              Proin <br /> leo erat, bibendum vel est id, <br /> venenatis
              egestas justo.
            </p>
            <button className={styles.visit}>
              <a href="https://tamperees.com/" className={styles.link}>
                Visit us
              </a>
            </button>
          </div>
        </CarouselItem>

        <CarouselItem width={"100%"}>
          <div className={styles.card}>
            <div className={styles.logo}>
              <img
                src={TribeLogo}
                alt="Tribe's logo"
                className={styles.tribeLogo}
              />
            </div>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              Proin <br /> leo erat, bibendum vel est id, <br /> venenatis
              egestas justo.
            </p>
            <button className={styles.visit}>
              <a href="https://tribetampere.com/" className={styles.link}>
                Visit us
              </a>
            </button>
          </div>
        </CarouselItem>

        <CarouselItem width={"100%"}>
          <div className={styles.card}>
            <div className={styles.logo}>
              <img src={TampereGamehubLogo} alt="Tampere Gamehub's logo" />
            </div>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              Proin <br /> leo erat, bibendum vel est id, <br /> venenatis
              egestas justo.
            </p>
            <button className={styles.visit}>
              <a href="https://tampere.games/" className={styles.link}>
                Visit us
              </a>
            </button>
          </div>
        </CarouselItem>

        <CarouselItem width={"100%"}>
          <div className={styles.card}>
            <div className={styles.logo}>
              <img src={DashboaLogo} alt="Dashboa's logo" />
            </div>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              Proin <br /> leo erat, bibendum vel est id, <br /> venenatis
              egestas justo.
            </p>
            <button className={styles.visit}>
              <a href="https://dashboa.com/" className={styles.link}>
                Visit us
              </a>
            </button>
          </div>
        </CarouselItem>
      </Carousel>
    </div>
  );
};

export default Supporters;
