import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseAPIURL = 'https://paypointt.azurewebsites.net/api';

export const postApplication = createAsyncThunk(
  'application/post',
  async (data, thunkAPI) => {
    try {
      if (
        data &&
        data.DirectorName &&
        data.Services &&
        data.AgentNin &&
        data.Email
      ) {
        const res = await axios.post(
          // 'https://paypointt.azurewebsites.net/AgentFile/CreateApplication', 
          // `https://proxy.cors.sh/` + `${baseAPIURL}/AgentApplic/CreateApplication`,
          'https://paypointapi-develop.azurewebsites.net/api/AgentApplic/CreateAgentApplic',
          data,
          {
            headers: {
              Accept: '*/*',
              'Content-Type': 'application/json',
              //** cors.sh api-key for cors proxy server */
            // 'x-cors-api-key': 'temp_b3e19f8f9ce1bd892fe4b08fdbfce874'
            },
          }
        );
        let statusCode = res.data.code || res.data.Code;
        if (statusCode === '9000') {
          console.info(statusCode);
          return res.data;
        } else {
          console.error(res.data);
          return thunkAPI.rejectWithValue('Error, please try again');
        }
      } else {
        return thunkAPI.rejectWithValue('Please fill in the required fields');
      }
    } catch (error) {
      console.error(error);
      console.info(error.message);
      return thunkAPI.rejectWithValue(
        'An error occured while submitting your KYC, please try again.'
      );
    }
  }
);

const applicationSlice = createSlice({
  name: 'application',
  initialState: {
    isLoading: false,
    error: null,
    data: null,
    modalShow: false,
    kycStatus: 'PENDING',
  },
  reducers: {
    setModalShow: (state, action) => {
      state.modalShow = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postApplication.pending, (state) => {
        console.info('pending');
        state.isLoading = true;
      })
      .addCase(postApplication.fulfilled, (state, action) => {
        console.info('submitted');
        console.log(action.payload);
        state.isLoading = false;
        state.data = action.payload;
        state.kycStatus = 'SUBMITTED';
        state.modalShow = true;
      })
      .addCase(postApplication.rejected, (state, action) => {
        console.info('failed');
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setModalShow, clearError } = applicationSlice.actions;
export default applicationSlice.reducer;
