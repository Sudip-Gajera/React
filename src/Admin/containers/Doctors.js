import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function FormDialog() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = (data) => {
        let localdata = JSON.parse(localStorage.getItem("doctors"));

        let rNo = Math.floor(Math.random()*100);
        let newData = {id:rNo, ...data}

        if (localdata === null) {
            localStorage.setItem("doctors", JSON.stringify([newData]));
        } else {
            localdata.push(newData);
            localStorage.setItem("doctors", JSON.stringify(localdata));
        }
        handleClose();
    }

    let doctorsSchema = Yup.object({
        name: Yup.string()
            .required('Please enter Name')
            .matches(/^[A-Za-z ]*$/, 'please enter Only character'),
        designation: Yup.string().required('Please enter your Designation'),
        about: Yup.string().required('Please enter your message').test('about', 'Max 50 Words allow',
            function (val) {
                let arr = val.split(" ");

                if (arr.length > 50) {
                    return false
                } else {
                    return true
                }
            }),
        photo: Yup.string().required('Please Select Photo'),
    });

    const formik = useFormik({
        validationSchema: doctorsSchema,
        initialValues: {
            name: '',
            designation: '',
            about: '',
            photo: '',
        },
        onSubmit: (values, action) => {
            handleAdd(values);
            action.resetForm();
        },
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

    return (
        <div className='text-center'>
            <h1>Doctors Data</h1>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Doctors Data
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Doctors Data</DialogTitle>
                <form action='#' method='post' onSubmit={handleSubmit}>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="name"
                        label="Name of Doctor"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <span className='err'>{errors.name && touched.name ? errors.name : ''}</span>

                    <TextField
                        margin="dense"
                        id="designation"
                        label="Designation"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={values.designation}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <span className='err'>{errors.designation && touched.designation ? errors.designation : ''}</span>

                    <TextField
                        margin="dense"
                        id="about"
                        label="About"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={values.about}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <span className='err'>{errors.about && touched.about ? errors.about : ''}</span>

                    <TextField
                        margin="dense"
                        id="photo"
                        type="file"
                        fullWidth
                        variant="standard"
                        value={values.photo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <span className='err'>{errors.photo && touched.photo ? errors.photo : ''}</span>
                    <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type='submit'>Submit</Button>
                </DialogActions>
                </DialogContent>
                </form>
                
            </Dialog>
        </div>
    );
}