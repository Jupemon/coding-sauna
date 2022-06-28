import React from "react";

import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.details}>
        <li>Social Media</li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>
          <a
            href="https://www.linkedin.com/company/coding-sauna/"
            className={styles.link}
          >
            LinkedIn
          </a>
        </li>
        <li>Facebook</li>
      </ul>

      <ul className={styles.details}>
        <li>Get Involved</li>
        <li>Telegram</li>
        <li>Mail</li>
        <li>News</li>
      </ul>
    </footer>
  );
};

export default Footer;
