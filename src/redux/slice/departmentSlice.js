import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit"
import { deletedepartmentData, getdepartmentData, postdepartmentData, updatedepartmentData } from "../../common/apis/department.api";
import { faIR } from "@mui/material/locale";

const initState = {
    department : [],
    isLoading: false,
    error: null
}

export const fetchDepartment = createAsyncThunk(
    'department/fetch',
    async () => {

        await new Promise((resolve, reject) => setTimeout(resolve,2000))

        let response = await getdepartmentData();
        return response.data;
    }
);

export const addDepartment = createAsyncThunk(
    'department/add',
    async (data) => {
        let response = await postdepartmentData(data);
        return response.data;
    }
);

export const updateDepartment = createAsyncThunk(
    'department/update',
    async (data) => {
        let response = await updatedepartmentData(data);
        return response.data;
    }
);

export const deleteDepartment = createAsyncThunk(
    'department/delete',
    async (id) => {
        await deletedepartmentData(id);
        return id;
    }
);

const isPending = (state, action) => {
    state.isLoading = true;
    state.error = null;
}

const isError = (state, action) => {
    state.isLoading = false;
    state.error = action.error.message
}

export const departmentSlice = createSlice({
    name: 'department',
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchDepartment.pending, isPending)
        .addCase(fetchDepartment.fulfilled, (state, action) => {
            console.log(action);
            state.department = action.payload
        })
        .addCase(fetchDepartment.rejected, isError)
        .addCase(addDepartment.fulfilled, (state, action) => {
            console.log(action);
            state.department = state.department.concat(action.payload)
        })
        .addCase(updateDepartment.fulfilled, (state, action) => {
            console.log(action);
            state.department = state.department.map((v) => {
                if(v.id === action.payload.id){
                    return action.payload
                }else{
                    return v
                }
            })
        })
        .addCase(deleteDepartment.fulfilled, (state, action) => {
            console.log(action);
            state.department = state.department.filter((v) => v.id !== action.payload)
        })
    }
})

export default departmentSlice.reducer;