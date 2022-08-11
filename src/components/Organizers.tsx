import React from "react";
import styles from "./Organizers.module.css";
import juho_h from "../assests/organizers/juho-h.jpg"
import juho_t from "../assests/organizers/juho-t.jpg"
import tri from "../assests/organizers/tri.jpg"

const Organizers: React.FC = () => {
  return (
    <div id="organizers">
      <h1>The organizers</h1>
      <div className={styles.people}>
        <div className={styles.profile}>
          <div className={styles.profileImg}><img style={{height:"100%", width:"100%", borderRadius:"50%"}} src={juho_h}/></div>
          <div className={styles.profileName}>Juho Helin</div>
          <div className={styles.profileEmail}>[ jupemonium@gmail.com ]</div>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileImg}><img style={{height:"100%", width:"100%", borderRadius:"50%"}} src={juho_t}/></div>
          <div className={styles.profileName}>Juho Tapio</div>
          <div className={styles.profileEmail}>[ sekopaa247@gmail.com ]</div>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileImg}><img style={{height:"100%", width:"100%", borderRadius:"50%"}} src={tri}/></div>
          <div className={styles.profileName}>Tri Anh Phung</div>
          <div className={styles.profileEmail}>[ phungtrianh@gmail.com ]</div>
        </div>
      </div>
    </div>
  );
};

export default Organizers;
