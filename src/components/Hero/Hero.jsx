import React from 'react';
import styles from "./Hero.module.css";

import { getImageUrl } from '../../util';

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Niruthya Parkavi</h1>
             <p className={styles.description}>
          I’m a Java Full-Stack Developer with experience in creating dynamic and responsive web solutions.
           My passion for technology drives me to continually enhance my skills and explore opportunities in technical consulting and front-end development. 
          I’m committed to leveraging my expertise to contribute effectively and grow in these fields.
        </p>
        <a href="mailto:niruthya31@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        </div>
        <img src={getImageUrl("hero/hero1.png")} alt="Hero image of me"  className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur} />
    </section>
   
  )
}
