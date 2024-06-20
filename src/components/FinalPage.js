import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PromoCodeModal from '../shared/PromoCodeModal';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
  const [phoneError, setPhoneError] = useState('');
  const [promoModalOpen, setPromoModalOpen] = useState(false);
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [value, setValue] = useState('');

  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Email is required'),
  });

  const { control, handleSubmit, formState: { errors } ,getValues} = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handlePhoneChange = (newValue) => {
    setValue(newValue);
    if (phoneError && isValidPhoneNumber(newValue)) {
      setPhoneError('');
    }
  };


  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
  
    if (!res) {
      alert('Razorpay SDK failed to load!');
      return;
    }
  
    try {
      const amount = getPrice(); // Get the custom price
      const data = await fetch('http://localhost:5000/razorpay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }), // Sending custom amount to backend
        
      }).then((t) => t.json());
  
      if (!data || !data.id) {
        console.error('Invalid response from server:', data);
        alert('Failed to create order. Please try again.');
        return;
      }
      const options = {
        key: 'rzp_test_WiPul1Rjqfqr32', // Replace with your actual Key ID
        amount: data.amount,
        currency: data.currency,
        name: 'SchengenEase',
        description: 'Test Transaction',
        image: 'https://example.com/your_logo',
        order_id: data.id,
        callback_url: 'http://localhost:5000/verify',
        prefill: {
          name: getValues('name'), // Use the form values
          email: getValues('email'), // Use the form values
          contact: value, // Use the phone value
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#000080',
        },
        handler: function (response) {
          console.log(response);
          navigate('/dashboard');
        },
        modal: {
          ondismiss: function () {
            console.log('Checkout form closed');
          },
        },
      };
  
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
      alert('Oops! Something went wrong.\nError in opening checkout');
    }
  }
  



  const getPrice = () => {
    let price = 0;
    if (selectedOption === 'Get Reviewed') {
      price = 1000;
    } else if (selectedOption === 'A-Z prep') {
      price = 2000;
    }
    //es-lint
    return discountedPrice !== null ? discountedPrice : price;
  };

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

  const onSubmit = (data) => {

    if (!isValidPhoneNumber(value)) {
      setPhoneError('Invalid phone number');
      return;
    }
    setPhoneError('');
     
    displayRazorpay();
  onClose();
  };

  const applyPromoCode = (newPrice) => {
    setDiscountedPrice(newPrice);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg m-3 px-3 shadow-lg w-full max-w-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 relative">
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
            <p className="mb-1 text-wrap"><span className="font-semibold text-gray-700">Bank Statement:</span> <span className="mx-2  ">{bankStatement}</span></p>
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
                  <span className="mx-5">{selectedTime ? new Date(selectedTime).toLocaleTimeString() : 'Not set'}</span>
                </p>
              </div>
              
              <div className="mb-1">
                <p className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24">Name:</span>
                  <input type="text" id="name" defaultValue="" className="flex-grow m-1 border p-1 rounded-md border-gray-400" required/>
                </p>
              </div>

              <div className="mb-1">
                <p className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24">Email:</span>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="email"
                        {...field}
                        className={`flex-grow m-1 border rounded-md p-1 border-gray-400 ${errors.email ? 'border-red-500' : ''}`}
                      />
                    )}
                  />
                </p>
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              <div className="mb-1">
                <p className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24">Mobile no:</span>
                  <PhoneInput
                    placeholder="Enter phone number"
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="IN"
                    value={value}
                    onChange={handlePhoneChange}
                    className="flex-grow m-1 p-1 border rounded-md border-gray-400"
                    id="number"
                  />
                </p>
                {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
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
                type="submit"
                className="bg-[#191983] text-white py-2 px-4 rounded-lg"
              >
                Pay ₹{getPrice()}
              </button>
            </div>
          )}
        </form>
      </div>
      <PromoCodeModal
        isOpen={promoModalOpen}
        onClose={() => setPromoModalOpen(false)}
        originalPrice={getPrice()}
        applyPromoCode={applyPromoCode}
      />
    </div>
  );
};

export default FinalPage;
