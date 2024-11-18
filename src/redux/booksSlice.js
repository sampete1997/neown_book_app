import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    booksData: [],
    filters: {
      title: '',
      genre: '',
      rating: 0,
      sort_by:""
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

export const { setBooksData, setFilters, setPagination } = booksSlice.actions;

export default booksSlice.reducer;
