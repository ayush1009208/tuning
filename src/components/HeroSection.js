
import React from 'react';

import styles from '../styles/herosection.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome to Tuning</h1>
        <p className={styles.heroSubtitle}>We get things going!!!</p>
        <a href="" className={styles.heroButton}>Learn More</a>
      </div>
    </section>
  );
};

export default Hero;
