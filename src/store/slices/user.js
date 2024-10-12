import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: JSON.parse(localStorage.getItem('userDetails')) || {
      email: '',
      isAuthenticated: false,
    },
    isLoading: false,
    error: null,
  },
  reducers: {
    updateCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem('userDetails', JSON.stringify(action.payload));
    },
    clearCurrentUser: (state) => {
      state.currentUser = {
        email: '',
        isAuthenticated: false,
      };
      localStorage.removeItem('userDetails');
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { updateCurrentUser, clearCurrentUser, setLoading, setError } =
  userSlice.actions;

export default userSlice.reducer;
