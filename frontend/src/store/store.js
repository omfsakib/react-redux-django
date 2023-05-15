import { configureStore } from '@reduxjs/toolkit';
import { courseReducer } from './slicer/courseSlice';
import { lessonsReducer } from './slicer/lessonSlice';
import { updateCourseReducer } from './slicer/updateCourseSlice';
import { deleteCourseReducer } from './slicer/deleteCourseSlice';

export const store = configureStore({
    reducer: {
      courses: courseReducer,
      lessons: lessonsReducer,
      updateCourse: updateCourseReducer,
      deleteCourse: deleteCourseReducer,
    },
  });
