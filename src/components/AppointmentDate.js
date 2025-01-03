import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import background from "../assets/loginbackground.webp"
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate, setSelectedTime } from '../redux/slices/appointmentSlice';

const appointments =[
    {
        "sid": "11f48294-d180-4356-8d0c-4db24da16344",
        "date": "2024-08-29T00:00:00.000Z",
        "time": "2024-08-30T14:00:00.000Z",
        "status": true,
        "createdon": "2024-07-27T04:06:46.233Z",
        "updatedon": "2024-07-27T04:06:46.233Z"
    },
    
]


const AppointmentDate = () => {
  const selectedDate = useSelector((state) => state.appointment.selectedDate);
  const selectedTime = useSelector((state) => state.appointment.selectedTime);

  const [error, setError] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableTimes(selectedDate);
    }
  }, [selectedDate]);

  const fetchAvailableTimes = (date) => {
    const filteredAppointments = appointments.filter(app => 
      new Date(app.date).toDateString() === date.toDateString()
    );

    if (filteredAppointments.length === 0) {
      setError('No available times for the selected date.');
      setAvailableTimes([]);
    } else {
        const times = filteredAppointments.map(app => {
            const time = new Date(app.time);
            const adjustedTime = new Date(date);
            adjustedTime.setHours(time.getUTCHours(), time.getUTCMinutes());
            return adjustedTime;
          });
      setAvailableTimes(times);
      setError('');
    }
  };

  const handleDateChange = (date) => {
    dispatch(setSelectedDate(date));
    setError('');
  };

  const handleTimeChange = (time) => {
    const isValidTime = availableTimes.some((availableTime) => {
      return (
        availableTime.getUTCHours() === time.getUTCHours() &&
        availableTime.getUTCMinutes() === time.getUTCMinutes()
      );
    });
  
    if (isValidTime) {
      dispatch(setSelectedTime(time));
      setError('');
    } else {
      setError('*Please select a valid time from the available options!');
    }
  };

  
  const handleClick = () => {
    const isValidTime = availableTimes.some((availableTime) => {
      return (
        selectedTime &&
        availableTime.getUTCHours() === selectedTime.getUTCHours() &&
        availableTime.getUTCMinutes() === selectedTime.getUTCMinutes()
      );
    });

    if (!selectedDate || !selectedTime) {
      setError('*Please select both a date and time!');
    } else if (selectedDateTime && selectedDateTime < new Date()) {
      setError('*Please select a valid date and time!');
    } else if (!isValidTime) {
      setError('*Please select a valid time from the available options!');
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

  const getUniqueDates = (appointments) => {
    const dates = appointments.map(app => new Date(app.date).toDateString());
    return [...new Set(dates)].map(date => new Date(date));
  };

  const availableDates = getUniqueDates(appointments);


  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{background: "linear-gradient(rgba(0, 0, 128, 1), rgba(0, 0, 61, 1))"
    }}>
        <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${background})`, opacity:0.08 }}></div>
      <div className="bg-white relative rounded-lg shadow-lg p-4 w-full max-w-xl">
      <div className="absolute">
         <button className='p-0' onClick={()=>{navigate('/attachDocuments')}}><img src={require('../assets/back-button.png')} alt='previous'/></button>
        </div >
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#191983] sm:m-3">
          &nbsp; &nbsp; &nbsp; 3/4 Choose Appointment Date and Time
        </h2>
        </div>
        <div className="flex flex-col items-center">
        <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            minDate={new Date()}
            filterDate={(date) => availableDates.some(d => d.toDateString() === date.toDateString())}
            dateFormat="Pp"
            className="w-full"
          />
          <DatePicker
            selected={selectedTime}
            onChange={handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={60}
            timeCaption="Time"
            dateFormat="h:mm aa"
            includeTimes={availableTimes}
            className="w-full border-gray-500 rounded-md shadow-md border m-1 p-1 text-center mt-4"
            placeholderText="Select Time"

          />
        </div>
        {error && <div className="text-red-500 animate-vibrate font-semibold text-lg text-center">{error}</div>}
        <div className="flex justify-center">
            <button 
              type="submit" 
              className="bg-[#191983] text-white py-1 px-6 text-base lg:text-xl rounded-lg mt-4 focus:outline-none hover:bg-blue-800"
              onClick={handleClick}>
              Next
            </button>
          </div>
      </div>
    </div>
  );
};

export default AppointmentDate;
