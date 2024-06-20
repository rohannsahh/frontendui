import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import background from "../assets/loginbackground.webp"
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate, setSelectedTime } from '../redux/slices/appointmentSlice';


const AppointmentDate = () => {
  const selectedDate = useSelector((state) => state.appointment.selectedDate);
  const selectedTime = useSelector((state) => state.appointment.selectedTime);

  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleDateChange = (date) => {
  dispatch(setSelectedDate(date));
    setError('');
  };
  const handleTimeChange = (time) => {
    dispatch(setSelectedTime(time));
    setError('');
  };

  
  const handleClick = () => {
    if (!selectedDate || !selectedTime) {
      setError('*Please select both a date and time!');
    } else if (selectedDateTime && selectedDateTime < new Date()) {
      setError('*Please select a valid date and time!');
    } else {
      navigate('/choosePrice');
    }
  };
  

  const combineDateTime = (date, time) => {
    if (!date || !time) return null;
    const combined = new Date(date);
    combined.setHours(time.getHours(), time.getMinutes());
    return combined;
  };

  const selectedDateTime = combineDateTime(selectedDate, selectedTime);


  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{background: "linear-gradient(rgba(0, 0, 128, 1), rgba(0, 0, 61, 1))"
    }}>
        <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${background})`, opacity:0.08 }}      ></div>
      <div className="bg-white relative rounded-lg shadow-lg p-4 w-full max-w-xl">
      <div className="absolute  ">
         <button className='p-0' onClick={()=>{navigate('/attachDocuments')}}><img src={require('../assets/back-button.png')} alt='previous'/></button>
        </div >
        <div className="text-center mb-6">
          
          <h2 className="text-xl sm:text-2xl font-bold text-[#191983]  sm:m-3">
         &nbsp;   &nbsp;   &nbsp;  3/4 Choose Appointment Date and Time
        </h2>
        </div>
        
        <div className="flex flex-col items-center ">
        <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            minDate={new Date()}
            dateFormat="Pp"
            className="w-full  "
          />
          <DatePicker
            selected={selectedTime}
            onChange={handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="Time"
            dateFormat="h:mm aa"
            className="w-full border-gray-500 rounded-md shadow-md border m-1 p-1 text-center mt-4"
            placeholderText="Select Time"
          />
    
        </div>
        {error && <div className="text-red-500 animate-vibrate font-semibold text-lg text-center">{error}</div>}

        <div className="flex justify-center">
            <button 
              type="submit" 
              className="bg-[#191983] text-white py-1 px-6 text-base lg:text-xl  rounded-lg mt-4 focus:outline-none hover:bg-blue-800"
            onClick={handleClick}>
              Next
            </button>
          </div>
      </div>
    </div>
  );
};

export default AppointmentDate;

