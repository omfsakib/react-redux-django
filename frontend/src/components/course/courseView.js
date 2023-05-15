import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import LessonTable from '../lessonTable';

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

export default function ViewModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [course, setCourse] = React.useState(props.course)

  return (
    <div>
    <Button onClick={handleOpen}><RemoveRedEyeOutlinedIcon/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {course.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {course.description}
          </Typography>
          <Typography  variant="subtitle2" gutterBottom>
            Enrolled Student : {course.students.length}
          </Typography>
          <LessonTable courseId = {course.id}/>
        </Box>
      </Modal>
    </div>
  );
}