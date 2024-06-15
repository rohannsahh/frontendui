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

  useEffect(() => {
    setLocalBankStatement(bankStatement);
    setLocalNationality(nationality);
    setLocalOccupation(occupation);
    setLocalAdditionalInfo(additionalInfo);
  }, [bankStatement, nationality, occupation, additionalInfo]);

  const validateGoogleDriveLink = (link) => {
    // eslint-disable-next-line no-useless-escape
    const driveLinkPattern = /^(https:\/\/)?drive\.google\.com\/[a-zA-Z0-9-_\/]+$/;
    return driveLinkPattern.test(link);
    
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (localBankStatement.trim() === '') {
      setError('This field is required.');
    } else if (!validateGoogleDriveLink(localBankStatement)) {
      setError('Please enter a valid Google Drive link.');
    } else {
      setError('');
      dispatch(setBankStatement(localBankStatement));
      dispatch(setNationality(localNationality));
      dispatch(setOccupation(localOccupation));
      dispatch(setAdditionalInfo(localAdditionalInfo));
      navigate('/appointment');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ background: "linear-gradient(rgba(0, 0, 128, 1), rgba(0, 0, 61, 1))" }}>
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${background})`, opacity: 0.08 }}></div>
      <div className="bg-white rounded-lg shadow-lg p-3 sm:p-8 w-11/12 md:w-3/4 space-y-2 lg:w-1/3 relative">
        <div className="absolute">
          <button className='lg:mt-4 lg:ml-4' onClick={() => { navigate(-1) }}><img src={require('../assets/back-button.png')} alt='previous' /></button>
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
    </div>
  );
};

export default AttachDocuments;
