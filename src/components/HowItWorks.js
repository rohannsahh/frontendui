import React from 'react';
import Header from './Header';
import Footer from './Footer';



const HowItWorks = () => {
  return (
    <>
    <Header/>
    <div className="relative  bg-gray-100 flex flex-col rounded-md shadow-lg items-center ">
      <div className="relative hidden md:block w-full max-w-7xl h-[600px]">
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

        <div className="absolute top-10 left-1/2 container w-full max-w-64 transform -translate-x-1/2 flex items-center flex-col">
          <div className="bg-blue-700 text-white w-8 h-8 flex text-xl font-bold items-center justify-center rounded-full">5</div>
          <div className="text-center text-lg mt-2">
            <p className="font-bold">Bon Voyage:</p>
            <p>You're all set for your journey!</p>
          </div>
        </div>

        <div className="absolute container w-full max-w-80 top-32 right-8 flex items-center flex-col">
          <div className="bg-blue-700 text-white w-8 h-8 flex items-center text-xl font-bold justify-center rounded-full">4</div>
          <div className="text-center text-lg mt-2">
            <p className="font-bold">Apply to the Required Visa Country:</p>
            <p>Apply directly with the Embassy once your application is ready.</p>
          </div>
        </div>

        <div className="absolute container w-full max-w-64 top-1/2 left-10 flex items-center flex-col">
          <div className="bg-blue-700 text-white w-8 h-8 flex items-center text-xl font-bold justify-center rounded-full">1</div>
          <div className="text-center text-lg mt-2">
            <p className="font-bold">Fill in Details:</p>
            <p>Submit all valid information when booking your consultation.</p>
          </div>
        </div>
    

        <div className="absolute container w-full max-w-64 bottom-1/4 right-10 flex items-center flex-col">
          <div className="bg-blue-700 text-white w-8 h-8 flex items-center justify-center text-xl font-bold rounded-full">3</div>
          <div className="text-center text-lg mt-2">
            <p className="font-bold">Personalized Consultation:</p>
            <p>Receive tailored advice for your specific case.</p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 container w-full max-w-72 transform -translate-x-1/2 flex items-center flex-col">
          <div className="bg-blue-700 text-white w-8 h-8 flex items-center justify-center text-xl font-bold rounded-full">2</div>
          <div className="text-center text-lg mt-2">
            <p className="font-bold">Reviewing Your Details:</p>
            <p>We take one business day to check and understand your application.</p>
          </div>
        </div>

        <div className="absolute top-16 left-1/4 transform -translate-x-1/2">
          <img src={require('../assets/airplane.png')} alt="Airplane" className="w-16 h-16 transform scale-x-[-1] -rotate-12   " />
        </div>
      </div>
    </div>
  
        {/* Mobile Layout */}
        <div className=" md:hidden flex flex-col items-center space-y-6 py-6">
        <div className="absolute inset-0">
        <img
          src={require('../assets/world.png')}
          alt="World Map"
          className="object-cover  w-full h-full opacity-50"
        />
      </div>
          <h2 className="text-2xl font-bold text-[#000080] text-center">
            5 Steps Process to get the toughest visa the easy way
          </h2>
          <div className="flex flex-col items-center px-2">
            <div className="bg-blue-700 text-white w-8 h-8 flex items-center justify-center text-xl font-bold rounded-full">1</div>
            <div className="text-center text-base mt-2">
              <p className="font-bold">Fill in Details:</p>
              <p>Submit all valid information when booking your consultation.</p>
            </div>
          </div>

          <div className="flex flex-col items-center px-2">
            <div className="bg-blue-700 text-white w-8 h-8 flex items-center justify-center text-xl font-bold rounded-full">2</div>
            <div className="text-center text-base mt-2">
              <p className="font-bold">Reviewing Your Details:</p>
              <p>We take one business day to check and understand your application.</p>
            </div>
          </div>

          <div className="flex flex-col items-center px-2">
            <div className="bg-blue-700 text-white w-8 h-8 flex items-center justify-center text-xl font-bold rounded-full">3</div>
            <div className="text-center text-base mt-2">
              <p className="font-bold">Personalized Consultation:</p>
              <p>Receive tailored advice for your specific case.</p>
            </div>
          </div>

          <div className="flex flex-col items-center px-2">
            <div className="bg-blue-700 text-white w-8 h-8 flex items-center justify-center text-xl font-bold rounded-full">4</div>
            <div className="text-center text-base mt-2">
              <p className="font-bold">Apply to the Required Visa Country:</p>
              <p>Apply directly with the Embassy once your application is ready.</p>
            </div>
          </div>

          <div className="flex flex-col items-center px-2">
            <div className="bg-blue-700 text-white w-8 h-8 flex items-center justify-center text-xl font-bold rounded-full">5</div>
            <div className="text-center text-base mt-2">
              <p className="font-bold">Bon Voyage:</p>
              <p>You're all set for your journey!</p>
            </div>
            <div className="p-2">
          <img src={require('../assets/airplane.png')} alt="Airplane" className="w-16 h-16    " />
        </div>
          </div>
        </div>
    <Footer/>
    </>
  );
};

export default HowItWorks;
