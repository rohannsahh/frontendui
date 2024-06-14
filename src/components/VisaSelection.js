import React, { useState } from 'react';
import background from "../assets/loginbackground.webp"
import { useNavigate } from 'react-router-dom';

const VisaSelection = () => {
  const [selectedVisa, setSelectedVisa] = useState(null);
  const [error, setError] = useState('');
  const navigate= useNavigate();


  const handleSelectVisa = (visa) => {
    setSelectedVisa(visa);
    setError('');
  };

  const handleClick = () => {
    if (!selectedVisa) {
      setError('*Please select a Visa !');
    } else {
     
     
      navigate('/attachDocuments')    }
  };
 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative" style={{background: "linear-gradient(rgba(0, 0, 128, 1), rgba(0, 0, 61, 1))"
    }}>
       <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${background})`, opacity:0.08 }}      ></div>
      <div className="relative z-10 bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-2xl w-full mx-4 sm:mx-0">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#191983] m-4">
            1/4  Choose the Country Travel Visa
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row justify-center  items-center sm:space-x-4 mb-6">
          <label className="cursor-pointer">
            <input
              type="radio"
              name="visa"
              value="Schengen Visa"
              className="hidden"
              checked={selectedVisa === 'Schengen Visa'}
              onChange={() => handleSelectVisa('Schengen Visa')}
            />
            <div
              className={`border-2 rounded-lg overflow-hidden ${
                selectedVisa === 'Schengen Visa' ? 'border-blue-700 shadow-xl' : 'border-gray-300'
              }`}
            >
              <img
                src={require('../assets/schegenvisa.png')}
                alt="Schengen Visa"
                className="w-64 h-64 sm:h-56 object-cover"
              />
              <div className="p-2 text-center font-semibold">Schengen Visa</div>
            </div>
          </label>
          <label className="cursor-pointer mt-4 sm:mt-0">
            <input
              type="radio"
              name="visa"
              value="Canada Visa"
              className="hidden"
              checked={selectedVisa === 'Canada Visa'}
              onChange={() => handleSelectVisa('Canada Visa')}
            />
            <div
              className={`border-2 rounded-lg overflow-hidden ${
                selectedVisa === 'Canada Visa' ? 'border-blue-700 shadow-xl' : 'border-gray-300'
              }`}
            >
              <img
                src={require('../assets/canadavisa.png')}
                alt="Canada Visa"
                className="w-64 h-64 sm:h-56 object-cover"
              />
              <div className="p-2 text-center font-semibold ">Canada Visa</div>
            </div>
          </label>
        </div>
        {error && <div className="text-red-500 animate-vibrate font-semibold text-lg text-center ">{error}</div>}

        <div className="flex justify-center">
            <button 
              type="submit" 
              className="bg-[#191983] text-white py-1 px-6 lg:text-xl rounded-lg mt-3 focus:outline-none hover:bg-blue-800"
            onClick={handleClick}>
              Next
            </button>
          </div>
      </div>
    </div>
  );
};

export default VisaSelection;
