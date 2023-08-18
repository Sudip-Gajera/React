import React, { useEffect, useState } from 'react';
import DepartmentForm from './DepartmentForm';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { addDepartment, deleteDepartment, fetchDepartment, updateDepartment } from '../../../redux/slice/departmentSlice';
// import { addDepartmentData, deletDepartmentData, getDepartmentData, updateDepartmentData } from '../../../redux/action/department.action';


function Department(props) {
    const [update, setUpdate] = useState(null);

    const dispatch = useDispatch();
    const department = useSelector(state => state.department)

    useEffect(() => {
        // dispatch(getDepartmentData())
        dispatch(fetchDepartment())
    }, [])

    const handleSubmit = (data) => {

        if (update) {
            // dispatch(updateDepartmentData(data))
            dispatch(updateDepartment(data))
        } else {
            // dispatch(addDepartmentData(data))
            dispatch(addDepartment(data))
        }
        setUpdate(null);
    }

    const handleDelete = (id) => {
        console.log(id);
        // dispatch(deletDepartmentData(id))
        dispatch(deleteDepartment(id))

    }
    const handleUpdate = (data) => {
        setUpdate(data)
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Department Name', width: 150 },
        { field: 'desc', headerName: 'Description', width: 500 },
        {
            field: 'action', headerName: 'Action', width: 500,
            renderCell: (params) => (
                <>
                    <button onClick={() => handleUpdate(params.row)}>EDIT</button>
                    <button onClick={() => handleDelete(params.row.id)}>DELETE</button>
                </>
            )
        }
    ];


    return (
        <>
            {
                department.error ? <p>{department.error}</p> :
                    <>
                        <div>
                            <h1>Department Part</h1>
                            <DepartmentForm onHandleSubmit={handleSubmit} onUpdate={update} />
                        </div>

                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={department.department}
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

        </>

    );
}

export default Department;