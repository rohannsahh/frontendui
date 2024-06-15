import React from 'react';
import Header from './Header';
import Footer from './Footer';

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
          className="object-cover  w-full h-full opacity-50"
        />
      </div>

{/* 
      <div className="relative w-full max-w-5xl p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-blue-800 mb-8">
          5 Steps Process to get the toughest visa the easy way
        </h2>
        <div className="relative h-full flex flex-col items-center">
          <div className="absolute left-0 top-1/4 text-center transform -translate-x-10">
            <div className="bg-white p-2 rounded-full shadow-md inline-block mb-2">1</div>
            <p className="text-sm font-semibold">Fill in Details:<br/>Submit all valid information when booking your consultation.</p>
          </div>
          <div className="absolute left-1/4 top-1/2 text-center transform -translate-y-10">
            <div className="bg-white p-2 rounded-full shadow-md inline-block mb-2">2</div>
            <p className="text-sm font-semibold">Reviewing Your Details:<br/>We take one business day to check and understand your application.</p>
          </div>
          <div className="absolute left-1/2 top-1/4 text-center transform -translate-x-1/2 -translate-y-10">
            <div className="bg-white p-2 rounded-full shadow-md inline-block mb-2">3</div>
            <p className="text-sm font-semibold">Personalized Consultation:<br/>Receive tailored advice for your specific case.</p>
          </div>
          <div className="absolute right-1/4 top-1/2 text-center transform translate-x-10 -translate-y-10">
            <div className="bg-white p-2 rounded-full shadow-md inline-block mb-2">4</div>
            <p className="text-sm font-semibold">Apply to the Required Visa Country:<br/>Apply directly with the Embassy once your application is ready.</p>
          </div>
          <div className="absolute right-0 top-1/4 text-center transform translate-x-10">
            <div className="bg-white p-2 rounded-full shadow-md inline-block mb-2">5</div>
            <p className="text-sm font-semibold">Bon Voyage:<br/>You're all set for your journey!</p>
          </div>
          
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 200 200" className="absolute" style={{maxWidth: '500px'}}>
              <path d="M 50,150 A 50,50 0 0,1 150,150 A 50,50 0 0,1 150,50 A 50,50 0 0,1 50,50 A 50,50 0 0,1 50,150 Z" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2"/>
            </svg>
          </div>
          
         
        </div> */}
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
    <Footer/>
    </>
  );
};

export default HowItWorks;
