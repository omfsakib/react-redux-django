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
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useSelector } from 'react-redux';
import { selectLessonsByCourseId } from '../store/filterData/lessonFilter'

export default function LessonTable(props) {

 const lessons = useSelector((state) => selectLessonsByCourseId(state, props.courseId));

   return (
    <Box width={'100%'} margin={'auto'}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="center">Lesson Name</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lessons.map((lesson, index) => (
            <TableRow key={lesson.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell align="center">{lesson.title}</TableCell>
              <TableCell align="center">{lesson.description}</TableCell>
              <TableCell align="center">
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                  <Button><UploadOutlinedIcon/></Button>
                  <Button><DeleteOutlineOutlinedIcon/></Button>
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
