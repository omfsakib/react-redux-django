import { createSlice } from "@reduxjs/toolkit";
import { updateCourse } from "../fetchData/course/updateCourse";

const updateCourseSlice = createSlice({
    name: "course",
    initialState: { course: {} },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(updateCourse.fulfilled, (state, action) => {
            state.course = action.payload;
        })
    }
  });

export const updateCourseReducer = updateCourseSlice.reducer;