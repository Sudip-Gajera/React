import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as Yup from 'yup';
import { useFormik } from 'formik';

export default function DepartmentForm({onHandleSubmit, onUpdate}) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if(onUpdate){
            setValues(onUpdate)
            handleClickOpen()
        }
    }, [onUpdate])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let departmentSchema = Yup.object({
        name: Yup.string().required('Please Enter Name of Department'),
        desc: Yup.string().required('Please Enter Description of Department'),
    });

    const formik = useFormik({
        validationSchema: departmentSchema,
        initialValues: {
            name: '',
            desc: '',
        },
        onSubmit: (values,action) => {
            console.log(values);
            onHandleSubmit(values)
            action.resetForm()
            handleClose();
            
        }
    })

    const {handleBlur, handleChange, handleSubmit, setValues, errors, touched, values} = formik;

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open to Add Data
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Department Data</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <TextField
                            margin="dense"
                            id="name"
                            label="Enter Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        <span>{touched.name && errors.name ? errors.name : ''}</span>
                        <TextField
                            margin="dense"
                            id="desc"
                            label="Enter Description"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.desc}
                        />
                         <span>{touched.desc && errors.desc ? errors.desc : ''}</span>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type='submit'>Subscribe</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}