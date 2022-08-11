import React from "react";

import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.details}>
        <li>Social Media</li>
        <li>
          <a
            href="https://www.linkedin.com/company/coding-sauna/"
            className={styles.link}
          >
            LinkedIn
          </a>
        </li>
      </ul>

      <ul className={styles.details}>
        <li>Get Involved</li>
        <li><a href="https://t.me/+G5A-M1M4ePFkMzhk" className={styles.link}>Telegram</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
