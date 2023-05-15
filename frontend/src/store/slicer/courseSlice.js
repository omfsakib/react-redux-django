import { createSlice } from '@reduxjs/toolkit';
import { fetchCourses } from '../fetchData/course/getCourse';

const coursesSlice = createSlice({
    name: 'courses',
    initialState: {
      courses: [],
      loading: false,
      error: null,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchCourses.pending,(state) =>{
            state.loading = true;
        });
        builder.addCase(fetchCourses.fulfilled, (state, action) => {
            state.loading = false;
            state.courses = action.payload;
        });
        builder.addCase(fetchCourses.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
  }});

export const courseReducer = coursesSlice.reducer;