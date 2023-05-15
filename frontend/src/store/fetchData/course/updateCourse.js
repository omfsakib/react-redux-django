import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const updateCourse = createAsyncThunk(
  'courses/updateCourse',
  async (updatedCourse) => {
    const response = await axios.put(`http://127.0.0.1:8000/courses/${updatedCourse.id}/`, updatedCourse)
    // console.log(response.data)
    return response.data;
  }
);