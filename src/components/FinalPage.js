import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PromoCodeModal from '../shared/PromoCodeModal';

const FinalPage = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const selectedVisa = useSelector((state) => state.visa.selectedVisa);
  const bankStatement = useSelector((state) => state.attachdocumentSlice.bankStatement);
  const nationality = useSelector((state) => state.attachdocumentSlice.nationality);
  const occupation = useSelector((state) => state.attachdocumentSlice.occupation);
  const additionalInfo = useSelector((state) => state.attachdocumentSlice.additionalInfo);
  const selectedDate = useSelector((state) => state.appointment.selectedDate);
  const selectedTime = useSelector((state) => state.appointment.selectedTime);
  const selectedOption = useSelector((state) => state.pricing.selectedOption);

  const [promoModalOpen, setPromoModalOpen] = useState(false);
  const [price, setPrice] = useState(getPrice(selectedOption));

  function getPrice(option) {
    if (option === 'Get Reviewed') {
      return 1000;
    } else if (option === 'A-Z prep') {
      return 2000;
    }
    return 0;
  }

  const handleEdit = (step) => {
    onClose();
    switch (step) {
      case 1:
        navigate('/visaSelection');
        break;
      case 2:
        navigate('/attachDocuments');
        break;
      case 3:
        navigate('/appointment');
        break;
      case 4:
        navigate('/choosePrice');
        break;
      default:
        break;
    }
  };

  const handleConfirmAndPay = () => {
    onClose();
    alert('Submitted and Paid');
    navigate('/dashboard');
  };

  const applyPromoCode = (discountedPrice) => {
    setPrice(discountedPrice);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg m-3 px-3 shadow-lg w-full max-w-lg">
        <div className="p-4 relative">
          <button onClick={onClose} className="text-red-500 hover:text-black text-2xl absolute right-2 top-4">
            &times;
          </button>
          <h2 className="text-2xl font-bold text-center text-[#000080] mb-7">Review Your Details</h2>

          <div className="mb-4 flex flex-row my-2 justify-between">
            <h3 className="text-xl font-bold">Selected Visa</h3>
            <p>{selectedVisa}</p>
            <button onClick={() => handleEdit(1)} className="text-blue-600">Edit</button>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-bold">Personal Details</h3>
              <button onClick={() => handleEdit(2)} className="text-blue-600">Edit</button>
            </div>
            <p className="mb-1"><span className="font-semibold text-gray-700">Bank Statement:</span> <span className="mx-3">{bankStatement}</span></p>
            <p className="mb-1"><span className="font-semibold text-gray-700">Nationality:</span> <span className="mx-3">{nationality}</span></p>
            <p className="mb-1"><span className="font-semibold text-gray-700">Occupation:</span> <span className="mx-3">{occupation}</span></p>
            <p className="mb-1"><span className="font-semibold text-gray-700">Additional Info:</span> <span className="mx-3">{additionalInfo}</span></p>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold mb-2">Appointment</h3>
              <button onClick={() => handleEdit(3)} className="text-blue-600">Edit</button>
            </div>
            <div className="bg-white max-w-md mx-auto">
              <div className="mb-1">
                <p className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24">Date:</span>
                  <span>{selectedDate ? new Date(selectedDate).toLocaleDateString() : 'Not set'}</span>
                </p>
              </div>
              <div className="mb-1">
                <p className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24">Time:</span>
                  <span>{selectedTime ? new Date(selectedTime).toLocaleTimeString() : 'Not set'}</span>
                </p>
              </div>
              <div className="mb-1">
                <p className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24">Name:</span>
                  <input type="text" id="name" defaultValue="" className="flex-grow m-1 border p-1 rounded-md border-gray-400" />
                </p>
              </div>
              <div className="mb-1">
                <p className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24">Email:</span>
                  <input type="email" id="email" defaultValue="" className="flex-grow m-1 border rounded-md p-1 border-gray-400" />
                </p>
              </div>
              <div className="mb-1">
                <p className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24">Mobile no:</span>
                  <input type="text" id="number" defaultValue="" className="flex-grow m-1 p-1 border rounded-md border-gray-400" />
                </p>
              </div>
            </div>
          </div>

          <div className="mb-4 flex flex-row my-2 justify-between">
            <h3 className="text-xl font-bold">Pricing Option</h3>
            <p>{selectedOption}</p>
            <button onClick={() => handleEdit(4)} className="text-blue-600">Edit</button>
          </div>
          <div className="flex mb-4">
            <p>Have a promo code?</p>
            <button className="text-blue-500" onClick={() => setPromoModalOpen(true)}>
              <span className="mx-2">Apply here</span>
            </button>
          </div>
          {selectedOption && (
            <div className="flex justify-center mt-5">
              <button
                type="button"
                className="bg-[#191983] text-white py-2 px-4 rounded-lg"
                onClick={handleConfirmAndPay}
              >
                Pay ₹{price}
              </button>
            </div>
          )}
        </div>
      </div>
      <PromoCodeModal
        isOpen={promoModalOpen}
        onClose={() => setPromoModalOpen(false)}
        originalPrice={getPrice(selectedOption)}
        applyPromoCode={applyPromoCode}
      />
    </div>
  );
};

export default FinalPage;
