import { configureStore } from '@reduxjs/toolkit';
import dishes from './dishesSlices';
import cartSlice from './cartSlice';

export const store = configureStore({
  reducer: {
    dishes: dishes,
    cart 
  }
})