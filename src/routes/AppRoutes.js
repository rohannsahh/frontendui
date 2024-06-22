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
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/know-us" element={<Knowus />} />
      <Route path="/how-it-works" element={ <HowItWorks/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/login" element={
      <ProtectedRoute requireAuth={false}>
      <Login />
      </ProtectedRoute>
      } />
      <Route path="/signup" element={
        <ProtectedRoute requireAuth={false}>
        <SignUp />
      </ProtectedRoute>
      }/>
      <Route path="/visaSelection" element={
      <ProtectedRoute requireAuth={true}>
      <VisaSelection/>
      </ProtectedRoute>
      }/>
      <Route path="/attachDocuments" element={
      
      <ProtectedRoute requireAuth={true}>
      <AttachDocuments/>
            </ProtectedRoute>
      }/>
      <Route path="/appointment" element={
      <ProtectedRoute requireAuth={true}>
      <AppointmentDate/>
            </ProtectedRoute>
      }/>
      <Route path="/choosePrice" element={
      <ProtectedRoute requireAuth={true}>
<ChoosePrice/>
      </ProtectedRoute>
      }/>
      <Route path="/dashboard" element={<ProtectedRoute requireAuth={true}>
              <Dashboard />
            </ProtectedRoute>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/offers' element={<Offers/>}/>
      {/* <Route path='/pricing' element={<Pricing/>}/> */}



    </Routes>
  );
};

export default AppRoutes;
