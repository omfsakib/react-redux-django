import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useDispatch } from 'react-redux';
import { updateCourse } from '../../store/fetchData/course/updateCourse';

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
  

export default function CourseUpdate(props) {
    const [course, setCourse] = React.useState(props.course)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();


    const handleUpdateCourse = () => {
        dispatch(updateCourse(course))
        handleClose()
      };

    const handleNameChange = (event) => {
        setCourse({
            ...course,
            name: event.target.value,
        });
    };

    const handleDescriptionChange = (event) => {
        setCourse({
            ...course,
            description: event.target.value,
        });
    };

    const handleStartDateChange = (date) => {
        setCourse({
            ...course,
            start_date: date.format('YYYY-MM-DD'),
        });
    };

    const handleEndDateChange = (date) => {
        setCourse({
            ...course,
            end_date: date.format('YYYY-MM-DD'),
        });
    };

    return (
        <div>
            <Button onClick={handleOpen}><UploadOutlinedIcon/></Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography variant="h6" id="modal-title">
                        Update Course
                    </Typography>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <Box>
                            <TextField
                            id="outlined-required"
                            label="Course Name"
                            defaultValue= {course.name}
                            fullWidth
                            onChange={handleNameChange}
                            />
                        
                        </Box>
                        <Box width={"100%"}>
                            <TextField 
                            id="outlined-required"
                            label="Course Description"
                            defaultValue= {course.description}
                            onChange={handleDescriptionChange}
                            multiline
                            fullWidth 
                            rows={4}
                            />
                        </Box>
                        <Box>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker', 'DatePicker']}>
                                        <DatePicker label="Start Date"
                                        onChange={handleStartDateChange}
                                        defaultValue={dayjs(course.start_date)} />
                                        <DatePicker label="End Date"
                                        onChange={handleEndDateChange}
                                        defaultValue={dayjs(course.end_date)} />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Box>

                        <Box>
                            <Button variant="contained" onClick={handleUpdateCourse}>Update</Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}