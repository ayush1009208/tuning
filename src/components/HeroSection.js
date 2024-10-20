
import React from 'react';

import styles from '../styles/herosection.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome to Our Site</h1>
        <p className={styles.heroSubtitle}>Your subtitle here</p>
        <a href="#about" className={styles.heroButton}>Learn More</a>
      </div>
    </section>
  );
};

export default Hero;
