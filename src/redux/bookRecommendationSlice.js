import { createSlice } from '@reduxjs/toolkit';

const booksRecommendSlice = createSlice({
  name: 'booksRecommend',
  initialState: {
    booksData: [],
    filters: {
        query: '',
    },
    pagination: {
      page: 1,
      pageCount: 1
    }
  },
  reducers: {
    setBooksData: (state, action) => {
      state.booksData = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
  },
});

export const { setBooksData, setFilters, setPagination } = booksRecommendSlice.actions;

export default booksRecommendSlice.reducer;
