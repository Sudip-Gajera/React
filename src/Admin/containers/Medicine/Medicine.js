import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddMedicineForm from './AddMedicineForm';
import { useDispatch, useSelector } from 'react-redux';
import { addMedicineData, deleteMedicineData, getMedicineData, updateMedicineData } from '../../../redux/action/medicine.action';

export default function Medicine() {
    const [updatedata, setUpdateData] = React.useState(null);

    const dispatch = useDispatch();
    const medicineData = useSelector(state => state.medicineData)

    React.useEffect(() => {
        dispatch(getMedicineData());
    }, [])

    const handleSubmitData = (data) => {
        if(updatedata){
            dispatch(updateMedicineData(data));
        }else{
            dispatch(addMedicineData(data));
        }
        setUpdateData(null);
    }

    const handleRemove = (id) => {
        console.log("AAA", id);
        dispatch(deleteMedicineData(id));
    }

    const handleEdit = (data) => {
        setUpdateData(data);
        console.log(data);
    }



    const columns = [
        { field: 'id', headerName: 'ID', width: 30 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'expiry', headerName: 'Exp. Date', width: 100 },
        {
            field: 'price',
            headerName: 'Price',
            sortable: false,
            width: 60,
        },
        {
            field: 'desc',
            headerName: 'Description',
            sortable: false,
            width: 300,
        },
        {
            field: 'Action',
            headerName: 'Action',
            renderCell: (params) => (
                <>
                    <IconButton color="success" onClick={() => handleEdit(params.row)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleRemove(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            )
        },
    ];

    //2  4
    return (
        <div>
            <div>
                <h1>Medicine Part</h1>
            </div>
            <AddMedicineForm onHandleSubmit={handleSubmitData} onUpdate={updatedata}/>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={medicineData.medicineData}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    // checkboxSelection
                />
            </div>
        </div>
    );
}


