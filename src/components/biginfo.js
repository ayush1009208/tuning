import React from 'react';
import styles from '@/styles/BigInfo.module.css';
import Image from 'next/image';
const BigInfo = ({ imgSrc, imgAlt, header, description }) => {
  return (
    <div className={styles.bigInfoContainer}>
      {/* Left: Image */}
      <div className={styles.imageContainer}>
        <Image src={imgSrc} alt={imgAlt} className={styles.image} width={400} height={400}/>
      </div>

      {/* Right: Text Information */}
      <div className={styles.textContainer}>
        <h2 className={styles.header}>{header}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default BigInfo;
