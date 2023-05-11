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
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Modal from '@mui/material/Modal';

export default function CourseTable(props) {
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
          {props.courses.map((course, index) => (
            <TableRow key={course.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell align="center">{course.name}</TableCell>
              <TableCell align="center">{course.description}</TableCell>
              <TableCell align="center">{course.start_date}</TableCell>
              <TableCell align="center">{course.end_date}</TableCell>
              <TableCell align="center">
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                  <Button><RemoveRedEyeOutlinedIcon/></Button>
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
