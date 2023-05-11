import { configureStore } from '@reduxjs/toolkit';
import { courseReducer } from './slicer/courseSlice';

export const store = configureStore({
    reducer: {
      courses: courseReducer,
    },
  });
