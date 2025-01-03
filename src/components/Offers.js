import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const offers = [
  { id: 1, title: 'Summer Sale', promoCode: 'SUMMER20', description: 'Get 20% off on summer items.' },
  { id: 2, title: 'Winter Discounts', promoCode: 'WINTER15', description: 'Save 15% on all winter wear.' },
];

const OffersPage = () => {
  const [copiedPromo, setCopiedPromo] = useState(null);

  const handleCopy = (promoCode) => {
    navigator.clipboard.writeText(promoCode).then(() => {
      setCopiedPromo(promoCode);
      setTimeout(() => {
        setCopiedPromo(null);
      }, 2000); 
    }).catch((error) => {
      console.error('Failed to copy promo code:', error);
    });
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-100 rounded-md shadow-md p-4 m-5">
      <h1 className="text-4xl font-bold text-center mb-10 mt-3">Offers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:px-12 lg:mx-8  gap-8 lg:gap-24">
        {offers.map(offer => (
          <div key={offer.id} className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{offer.title}</h2>
            <p className="mb-4">{offer.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Promo Code:</span>
              <button className="bg-blue-600 text-white py-1 px-3 rounded-lg"    onClick={() => handleCopy(offer.promoCode)}
              >{offer.promoCode}</button>
               {copiedPromo === offer.promoCode && (
                <p className="mt-2 font-medium text-gray-600">Promo code copied!</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default OffersPage;
