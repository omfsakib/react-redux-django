import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteItem = createAsyncThunk(
  'items/deleteItem',
  async (itemId) => {
    const response = await axios.delete(`('http://127.0.0.1:8000/${itemId}/courses/`);
    return itemId;
  }
);