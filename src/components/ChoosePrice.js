// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import background from "../assets/loginbackground.webp"


// const ChoosePrice = () => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const navigate = useNavigate();

//   const PricingCard = ({ title, subtitle, features, price }) => {
//     return (
//       <div className="bg-white rounded-lg p-7 border shadow-md m-4 w-full md:w-96 flex flex-col">
//         <h2 className="text-2xl text-center font-bold mb-2" style={{ color: '#000080' }}>{title}</h2>
//         <p className="text-black text-center font-semibold text-base mb-5">{subtitle}</p>
//         <div className="flex-grow">
//           {features.map((feature, index) => (
//             <div key={index} className="flex items-center mb-2">
//               <img className="mr-2" src={require('../assets/checked.png')} alt="" style={{ width: 20, height: 20 }} />
//               <p className="text-gray-900 text-base ml-2">{feature}</p>
//             </div>
//           ))}
//         </div>
        
//       </div>
//     );
//   };

//   const getReviewedFeatures = [
//     'Schengen or Canada Travel Visa',
//     'Reviewing each document and information being shared',
//     'Prepare you for the appointment',
//     'Sharpen and improve the application',
//     'Provide right dates for target countries'
//   ];

//   const azPrepFeatures = [
//     'Schengen or Canada Travel Visa',
//     'PREPARING each document with information being shared',
//     'Prepare you for the appointment',
//     'Sharpen and improve the application',
//     'Provide right dates for target countries',
//     'Hand-held you to the entire process',
//     'Personalized trip recommendation',
//     'Draft a easy simple itinerary for you',
//     'Europe/Canada travel hacks',
//     'Airbnb, flights, card recommendations included'
//   ];

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//   };

//   const handleSubmit = () => {
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4"  style={{background: "linear-gradient(rgba(0, 0, 128, 1), rgba(0, 0, 61, 1))"
//     }}>
//         <div
//         className="absolute inset-0 bg-cover bg-center opacity-50"
//         style={{ backgroundImage: `url(${background})`, opacity:0.08 }}      ></div>
//       <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 w-full relative max-w-5xl">
//       <div className="absolute  ">
//          <button className='mt-4 ml-4' onClick={()=>{navigate(-1)}}><img src={require('../assets/back-button.png')} alt='previous'/></button>
//         </div >
//         <div className="text-center mb-8">
//         <h2 className="text-xl sm:text-3xl font-bold text-[#191983] m-4">   4/4 Pricing    </h2></div>
//         <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
//           <div className='lg:flex'>     
//           <PricingCard title="Get Reviewed" subtitle="(recommended for experienced folks)" features={getReviewedFeatures}  />
//           <PricingCard title="A-Z prep" subtitle="(new-bie or first timers)" features={azPrepFeatures}  />
//           </div>

//         </div>
//         <div className='flex justify-center'> <button
//           type="button"
//           className=" bg-[#191983] text-white font-bold py-2 px-4 rounded-lg mt-6"
//           onClick={handleSubmit}
//         >
//           Pay ₹1000
//         </button></div>
       
//       </div>
//     </div>
//   );
// };

// export default ChoosePrice;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from "../assets/loginbackground.webp"

const ChoosePrice = () => {
  const [selectedOption, setSelectedOption] = useState('Get Reviewed');
  const navigate = useNavigate();

  const PricingCard = ({ title, subtitle, features }) => {
    return (
      <div className="bg-white rounded-lg p-7 border shadow-md m-4 w-full md:w-96 flex flex-col">
        <h2 className="text-2xl text-center font-bold mb-2" style={{ color: '#000080' }}>{title}</h2>
        <p className="text-black text-center font-semibold text-base mb-5">{subtitle}</p>
        <div className="flex-grow">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center mb-2">
              <img className="mr-2" src={require('../assets/checked.png')} alt="" style={{ width: 20, height: 20 }} />
              <p className="text-gray-900 text-base ml-2">{feature}</p>
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

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    // Add submit functionality here
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
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 w-full relative max-w-5xl">
        <div className="absolute">
          <button className='mt-4 ml-4' onClick={() => { navigate(-1) }}><img src={require('../assets/back-button.png')} alt='previous' /></button>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-3xl font-bold text-[#191983] m-4">4/4 Pricing</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className='lg:flex'>
            <PricingCard
              title="Get Reviewed"
              subtitle="(recommended for experienced folks)"
              features={getReviewedFeatures}
            />
            <PricingCard
              title="A-Z prep"
              subtitle="(new-bie or first timers)"
              features={azPrepFeatures}
            />
          </div>
        </div>
        <div className="mt-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="pricingOption"
                value="Get Reviewed"
                checked={selectedOption === 'Get Reviewed'}
                onChange={() => handleOptionChange('Get Reviewed')}
                className="form-radio h-5 w-5 text-indigo-600"
              />
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="pricingOption"
                value="A-Z prep"
                checked={selectedOption === 'A-Z prep'}
                onChange={() => handleOptionChange('A-Z prep')}
                className="form-radio h-5 w-5 text-indigo-900"
              />
            </label>
          </div>
        </div>
        <div className='flex justify-center'>
          <button
            type="button"
            className="bg-[#191983] text-white font-bold py-2 px-4 rounded-lg mt-6"
            onClick={handleSubmit}
          >
            Pay ₹{getPrice()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChoosePrice;
