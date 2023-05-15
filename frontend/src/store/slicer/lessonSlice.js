import { createSlice } from "@reduxjs/toolkit";
import { fetchLessons } from "../fetchData/lesson/getLessons";


const lessonsSlice = createSlice({
    name: "lessons",
    initialState: {
        lessons: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers : (builder) => {
        builder.addCase(fetchLessons.pending, (state) =>{
            state.loading = true
        });
        builder.addCase(fetchLessons.fulfilled, (state, action) =>{
            state.loading = false
            state.lessons = action.payload
        });
        builder.addCase(fetchLessons.rejected, (state, action) =>{
            state.loading = false
            state.error = action.payload
        });
    }
})

export const lessonsReducer =  lessonsSlice.reducer;