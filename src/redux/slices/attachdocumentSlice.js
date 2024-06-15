import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bankStatement: '',
  nationality: 'India',
  occupation: 'Salaried',
  additionalInfo: '',
};

const attachdocumentSlice = createSlice({
  name: 'attachdocumentSlice',
  initialState,
  reducers: {
    setBankStatement(state, action) {
      state.bankStatement = action.payload;
    },
    setNationality(state, action) {
      state.nationality = action.payload;
    },
    setOccupation(state, action) {
      state.occupation = action.payload;
    },
    setAdditionalInfo(state, action) {
      state.additionalInfo = action.payload;
    },
  },
});

export const {
  setBankStatement,
  setNationality,
  setOccupation,
  setAdditionalInfo,
} = attachdocumentSlice.actions;

export default attachdocumentSlice.reducer;
