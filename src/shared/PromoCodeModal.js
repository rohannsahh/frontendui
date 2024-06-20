import React, { useState, useEffect } from 'react';

const PromoCodeModal = ({ isOpen, onClose, originalPrice, applyPromoCode }) => {
  const [promoCode, setPromoCode] = useState('');
  // eslint-disable-next-line
  const [discountedPrice, setDiscountedPrice] = useState(originalPrice);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setPromoCode('');
      setDiscountedPrice(originalPrice);
      setError('');
    }
  }, [isOpen, originalPrice]);

  const handleApplyPromoCode = () => {
    if (promoCode === '') {
      setDiscountedPrice(originalPrice);
    } else if (promoCode === 'DISCOUNT10') {
      const discount = originalPrice * 0.1;
      setDiscountedPrice(originalPrice - discount);
      setError('');
      applyPromoCode(originalPrice - discount); // Update the discounted price in the parent component
      onClose();
    } else {
      setError('Invalid promo code');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-2 shadow-lg w-full max-w-md">
        <div className="p-4 relative">
          <button onClick={onClose} className="text-red-500 hover:text-black text-2xl absolute right-2 top-4">
            &times;
          </button>
          <h2 className="text-2xl font-bold text-center text-[#000080] mb-5">Apply Promo Code</h2>
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter promo code"
            className="w-full mb-3 py-2 px-4 border rounded-md"
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="flex justify-center">
            <button
              onClick={handleApplyPromoCode}
              className="bg-blue-700 text-white py-2 px-4 rounded-lg mx-auto"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCodeModal;
