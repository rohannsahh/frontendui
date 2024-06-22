import React, { useRef, useEffect } from 'react';
import HeroSection from './HeroSection';
import Header from './Header';
import TestimonialsSection from './TestimonialSection';
import Pricing from './Pricing';
import Footer from './Footer';
// import { useLocation } from 'react-router-dom';

const Home = () => {
  const pricingRef = useRef(null);
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.hash === '#pricing' && pricingRef.current) {
  //     pricingRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, [location]);

  return (
    <div>
      <Header pricingRef={pricingRef} />
      <HeroSection />
      <TestimonialsSection />
      <div ref={pricingRef}>
        <Pricing />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
