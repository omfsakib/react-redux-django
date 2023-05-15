import { createSlice } from "@reduxjs/toolkit";
import { deleteItem } from "../fetchData/course/deleteCourse";

const deleteCourseSlice = createSlice({
    name: "deleteCourse",
    initialState: { course : {} },
    reducers: {}, 
    extraReducers: (builder) => {
        builder.addCase(deleteItem.fulfilled, (state, action) => {
            state.course = action.payload;
        })
    },
})

export const deleteCourseReducer = deleteCourseSlice.reducer; 