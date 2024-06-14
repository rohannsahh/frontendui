import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from "../assets/loginbackground.webp"




const ChoosePrice = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const PricingCard = ({ title, subtitle, features }) => {
    return (
      <div className="bg-white rounded-2xl p-2   m-2 lg:h-[290px] w-full md:w-80 flex flex-col">
        <h2 className=" text-lg sm:text-xl text-center font-bold mb-1" style={{ color: '#000080' }}>{title}</h2>
        <p className="text-black text-center font-semibold text-sm sm:text-base mb-4">{subtitle}</p>
        <div className="flex-grow">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center mb-2">
              <img className="mr-2" src={require('../assets/checked.png')} alt="" style={{ width: 18, height: 18 }} />
              <p className="text-gray-900 text-sm  sm:text-base ml-1">{feature}</p>
            </div>
          ))}
        </div>
     
      </div>
    );
  };


  const getReviewedFeatures = [
    'Schengen or Canada Travel Visa',
    'Reviewing each document and information being shared',
    'Prepare you for the appointment',
    'Sharpen and improve the application',
    'Provide right dates for target countries'
  ];

  const azPrepFeatures = [
    'ALL INCLUDED from Get Reviewed',
    'Hand-held you to the entire process',
    'Personalized trip recommendation',
    'Draft a easy simple itinerary for you',
    'Europe/Canada travel hacks',
    'Airbnb, flights, card recommendations included'
  ];



  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  
  const handleSubmit = () => {

  };

  const getPrice = () => {
    if (selectedOption === 'Get Reviewed') {
      return 1000;
    } else if (selectedOption === 'A-Z prep') {
      return 2000;
    }
    return 0;
  };

  return (

    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "linear-gradient(rgba(0, 0, 128, 1), rgba(0, 0, 61, 1))" }}>
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${background})`, opacity: 0.08 }}></div>
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full relative max-w-3xl">
        <div className="absolute">
          <button className='mt-4 ml-4' onClick={() => { navigate(-1) }}><img src={require('../assets/back-button.png')} alt='previous' /></button>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#191983] m-2">4/4 Pricing</h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-center  items-center sm:space-x-4 mb-6">
          <label className="cursor-pointer">
            <input
              type="radio"
              name="pricingOption"
                value="Get Reviewed"
                className="hidden"

                checked={selectedOption === 'Get Reviewed'}
                onChange={() => handleOptionChange('Get Reviewed')}
                
            />
            <div
              className={`border-2 rounded-2xl overflow-hidden ${
                selectedOption === 'Get Reviewed' ? 'border-blue-800 shadow-xl' : 'border-gray-300'
              }`}
            > <PricingCard
            title="Get Reviewed"
            subtitle="(recommended for experienced folks)"
            features={getReviewedFeatures}
          />
             
            </div>
          </label>
          <label className="cursor-pointer mt-4 sm:mt-0">
            <input
              type="radio"
              name="pricingOption"
              value="A-Z prep"
              className="hidden"

              checked={selectedOption === 'A-Z prep'}
              onChange={() => handleOptionChange('A-Z prep')}
            />
            <div
              className={`border-2 rounded-2xl overflow-hidden ${
                selectedOption === 'A-Z prep' ? 'border-blue-800 shadow-xl' : 'border-gray-300'
              }`}
            >
               <PricingCard
              title="A-Z prep"
              subtitle="(new-bie or first timers)"
              features={azPrepFeatures}
            />
            </div>
          </label>
        </div>
        
        {selectedOption && (
          <div className='flex justify-center'>
            <button
              type="button"
              className="bg-[#191983] text-white font-bold  py-2 px-4 rounded-lg mt-1"
              onClick={handleSubmit}
            >
              Pay ₹{getPrice()}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChoosePrice;


