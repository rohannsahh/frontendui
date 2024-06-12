import React from 'react';
import Header from './Header';

const steps = [
  {
    number: '1',
    title: 'Fill in Details',
    description: 'Submit all valid information when booking your consultation.',
  },
  {
    number: '2',
    title: 'Reviewing Your Details',
    description: 'We take one business day to check and understand your application.',
  },
  {
    number: '3',
    title: 'Personalized Consultation',
    description: 'Receive tailored advice for your specific case.',
  },
  {
    number: '4',
    title: 'Apply to the Required Visa Country',
    description: 'Apply directly with the Embassy once your application is ready.',
  },
  {
    number: '5',
    title: 'Bon Voyage',
    description: 'You\'re all set for your journey!',
  },
];

const HowItWorks = () => {
  return (
    <>
    <Header/>
    <div className="relative bg-gray-100 py-12 flex flex-col rounded-md shadow-lg items-center">
      <div className="absolute inset-0">
        <img
          src={require('../assets/world.png')}
          alt="World Map"
          className="object-cover  w-full h-full opacity-30"
        />
      </div>
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-2xl sm:text-4xl my-4 font-semibold text-[#000080]">
          5 Steps Process to get the toughest visa the easy way
        </h2>
      </div>
      <div className="relative z-10 max-w-4xl w-full flex flex-wrap justify-center">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#000080] text-white font-semibold mb-4">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold text-[#000080] mb-2">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="relative z-10 mt-12 w-full flex justify-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
          <img src={require('../assets/airplane.png')} alt="Airplane" className="w-16 h-16" />
        </div>
      </div>
    </div>
    </>
  );
};

export default HowItWorks;
