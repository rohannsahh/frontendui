import React from 'react';

const PricingCard = ({ title, subtitle, features, price }) => {
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
      <div className="mt-auto">
        <button className="bg-[#0000FD] rounded-full py-3 px-6 mt-auto w-full  text-white font-bold">
          Buy ₹{price}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
