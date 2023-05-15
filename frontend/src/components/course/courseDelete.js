import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../store/fetchData/course/deleteCourse';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center', 
  };

export default function DeleteCourse(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [course, setCourse] = React.useState(props.course)
    const dispatch = useDispatch();

    
    const handleUpdateCourse = () => {
        props.setCourseID(course.id)
        dispatch(deleteItem(course))
        handleClose()
      };

  
return (
    <div>
    <Button onClick={handleOpen}><DeleteOutlineOutlinedIcon/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure to delete this course?
          </Typography>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={handleClose}>No</Button>
            <Button onClick={handleUpdateCourse}>Yes</Button>
        </ButtonGroup>
        <br/>
        <br/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {course.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {course.description}
          </Typography>
          <Typography  variant="subtitle2" gutterBottom>
            Enrolled Student : {course.students.length}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}