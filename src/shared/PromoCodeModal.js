import React, { useState } from 'react';

const PromoCodeModal = ({ isOpen, onClose, originalPrice, applyPromoCode }) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState(originalPrice);
  const [error, setError] = useState('');

  const handleApplyPromoCode = () => {
    // Example 
    if(promoCode===''){
        setDiscountedPrice(originalPrice)
    }
    if (promoCode === 'DISCOUNT10') {
      const discount = originalPrice * 0.1;
      setDiscountedPrice(originalPrice - discount);
      setError('');
    } else {
      setError('Invalid promo code');
    }
  };

  const handleConfirm = () => {
    applyPromoCode(discountedPrice);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4 shadow-lg w-full max-w-md">
        <div className="p-4 relative">
          <button onClick={onClose} className="text-red-500 hover:text-black text-2xl absolute right-2 top-4">
            &times;
          </button>
          <h2 className="text-2xl font-bold text-center text-[#000080] mb-5">Apply Promo Code</h2>
          <p className="text-lg mb-3 "> <span className='font-semibold '> Price :</span> ₹{originalPrice}</p>
        <div className='lg:flex '>
            <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter promo code"
            className=" w-full sm:w-[52%] mb-3 py-2 px-4 border rounded-md"
          />
          <button
            onClick={handleApplyPromoCode}
            className="bg-blue-700 text-white py-2 px-4 rounded-lg mx-auto mb-3"
          >
            Apply Promo Code
          </button>
          </div>  
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <p className="text-lg mb-5"><span className='font-semibold '>Final Price :</span> ₹{discountedPrice}</p>
          <div className='flex justify-center'>
            <button
            onClick={handleConfirm}
            className="bg-[#191983] text-white py-2 px-4 rounded-lg"
          >
            Confirm and Pay ₹{discountedPrice}
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCodeModal;
