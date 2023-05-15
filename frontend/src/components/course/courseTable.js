import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CourseView from './courseView'
import CourseUpdate from './courseUpdate';
import DeleteCourse from './courseDelete';
import { useSelector } from 'react-redux';

export default function CourseTable(props) {
  const updatedCourse = useSelector((state) => state.updateCourse);
  const deleteCourse = useSelector((state) => state.deleteCourse)
  const [courses, setCourses] = React.useState([])
  const [courseId, setCourseId] = React.useState(0)
 
  React.useEffect(() => {
    setCourses(props.courses)
  }, [props.courses])

  React.useEffect(() => {
    setCourses((prevCourses) => {
      return prevCourses.map((course) =>
        course.id === updatedCourse.course.id ? updatedCourse.course : course
      );
    });
  }, [updatedCourse]);

  React.useEffect(() =>{
    setCourses(
      courses.filter(course => course.id !== courseId)
    )
  },[deleteCourse, setCourseId, courseId])

  return (
    <Box width={'70%'} margin={'auto'}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell align="center">Course Name</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Starting Date</TableCell>
              <TableCell align="center">Ending Date</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course, index) => (
              <TableRow key={course.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell align="center">{course.name}</TableCell>
                <TableCell align="center">{course.description}</TableCell>
                <TableCell align="center">{course.start_date}</TableCell>
                <TableCell align="center">{course.end_date}</TableCell>
                <TableCell align="center">
                  <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <CourseView course={course} />
                    <CourseUpdate course={course} />
                    <DeleteCourse course={course} setCourseID ={setCourseId} />
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
