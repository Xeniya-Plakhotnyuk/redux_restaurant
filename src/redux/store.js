import { configureStore } from '@reduxjs/toolkit';
import dishes from './dishesSlices';

export const store = configureStore({
  reducer: {
    dishes: dishes
  }
})