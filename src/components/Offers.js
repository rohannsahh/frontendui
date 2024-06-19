import React from 'react';
import Header from './Header';
import Footer from './Footer';

const offers = [
  { id: 1, title: 'Summer Sale', promoCode: 'SUMMER20', description: 'Get 20% off on summer items.' },
  { id: 2, title: 'Winter Discounts', promoCode: 'WINTER15', description: 'Save 15% on all winter wear.' },
  { id: 3, title: 'Free Shipping', promoCode: 'SHIPFREE', description: 'Enjoy free shipping on orders over $50.' },
];

const OffersPage = () => {
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-100 p-4 m-5">
      <h1 className="text-4xl font-bold text-center mb-5">Offers</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {offers.map(offer => (
          <div key={offer.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{offer.title}</h2>
            <p className="mb-2">{offer.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Promo Code:</span>
              <span className="bg-blue-500 text-white py-1 px-3 rounded-lg">{offer.promoCode}</span>
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
