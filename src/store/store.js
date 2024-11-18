import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../redux/booksSlice';
import commonSlice from '../redux/commonSlice';
import booksRecommendSlice from '../redux/bookRecommendationSlice'
const store = configureStore({
  reducer: {
    books: booksReducer,
    common: commonSlice,
    booksRecommend: booksRecommendSlice
  },
});

export default store;
