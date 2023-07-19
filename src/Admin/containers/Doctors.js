import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { addDoctorData, getDoctorsData } from '../../redux/action/doctor.action';
import AddDoctorForm from './AddDoctorForm';

export default function FormDialog() {
    const dispatch = useDispatch();
    const doctors = useSelector(state => state.doctor)

    useEffect(() => {
        dispatch(getDoctorsData());
    },[])

    const handleSubmit = (data) => {
        console.log(data);
        dispatch(addDoctorData(data))
    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'designation', headerName: 'Designation', width: 170 },
    ];

    return (
        <div className='text-center'>
            <h1>Doctors Data</h1>
            <AddDoctorForm onHandleSubmit={handleSubmit}/>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={doctors.doctors}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}