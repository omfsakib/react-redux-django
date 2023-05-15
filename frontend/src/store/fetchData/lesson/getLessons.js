import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchLessons = createAsyncThunk('courses/fetchLessons', async () => {
    const response = await axios.get(`http://127.0.0.1:8000/lessons/`);
    return response.data;
});