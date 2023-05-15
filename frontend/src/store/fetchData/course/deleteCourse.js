import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteItem = createAsyncThunk(
  'items/deleteItem',
  async (courseData) => { 
    const response = await axios.delete(`http://127.0.0.1:8000/courses/${courseData.id}/delete/`, courseData);
    return response.data;
  }
);