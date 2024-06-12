import React from 'react'
import HeroSection from './HeroSection'
import Header from './Header'
import TestimonialsSection from './TestimonialSection'
import Pricing from './Pricing'
import Footer from './Footer'
import { useRef } from 'react'

const Home = () => {
  const pricingRef = useRef(null)

  return (
    <div >
      <Header
        pricingRef={pricingRef}
      />
      <HeroSection />
      <TestimonialsSection />
      <div ref={pricingRef}>
        <Pricing />
      </div>

      <Footer />
    </div>
  )
}

export default Home
