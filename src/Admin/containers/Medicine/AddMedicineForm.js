import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function AddMedicineForm({ onHandleSubmit , onUpdate}) {
    const [open, setOpen] = React.useState(false);

    useEffect(()=> {
        if (onUpdate) {
            setValues(onUpdate);
            handleClickOpen();
        }
    },[onUpdate])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let d = new Date();
    let nd = new Date(d.setDate(d.getDate() - 1));

    let medicineSchema = Yup.object({
        name: Yup.string()
            .required('Please enter Medicine Name'),
            desc: Yup.string().required('Please enter your message').test('disc', 'Max 10 Words allow',
            function (val) {
                let arr = val.split(" ");

                if (arr.length > 10) {
                    return false
                } else {
                    return true
                }
            }),
        // date: Yup.date().required('Please Select Exp. Date').min(new Date(), 'Please Enter Valid Date'),
        expiry: Yup.date().required('Please Select Exp. Date').min(nd, 'Please Enter Valid Date'),
        price: Yup.number().required('Please Enter Price').min(0, "You must be at least 0"),
        desc: Yup.string().required('Please Enter Description')
    });

    const formik = useFormik({
        validationSchema: medicineSchema,
        initialValues: {
            name: '',
            expiry: '',
            price: '',
            desc: '',
        },
        onSubmit: (values, action) => {
            onHandleSubmit(values);
            action.resetForm();
            handleClose();
            console.log(values);
        },
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, setValues } = formik;

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Medicine
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Medicine</DialogTitle>
                <form action='#' method='post' onSubmit={handleSubmit}>
                    <DialogContent>
                        <TextField
                            margin="dense"
                            id="name"
                            name='name'
                            label="Name of Medicine"
                            type="name"
                            fullWidth
                            variant="standard"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span className='err'>{errors.name && touched.name ? errors.name : ''}</span>
                        <TextField
                            margin="dense"
                            id="expiry"
                            type="date"
                            fullWidth
                            variant="standard"
                            value={values.expiry}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span className='err'>{errors.expiry && touched.expiry ? errors.expiry : ''}</span>
                        <TextField
                            margin="dense"
                            id="price"
                            label="Price $"
                            type="number"
                            fullWidth
                            variant="standard"
                            value={values.price}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span className='err'>{errors.price && touched.price ? errors.price : ''}</span>
                        <TextField
                            margin="dense"
                            id="desc"
                            label="Description"
                            type="text"
                            fullWidth
                            variant="standard"
                            placeholder='Description'
                            value={values.desc}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span className='err'>{errors.desc && touched.desc ? errors.desc : ''}</span>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit'>Add</Button>
                        </DialogActions>
                    </DialogContent>
                </form>
            </Dialog>

        </>
    );
}

export default AddMedicineForm;