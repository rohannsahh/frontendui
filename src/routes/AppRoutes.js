import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Knowus from '../components/Knowus';
import Pricing from '../components/Pricing';
import HowItWorks from '../components/HowItWorks';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import VisaSelection from '../components/VisaSelection';
import AttachDocuments from '../components/AttachDocuments';
import AppointmentDate from '../components/AppointmentDate';
import ChoosePrice from '../components/ChoosePrice';
import Dashboard from '../components/Dashboard';
import Blogs from '../components/Blogs';
import Offers from '../components/Offers';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/know-us" element={<Knowus />} />
      <Route path="/how-it-works" element={ <HowItWorks/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/visaSelection" element={<VisaSelection/>}/>
      <Route path="/attachDocuments" element={<AttachDocuments/>}/>
      <Route path="/appointment" element={<AppointmentDate/>}/>
      <Route path="/choosePrice" element={<ChoosePrice/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/offers' element={<Offers/>}/>



    </Routes>
  );
};

export default AppRoutes;
