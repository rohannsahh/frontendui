import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setBankStatement, setNationality, setOccupation, setAdditionalInfo } from '../redux/slices/attachdocumentSlice';
import background from "../assets/loginbackground.webp";

const AttachDocuments = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const bankStatement = useSelector((state) => state.attachdocumentSlice.bankStatement);
  const nationality = useSelector((state) => state.attachdocumentSlice.nationality);
  const occupation = useSelector((state) => state.attachdocumentSlice.occupation);
  const additionalInfo = useSelector((state) => state.attachdocumentSlice.additionalInfo);

  const [localBankStatement, setLocalBankStatement] = useState(bankStatement);
  const [localNationality, setLocalNationality] = useState(nationality);
  const [localOccupation, setLocalOccupation] = useState(occupation);
  const [localAdditionalInfo, setLocalAdditionalInfo] = useState(additionalInfo);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    loading: true,
    success: false,
    message: 'Checking link accessibility...',
  });

  useEffect(() => {
    setLocalBankStatement(bankStatement);
    setLocalNationality(nationality);
    setLocalOccupation(occupation);
    setLocalAdditionalInfo(additionalInfo);
  }, [bankStatement, nationality, occupation, additionalInfo]);

  const validateGoogleDriveLink = (link) => {
    const driveLinkPattern = /^(https:\/\/)?(www\.)?drive\.google\.com\/(file\/d\/|open\?id=)[a-zA-Z0-9-_]+/;
    return driveLinkPattern.test(link);
  };

  const checkDriveLinkAccess = async (link) => {
    try {
      const response = await fetch(`http://localhost:5000/check-link?link=${encodeURIComponent(link)}`);
      const data = await response.json();
      return data.accessible;
    } catch (error) {
      console.error('Error accessing the link:', error);
      return false;
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (localBankStatement.trim() === '') {
      setError('This field is required.');
    } else if (!validateGoogleDriveLink(localBankStatement)) {
      setError('Please enter a valid Google Drive link.');
    } else {
      setError('');
      setIsModalOpen(true);
      setModalContent({
        loading: true,
        success: false,
        message: 'Checking link accessibility...',
      });
      const isAccessible = await checkDriveLinkAccess(localBankStatement);
      if (isAccessible) {
        setModalContent({
          loading: false,
          success: true,
          message: 'Link accessed',
        });
        setTimeout(() => {
          setIsModalOpen(false);
          dispatch(setBankStatement(localBankStatement));
          dispatch(setNationality(localNationality));
          dispatch(setOccupation(localOccupation));
          dispatch(setAdditionalInfo(localAdditionalInfo));
          navigate('/appointment');
        }, 2000);
      } else {
        setModalContent({
          loading: false,
          success: false,
          message: 'The Google Drive link is not accessible. Please ensure the document is shared properly.',
        });
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ background: "linear-gradient(rgba(0, 0, 128, 1), rgba(0, 0, 61, 1))" }}>
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${background})`, opacity: 0.08 }}></div>
      <div className="bg-white rounded-lg shadow-lg p-3 sm:p-8 w-11/12 md:w-3/4 space-y-2 lg:w-1/3 relative">
        <div className="absolute">
          <button className='lg:mt-4 lg:ml-4' onClick={() => { navigate('/visaSelection') }}><img src={require('../assets/back-button.png')} alt='previous' /></button>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#191983] m-4">2/4 Attach your Documents</h2>
        </div>
        <form onSubmit={handleClick}>
          <div className="mb-4">
            <label className="block font-semibold text-gray-700">Bank Statement for last 6 months:</label>
            <input
              type="text"
              value={localBankStatement}
              onChange={(e) => setLocalBankStatement(e.target.value)}
              className={`mt-2 block w-full px-3 py-2 bg-white border ${error ? 'border-red-600 animate-vibrate' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              placeholder="Paste the Google Drive Link"
              required
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Choose your Nationality:</label>
            <select
              className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={localNationality}
              onChange={(e) => setLocalNationality(e.target.value)}
            >
              <option value="">Select your nationality</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Choose your Occupation:</label>
            <select
              className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={localOccupation}
              onChange={(e) => setLocalOccupation(e.target.value)}
            >
              <option value="">Select your occupation</option>
              <option value="Salaried">Salaried</option>
              <option value="Self-Employed">Self-Employed</option>
              <option value="Student">Student</option>
              <option value="Retired">Retired</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Anything Else (optional):</label>
            <textarea
              className="mt-2 block w-full h-16 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={localAdditionalInfo}
              onChange={(e) => setLocalAdditionalInfo(e.target.value)}
            ></textarea>
            <span>*add any other details about your travel plan i.e tentative travel dates, specific countries</span>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#191983] text-white py-1 px-6 lg:text-xl rounded-lg mt-3 focus:outline-none hover:bg-blue-800"
              onClick={handleClick}
            >
              Next
            </button>
          </div>
        </form>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 sm:w-3/4 lg:w-1/4">
            <div className="text-center">
              {modalContent.loading ? (
                <>
                  <svg className="animate-spin h-8 w-8 text-blue-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 2.21.896 4.21 2.342 5.658l1.658-1.367z"></path>
                  </svg>
                  <p className="mt-4 text-lg font-medium">{modalContent.message}</p>
                </>
              ) : modalContent.success ? (
                <div className='flex flex-col items-center'>
                  <img src={require('../assets/correcttick.png')} alt='success' className='w-8 h-8'/>
                  
                  <p className="mt-4 text-xl font-medium">{modalContent.message}</p>
                </div>
              ) : (
                <div className='flex flex-col items-center'>
         <img src={require('../assets/deletebutton.png')} alt='success' className='w-8 h-8'/>
        <p className="mt-4 text-lg ">{modalContent.message}</p>
         <button 
    className='mt-4 text-white bg-red-600 py-1 px-4 rounded-lg hover:bg-red-400' 
    onClick={() => setIsModalOpen(false)}
  >
    Close
        </button>
      </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttachDocuments;
