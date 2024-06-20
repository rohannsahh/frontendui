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
    <div className="bg-white flex flex-col items-center p-8 relative">
      <div className="relative w-full max-w-4xl h-[500px]">
      <div className="absolute inset-0">
        <img
          src={require('../assets/world.png')}
          alt="World Map"
          className="object-cover  w-full h-full opacity-50"
        />
      </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl font-bold w-full max-w-xl text-[#000080] text-center  p-2 ">
            5 Steps Process to get the toughest visa the easy way
          </h2>
        </div>

        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex items-center flex-col">
          <div className="bg-blue-700 text-white w-8 h-8 flex items-center justify-center rounded-full">1</div>
          <div className="text-center mt-2">
            <p className="font-bold">Fill in Details:</p>
            <p>Submit all valid information when booking your consultation.</p>
          </div>
        </div>

        <div className="absolute top-1/4 right-10 flex items-center flex-col">
          <div className="bg-blue-700 text-white w-8 h-8 flex items-center justify-center rounded-full">2</div>
          <div className="text-center mt-2">
            <p className="font-bold">Reviewing Your Details:</p>
            <p>We take one business day to check and understand your application.</p>
          </div>
        </div>

        <div className="absolute top-1/2 left-10 flex items-center flex-col">
          <div className="bg-blue-700 text-white w-8 h-8 flex items-center justify-center rounded-full">3</div>
          <div className="text-center mt-2">
            <p className="font-bold">Personalized Consultation:</p>
            <p>Receive tailored advice for your specific case.</p>
          </div>
        </div>

        <div className="absolute bottom-1/4 right-10 flex items-center flex-col">
          <div className="bg-blue-700 text-white w-8 h-8 flex items-center justify-center rounded-full">4</div>
          <div className="text-center mt-2">
            <p className="font-bold">Apply to the Required Visa Country:</p>
            <p>Apply directly with the Embassy once your application is ready.</p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center flex-col">
          <div className="bg-blue-700 text-white w-8 h-8 flex items-center justify-center rounded-full">5</div>
          <div className="text-center mt-2">
            <p className="font-bold">Bon Voyage:</p>
            <p>You're all set for your journey!</p>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <img src={require('../assets/airplane.png')} alt="Airplane" className="w-12 h-12 rotate-45" />
        </div>
      </div>
    </div>
    {/* <div className="relative bg-gray-100 py-12 flex flex-col rounded-md shadow-lg items-center">
      <div className="absolute inset-0">
        <img
          src={require('../assets/world.png')}
          alt="World Map"
          className="object-cover  w-full h-full opacity-50"
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
    </div> */}
    <Footer/>
    </>
  );
};

export default HowItWorks;
