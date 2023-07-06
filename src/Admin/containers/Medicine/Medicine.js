import React, { useEffect, useState } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddMedicineForm from './AddMedicineForm';

export default function Medicine() {
    //1
    const [data, setData] = React.useState([]);
    const [updatedata, setUpdateData] = React.useState(null);

    //3   5

    React.useEffect(() => {
        let localdata = JSON.parse(localStorage.getItem("medicine"));
        if (localdata !== null) {
            setData(localdata);
        }
    }, [])



    const handleSubmitData = (data) => {
        let localdata = JSON.parse(localStorage.getItem("medicine"));

        let rNo = Math.floor(Math.random() * 100);
        let newData = { id: rNo, ...data };

        if (localdata === null) {
            localStorage.setItem("medicine", JSON.stringify([newData]));
            setData([newData]);
        } else {
            if (updatedata) {
                let udata = localdata.map((v) => {
                    if (v.id === data.id) {
                        return data;
                    } else {
                        return v;
                    }
                })
                localStorage.setItem("medicine", JSON.stringify(udata));
                setData(udata);
            } else {
                localdata.push(newData);
                localStorage.setItem("medicine", JSON.stringify(localdata));
                setData(localdata);
            }

        }

        setUpdateData(null);
    }

    const handleRemove = (id) => {
        // console.log("AAA", id);
        let localdata = JSON.parse(localStorage.getItem("medicine"));
        let fData = localdata.filter((v, i) => v.id !== id);
        localStorage.setItem("medicine", JSON.stringify(fData));
        setData(fData);
    }

    const handleEdit = (data) => {
        setUpdateData(data);
    }



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
        <div>
            <div>
                <h1>Medicine Part</h1>
            </div>
            <AddMedicineForm onHandleSubmit={handleSubmitData} onUpdate={updatedata}/>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
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


