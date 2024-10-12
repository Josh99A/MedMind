import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'formData',
  initialState: {
    formData: {},
    kycStatus: true,
  },
  reducers: {
    updateForm: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    clearForm: (state) => {
      state.formData = {};
    },
    updateStatus: (state, action) => {
      state.kycStatus = action.payload;
    },
  },
});

export const { updateForm, clearForm, updateStatus } = formSlice.actions;

export default formSlice.reducer;
