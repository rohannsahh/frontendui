import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedVisa: '',
};

const visaSlice = createSlice({
  name: 'visaSlice',
  initialState,
  reducers: {
    setSelectedVisa(state, action) {
      state.selectedVisa = action.payload;
    },
  },
});

export const { setSelectedVisa } = visaSlice.actions;
export default visaSlice.reducer;
