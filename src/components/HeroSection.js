import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center text-white text-center px-4 md:px-0" style={{background: "linear-gradient(rgba(0, 0, 128, 1), rgba(0, 0, 61, 1))"
}}>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-relaxed lg:mt-10">
        Prepare your Schengen Visa <br className="hidden md:block" /> Application with Ease
      </h1>
      <p className="text-xl md:text-2xl lg:text-3xl mt-4 mb-6">
        Expert Guidance and Personalized Feedback <br className="hidden md:block" /> hence reducing the rejection to ZERO*
      </p>
      <button className="bg-white text-black font-semibold py-3 px-6 lg:text-2xl rounded-lg mt-6">
        Start Your Application
      </button>
      <Link to="/learn-more" className="mt-6 text-white underline underline-offset-2 text-lg md:text-xl">
        Learn More
      </Link>
    </div>
  );
};

export default HeroSection;
