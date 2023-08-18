import { deletedepartmentData, getdepartmentData, postdepartmentData, updatedepartmentData } from '../../common/apis/department.api';
import * as ActionType from '../ActionType';

export const getDepartmentData = () => (dispatch) => {
    try {
        getdepartmentData()
            .then((response) => dispatch({ type: ActionType.GET_DEPARTMENT_DATA, payload: response.data }))
            .catch((err) => console.log(err))
        // fetch('http://localhost:3004/department')
        //     .then((res) => res.json())
        //     .then((data) => dispatch({ type: ActionType.GET_DEPARTMENT_DATA, payload: data }))
        //     .catch((err) => console.log(err))
    } catch (error) {
        console.log(error);
    }
}

export const addDepartmentData = (data) => (dispatch) => {
    try {
        postdepartmentData(data)
            .then((response) => dispatch({ type: ActionType.ADD_DEPARTMENT_DATA, payload: response.data }))

        // fetch('http://localhost:3004/department', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then((res) => res.json())
        //     .then((data) => dispatch({ type: ActionType.ADD_DEPARTMENT_DATA, payload: data }))
        //     .catch((err) => console.log(err))
    } catch (error) {
        console.log(error);
    }
}

export const deletDepartmentData = (id) => (dispatch) => {
    try {
        deletedepartmentData(id)
            .then(dispatch({ type: ActionType.DELETE_DEPARTMENT_DATA, payload: id }))
            .catch((err) => console.log(err))
        // fetch('http://localhost:3004/department/' + id, {
        //     method: "DELETE",
        // })
        //     .then((res) => res.json())
        //     .then(dispatch({ type: ActionType.DELETE_DEPARTMENT_DATA, payload: id }))
        //     .catch((err) => console.log(err))
    } catch (error) {
        console.log(error);
    }
}

export const updateDepartmentData = (data) => (dispatch) => {
    try {
        updatedepartmentData(data)
            .then(dispatch({ type: ActionType.DELETE_DEPARTMENT_DATA, payload: data }))
            .catch((err) => console.log(err))
            // fetch('http://localhost:3004/department/' + data.id, {
            //     method: "PUT",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(data),
            // })
            //     .then((res) => res.json())
            .then(dispatch({ type: ActionType.UPDATE_DEPARTMENT_DATA, payload: data }))
            .catch((err) => console.log(err))
    } catch (error) {
        console.log(error);
    }
}