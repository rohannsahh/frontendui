import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from "../assets/loginbackground.webp"


const ChoosePrice = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4"  style={{background: "linear-gradient(rgba(0, 0, 128, 1), rgba(0, 0, 61, 1))"
    }}>
        <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${background})`, opacity:0.08 }}      ></div>
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 w-full max-w-3xl">
      <div className="absolute  ">
         <button className='mt-4 ml-4' onClick={()=>{navigate(-1)}}><img src={require('../assets/back-button.png')} alt='previous'/></button>
        </div >
        <div className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-[#191983] m-4">   4/4 Pricing    </h2></div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <div
            onClick={() => handleOptionChange('reviewed')}
            className={`p-4 border rounded-lg cursor-pointer ${
              selectedOption === 'reviewed' ? 'border-blue-600' : 'border-gray-300'
            }`}
          >
            <h3 className="text-lg font-bold text-blue-900">Get Reviewed</h3>
            <p className="text-gray-600">(recommended for experienced folks)</p>
            <ul className="list-disc ml-5 mt-2 text-gray-700">
              <li>Schengen or Canada Travel Visa</li>
              <li>Reviewing each document and information being shared</li>
              <li>Prepare you for the appointment</li>
              <li>Sharpen and improve the application</li>
              <li>Provide right dates for target countries</li>
            </ul>
          </div>
          <div
            onClick={() => handleOptionChange('prep')}
            className={`p-4 border rounded-lg cursor-pointer ${
              selectedOption === 'prep' ? 'border-blue-600' : 'border-gray-300'
            }`}
          >
            <h3 className="text-lg font-bold text-blue-900">A-Z Prep</h3>
            <p className="text-gray-600">(new-bie or first timers)</p>
            <ul className="list-disc ml-5 mt-2 text-gray-700">
              <li>ALL INCLUDED from Get Reviewed</li>
              <li>Hand-held you to the entire process</li>
              <li>Personalized trip recommendation</li>
              <li>Draft an easy simple itinerary for you</li>
              <li>Europe/Canada travel hacks</li>
              <li>Airbnb, flights, card recommendations included</li>
            </ul>
          </div>
        </div>
        <button
          type="button"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-6"
          onClick={handleSubmit}
        >
          Pay ₹1000
        </button>
      </div>
    </div>
  );
};

export default ChoosePrice;
