import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedOption: '',
};

const pricingSlice = createSlice({
  name: 'pricing',
  initialState,
  reducers: {
    setSelectedOption(state, action) {
      state.selectedOption = action.payload;
    },
  },
});

export const { setSelectedOption } = pricingSlice.actions;
export default pricingSlice.reducer;
