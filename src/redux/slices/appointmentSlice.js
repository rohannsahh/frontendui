import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDate: null,
  selectedTime: null,
};

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },
    setSelectedTime(state, action) {
      state.selectedTime = action.payload;
    },
  },
});

export const { setSelectedDate, setSelectedTime } = appointmentSlice.actions;

export default appointmentSlice.reducer;
