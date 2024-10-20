import React from 'react';
import styles from '@/styles/cardspack.module.css';

const CardsPack = () => {
  const cardsData = [
    { heading: 'Engine Repair', description: 'Expert diagnostics and repairs to enhance your engine’s performance.' },
    { heading: 'Suspension Services', description: 'Upgrade your suspension for a smoother ride and improved handling.' },
    { heading: 'Car Wash & Detailing', description: 'Thorough cleaning and detailing to keep your car looking pristine.' },
    { heading: 'Paint Protection', description: 'Protect your car’s paint with our high-quality ceramic coating.' },
    { heading: 'Scratch Removal', description: 'We specialize in removing scratches and blemishes from your vehicle.' },
    { heading: 'Full-Service Paint Jobs', description: 'Custom paint jobs that refresh your car’s look.' },
    { heading: 'Wheel Alignment', description: 'Ensure optimal handling and tire life with our alignment services.' },
    { heading: 'Bodywork and Restoration', description: 'Comprehensive bodywork to restore your vehicle to its former glory.' },
    { heading: 'Polishing & Waxing', description: 'Enhance your car’s shine with our premium polishing and waxing services.' },
  ];

  return (
    <div>
      <h1 className={styles.centerHeader}>Key Features:</h1>
      <div className={styles.cardsGrid}>
        {cardsData.map((card, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardHeading}>{card.heading}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsPack;
