import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import background from "../assets/loginbackground.webp"


const AppointmentDate = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const navigate = useNavigate();

  const handleClick=()=>{
    navigate('/choosePrice');
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{background: "linear-gradient(rgba(0, 0, 128, 1), rgba(0, 0, 61, 1))"
    }}>
        <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${background})`, opacity:0.08 }}      ></div>
      <div className="bg-white relative rounded-lg shadow-lg p-2 md:p-10 w-full max-w-3xl">
      <div className="absolute  ">
         <button className='lg:mt-4 lg:ml-4' onClick={()=>{navigate(-1)}}><img src={require('../assets/back-button.png')} alt='previous'/></button>
        </div >
        <div className="text-center mb-8">
          
          <h2 className="text-xl sm:text-2xl font-bold text-[#191983] mt-8 sm:m-4">
          3/4 Choose Appointment Date and Time
        </h2>
        </div>
        
        <div className="flex flex-col items-center ">
        <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
            showTimeSelect
            dateFormat="Pp"
            className="w-full"
          />
    
        </div>
        <div className="flex justify-center">
            <button 
              type="submit" 
              className="bg-[#191983] text-white py-1 px-6 lg:text-xl rounded-lg mt-7 focus:outline-none hover:bg-blue-800"
            onClick={handleClick}>
              Next
            </button>
          </div>
      </div>
    </div>
  );
};

export default AppointmentDate;

