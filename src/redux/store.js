import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from './slices/appointmentSlice';
import attachdocumentReducer from './slices/attachdocumentSlice';
import visaReducer from './slices/visaSlice';
import pricingReducer from './slices/pricingSlice';

const store = configureStore({
  reducer: {
    appointment: appointmentReducer,
    attachdocumentSlice:attachdocumentReducer , 
    visa: visaReducer,
    pricing:pricingReducer,
  },
});

export default store;
