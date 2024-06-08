// src/routes/AppRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Knowus from '../components/Knowus';
import Pricing from '../components/Pricing';
import HowItWorks from '../components/HowItWorks';
import Login from '../components/Login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/know-us" element={<Knowus />} />
      <Route path="/how-it-works" element={ <HowItWorks/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
