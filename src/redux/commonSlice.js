import { createSlice } from '@reduxjs/toolkit';

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    isLoading: false,
    toast: {
        isError: false,
        message: ""
    }
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setToast: (state,action) => {
        state.toast = action.payload
    }
  },
});

export const { setLoading, setToast} = commonSlice.actions;

export default commonSlice.reducer;
