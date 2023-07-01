import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Medicine() {

    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState([]);  //1
    const [update, setUpdate] = React.useState(false);

    //3   5
    React.useEffect(() => {
        let localdata = JSON.parse(localStorage.getItem("medicine"));
        if (localdata !== null) {
            setData(localdata);
        }
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
        setUpdate(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = (data) => {
        let localdata = JSON.parse(localStorage.getItem("medicine"));

        let rNo = Math.floor(Math.random() * 100);
        let newData = { id: rNo, ...data };

        if (localdata === null) {
            localStorage.setItem("medicine", JSON.stringify([newData]));
            setData([newData]);
        } else {
            localdata.push(newData);
            localStorage.setItem("medicine", JSON.stringify(localdata));
            setData(localdata);
        }
        handleClose();
    }

    const handleRemove = (id) => {
        // console.log("AAA", id);
        let localdata = JSON.parse(localStorage.getItem("medicine"));
        let fData = localdata.filter((v, i) => v.id !== id);
        localStorage.setItem("medicine", JSON.stringify(fData));
        setData(fData);
    }

    const handleEdit = (data) => {
        // console.log("AAAAAA",p);
        setValues(data);
        handleClickOpen();
        setData(data);
        setUpdate(true);
        setValues({
            name: data.name,
            date: data.date,
            price: data.price,
            disc: data.disc,
        })
    }

    let d = new Date();
    let nd = new Date(d.setDate(d.getDate() - 1));

    let medicineSchema = Yup.object({
        name: Yup.string()
            .required('Please enter Medicine Name'),
        disc: Yup.string().required('Please enter your message').test('disc', 'Max 10 Words allow',
            function (val) {
                let arr = val.split(" ");

                if (arr.length > 10) {
                    return false
                } else {
                    return true
                }
            }),
        // date: Yup.date().required('Please Select Exp. Date').min(new Date(), 'Please Enter Valid Date'),
        date: Yup.date().required('Please Select Exp. Date').min(nd, 'Please Enter Valid Date'),
        price: Yup.number().required('Please Enter Price').min(0, "You must be at least 0")
    });

    const formik = useFormik({
        validationSchema: medicineSchema,
        initialValues: {
            name: '',
            date: '',
            price: '',
            disc: '',
        },
        onSubmit: (values, action) => {
            handleAdd(values);
            action.resetForm();
        },
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, setValues } = formik;

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'date', headerName: 'Exp. Date', width: 130 },
        {
            field: 'price',
            headerName: 'Price',
            sortable: false,
            width: 90,
        },
        {
            field: 'disc',
            headerName: 'Description',
            sortable: false,
            width: 200,
        },
        {
            field: 'Action',
            headerName: 'Action',
            renderCell: (params) => (
                <>
                    <IconButton aria-label="update" color="success" onClick={() => handleEdit(params.row)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" color="error" onClick={() => handleRemove(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            )
        },
    ];

    //2  4
    return (
        <div className='text-center'>
            <h1>Medicine Part</h1>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Medicine
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{update ? "Edit Medicine Data" : "Add Medicine"}</DialogTitle>
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
                            id="date"
                            type="date"
                            fullWidth
                            variant="standard"
                            value={values.date}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span className='err'>{errors.date && touched.date ? errors.date : ''}</span>
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
                            id="disc"
                            label="Description"
                            type="text"
                            fullWidth
                            variant="standard"
                            placeholder='Description'
                            value={values.disc}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span className='err'>{errors.disc && touched.disc ? errors.disc : ''}</span>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit'>{update ? "Save" : "Submit"}</Button>
                        </DialogActions>
                    </DialogContent>
                </form>
            </Dialog>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    // initialState={{
                    //     pagination: {
                    //         paginationModel: { page: 0, pageSize: 5 },
                    //     },
                    // }}
                    pageSizeOptions={[5, 10]}
                // checkboxSelection
                />
            </div>
        </div>
    );
}


