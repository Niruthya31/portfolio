import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../util";

export const Contact = () => {
  return (
    
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact </h2>
      </div>
        <div>
        <ul>
        <li className={styles.link}> 
        <img src={getImageUrl("contact/phone .png")} alt="phone icon" />
          <a href="tel:+19786080285">978-608-0285</a>
          </li>
          <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:niruthya31@gmail.com">niruthya31@gmail.com</a>
        </li>
        </ul>
        </div>
      
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/niruthya-parkavi-b79617206/">linkedin.com/Niruthya</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Niruthya31">github.com/Niruthya</a>
        </li>
      </ul>
      
    </footer>
  );
};
