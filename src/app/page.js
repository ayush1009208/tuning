"use client"; // Add this line to mark the component as a Client Component

import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import OurServices from '@/components/ourservices';
import BigInfo from '@/components/biginfo';
import CardsPack from '@/components/cardspack';
import '../styles/globals.css'; 

export default function Home() {
  const cardsPackRef = useRef(null); // Create a ref for the CardsPack section

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add visible class to trigger animation
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    });

    const currentRef = cardsPackRef.current; // Get the current ref
    if (currentRef) {
      observer.observe(currentRef); // Observe the CardsPack section
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Clean up observer on unmount
      }
    };
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <OurServices />
      
      <h1 style={{ textAlign: 'center', margin: '2rem 0', fontSize: '50px' }}>Welcome to Our Services</h1>
      
      <BigInfo 
        imgSrc="/images/pexels-georgesultan-1409999.jpg" 
        imgAlt="An awesome image" 
        header="We do everything"
        description="Just leave your ride with us and trust our experts to ensure top-notch service and performance. Drive away with confidence knowing your car is in great hands."
      />

      {/* Add the ref to the CardsPack section */}
      <div ref={cardsPackRef} className="cardsPack">
        <CardsPack />
      </div>

      <Footer />
    </>
  ); 
}
