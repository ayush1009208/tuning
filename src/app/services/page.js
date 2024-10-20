"use client"; // Add this at the top to mark the component as a Client Component

import React from 'react';
import Header from '@/components/Header'; // Ensure the path to Header component is correct
import Footer from '@/components/Footer'; // Ensure the path to Footer component is correct
import styles from '@/styles/ourservices.module.css';

export default function OurServices() {
  const services = [
    { title: 'Engine Tuning', description: 'Boost your car’s performance.', icon: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { title: 'Suspension Upgrade', description: 'Improve ride quality.', icon: 'https://images.pexels.com/photos/159293/car-engine-motor-clean-customized-159293.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { title: 'Car Wash', description: 'Keep your car sparkling clean.', icon: 'https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { title: 'Painting', description: 'Freshen up your car’s look.', icon: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { title: 'Polishing', description: 'Restore your car’s shine.', icon: 'https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { title: 'Restoration', description: 'Bring your classic car back to life.', icon: 'https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  return (
    <>
      <Header /> {/* Add the Header component */}

      <main>
        <header>
          <h1 className={styles.header}>Key Features:</h1> {/* Centered Header */}
        </header>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <img src={service.icon} alt={service.title} />
              <div className={styles.textContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer /> {/* Add the Footer component */}
    </>
  );
}
