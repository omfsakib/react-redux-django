import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
    const response = await axios.get('http://127.0.0.1:8000/courses/');
    return response.data;
});