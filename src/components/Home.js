import React from 'react'
import HeroSection from './HeroSection'
import Header from './Header'
import TestimonialsSection from './TestimonialSection'
import Pricing from './Pricing'
import Footer from './Footer'

const Home = () => {
  return (
    <div >
        <Header/>
        <HeroSection/>
        <TestimonialsSection/>
        <Pricing/>
       <Footer/>
    </div>
  )
}

export default Home
