import React from "react";

import styles from "./News.module.css";
import InstagramPosts from "../assests/InstagramPosts.png";
import LinkedinPostBG from "../assests/LinkedInPostsBG.png";
import LinkedinPosts from "../assests/LinkedInPosts.png";
import LinkedinLastPosts from "../assests/LinkedInLastPosts.png";
import GreenBar from "../assests/GreenBar.png";
import WhiteBar from "../assests/WhiteBar.png";

const News: React.FC = () => {
  return (
    <div id="news">
      <h1>News</h1>
      <div className={styles.details}>
        <div className={styles.card}>
          <p>[ Our lastest on Instagram ]</p>
          <div>
            <img
              src={InstagramPosts}
              alt="Instagram posts"
              className={styles.instaPosts}
            />
          </div>
        </div>

        <div className={styles.card}>
          <p className={styles.title}>[ Our lastest on LinkedIn ]</p>

          <div className={styles.content}>
            <div className={styles.posts}>
              <img
                src={LinkedinPostBG}
                alt="LinkedIn background"
                className={styles.background}
              />
              <img
                src={LinkedinPosts}
                alt="LinkedIn posts"
                className={styles.post}
              />
              <img
                src={LinkedinPosts}
                alt="LinkedIn posts"
                className={styles.post}
              />
              <img
                src={LinkedinPosts}
                alt="LinkedIn posts"
                className={styles.post}
              />
              <img
                src={LinkedinLastPosts}
                alt="LinkedIn posts"
                className={styles.lastPost}
              />
            </div>

            <div className={styles.scrollBar}>
              <img
                src={GreenBar}
                alt="Green Scrollbar"
                className={styles.greenBar}
              />
              <img
                src={WhiteBar}
                alt="White Scrollbar"
                className={styles.whiteBar}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
