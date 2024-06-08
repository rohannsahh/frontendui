import React from 'react';
import PricingCard from '../shared/PricingCard';

const Pricing = () => {
  const getReviewedFeatures = [
    'Schengen or Canada Travel Visa',
    'Reviewing each document and information being shared',
    'Prepare you for the appointment',
    'Sharpen and improve the application',
    'Provide right dates for target countries'
  ];

  const azPrepFeatures = [
    'Schengen or Canada Travel Visa',
    'PREPARING each document with information being shared',
    'Prepare you for the appointment',
    'Sharpen and improve the application',
    'Provide right dates for target countries',
    'Hand-held you to the entire process',
    'Personalized trip recommendation',
    'Draft a easy simple itinerary for you',
    'Europe/Canada travel hacks',
    'Airbnb, flights, card recommendations included'
  ];

  return (
    <div className="flex flex-col items-center bg-white p-4 md:p-14">
      <h1 className="text-black text-3xl md:text-5xl font-bold  mb-10">Pricing</h1>
      <div className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-5">
      <div className="flex-1 flex">
          <PricingCard title="Get Reviewed" subtitle="(recommended for experienced folks)" features={getReviewedFeatures} price="1000" />
        </div>
        <div className="flex-1 flex">
          <PricingCard title="A-Z prep" subtitle="(new-bie or first timers)" features={azPrepFeatures} price="2000" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
