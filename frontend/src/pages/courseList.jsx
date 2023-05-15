import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../store/fetchData/course/getCourse';
import { fetchLessons } from '../store/fetchData/lesson/getLessons';
import CourseTable from '../components/course/courseTable';

function CourseList() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);

  useEffect(() => {
    dispatch(fetchCourses());
    dispatch(fetchLessons());
  }, [dispatch]);

  return (
    <React.Fragment>
        <CourseTable courses = {courses}/>
    </React.Fragment>
  );
}

export default CourseList;
