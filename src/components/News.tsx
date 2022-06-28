import React from "react";

import styles from "./News.module.css";

const News: React.FC = () => {
  return (
    <div className={styles.news} id="news">
      <h1>News</h1>
      <div className={styles.details}>
        <div className={styles.instagram}>
          <p className={styles.title}>[ Our lastest on Instagram ]</p>
          <div className={styles.instagramPosts}></div>
        </div>
        <div className={styles.linkedin}>
          <p className={styles.title}>[ Our lastest on LinkedIn ]</p>
          <div className={styles.linkedinPosts}></div>
        </div>
      </div>
    </div>
  );
};

export default News;
