import React from 'react';
import background from "../assets/loginbackground.webp"
import { useNavigate } from 'react-router-dom';

const AttachDocuments = () => {
    const navigate = useNavigate();

    const handleClick=()=>{
        navigate('/appointment');
    }
  return (
    <div className="flex items-center justify-center min-h-screen " style={{background: "linear-gradient(rgba(0, 0, 128, 1), rgba(0, 0, 61, 1))"
    }}>
    <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${background})`, opacity:0.08 }}      ></div>
      <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 md:w-3/4 lg:w-1/3 relative">
        <div className="absolute  ">
         <button className='mt-4 ml-4' onClick={()=>{navigate(-1)}}><img src={require('../assets/back-button.png')} alt='previous'/></button>
        </div >
        <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#191983] m-4">2/4 Attach your Documents</h2></div>
        
        <form>
          <div className="mb-4">
            <label className="block font-semibold text-gray-700">Bank Statement for last 6 months:</label>
            <input 
              type="text" 
              className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Paste the Google Drive Link"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Choose your Nationality:</label>
            <select className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              <option>USA</option>
              <option>India</option>
              <option>UK</option>
              <option>Canada</option>

            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Choose your Occupation:</label>
            <select className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              <option>Salaried</option>
              <option>Self-Employed</option>
              <option>Student</option>
              <option>Retired</option>
            </select>
          </div>
          <div className="mb-4 ">
            <label className="block text-gray-700 font-semibold">Anything Else (optional):</label>
            <textarea 
              className="mt-2 block w-full h-16 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="*add any other details about your travel plan i.e tentative travel dates, specific countries"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="bg-[#191983] text-white py-1 px-6 lg:text-xl rounded-lg mt-6 focus:outline-none hover:bg-blue-800"
            onClick={handleClick}>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AttachDocuments;
