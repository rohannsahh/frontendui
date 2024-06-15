import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
    navigate('/')
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg m-3 px-3 shadow-lg w-full max-w-lg ">
        <div className="p-4 relative">
          <button onClick={onClose} className="text-red-500  hover:text-black text-2xl absolute right-2 top-4">
            &times;
          </button>
          <h2 className="text-2xl font-bold text-center text-[#000080] mb-6">Review Your Details</h2>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Selected Visa</h3>
            <p>{selectedVisa}</p>
            <button onClick={() => handleEdit(1)} className="text-blue-600 mt-2">Edit</button>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Personal Details</h3>
            <p><span className="font-semibold">Bank Statement :</span> {bankStatement}</p>
            <p><span className="font-semibold">Nationality :</span> {nationality}</p>
            <p><span className="font-semibold">Occupation :</span> {occupation}</p>
            <p><span className="font-semibold">Additional Info :</span> {additionalInfo}</p>
            <button onClick={() => handleEdit(2)} className="text-blue-600 mt-2">Edit</button>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Appointment</h3>
            <p>Date: {selectedDate ? new Date(selectedDate).toLocaleDateString() : 'Not set'}</p>
            <p>Time: {selectedTime ? new Date(selectedTime).toLocaleTimeString() : 'Not set'}</p>
            <button onClick={() => handleEdit(3)} className="text-blue-600 mt-2">Edit</button>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Pricing Option</h3>
            <p>{selectedOption}</p>
            <button onClick={() => handleEdit(4)} className="text-blue-600 mt-2">Edit</button>
          </div>

          <div className="flex justify-center mt-6">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg" onClick={handleConfirmAndPay}>
              Confirm and Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;
