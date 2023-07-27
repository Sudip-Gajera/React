import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { addDoctor, addDoctorData, getDoctorsData, updateData } from '../../redux/action/doctor.action';
import AddDoctorForm from './AddDoctorForm';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';


export default function FormDialog() {
    const [updatedata, setUpdateData] = React.useState(null);

    const dispatch = useDispatch();
    const doctors = useSelector(state => state.doctor)
    console.log(doctors);

    useEffect(() => {
        dispatch(getDoctorsData());
    }, [])

    const handleSubmit = (data) => {
        if (updatedata) {
            dispatch(updateData(data));

        } else {
            dispatch(addDoctorData(data))

        }
        console.log(data);
        setUpdateData(null);
    }

    const handleEdit = (data) => {
        setUpdateData(data)
    }

    const handleRemove = (id) => {

        console.log(id);
        dispatch(addDoctor(id));
    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'designation', headerName: 'Designation', width: 170 },
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

    return (
        <div className='text-center'>
            <h1>Doctors Data</h1>
            {
                doctors.loading ? 
                <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                    <CircularProgress color="secondary" />
                </Stack> :
                    doctors.error ? "Something Worng" :
                        <>
                            <AddDoctorForm onHandleSubmit={handleSubmit} onUpdate={updatedata} />

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
                        </>
            }
        </div>
    );
}