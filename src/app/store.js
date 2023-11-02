import { configureStore } from '@reduxjs/toolkit';
import eduReducer from '../features/edu/eduSlice';

export const store = configureStore({
  reducer: {
    edu: eduReducer,
  },
});
