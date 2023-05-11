import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../store/fetchData/course/getCourse';
import CourseTable from '../components/courseTable';

function CourseList() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);


  useEffect(() => {
    dispatch(fetchCourses());
    console.log(courses)
  }, [dispatch]);

  return (
    <React.Fragment>
        <CourseTable courses = {courses}/>
    </React.Fragment>
  );
}

export default CourseList;
