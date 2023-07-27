import * as ActionType from "../ActionType";

export const getDoctorsData = () => (dispatch) => {
    try {
        dispatch(loadingData(true));
        setTimeout(function(){
            fetch("http://localhost:3004/doctors")
            .then((response) => {
                if(response.ok){
                    return response.json();
                }
                throw new Error("Something wornh");
            })
            // .then(res => res.json())
            .then(data => dispatch({ type: ActionType.GET_DOCTORS, payload: data }))
            .catch(error => dispatch(errorData(error)))
        },3000)
        
    } catch (error) {
        console.log(error);
        dispatch(errorData(error));
    }

}

export const addDoctorData = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3004/doctors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

            .then(response => response.json())
            .then((data) => dispatch({ type: ActionType.ADD_DOCTORS, payload: data }))
    } catch (error) {
        console.log(error);
    }
}

export const addDoctor = (id) => (dispatch) => {
    try {
        fetch("http://localhost:3004/doctors/" + id, {
            method: "DELETE",
        })
            .then(dispatch({ type: ActionType.DELETE_DOCTORS, payload: id }))
            .catch(error => console.log(error))
    }
    catch (error) {
        console.log(error);
    }

}

export const updateData = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3004/doctors/" + data.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(dispatch({ type: ActionType.UPDATE_DOCTORS, payload: data }))
            .catch(error => console.log(error))
    }
    catch (error) {
        console.log(error);
    }
}

export const loadingData = (status) => (dispatch) => {
    dispatch({ type: ActionType.LOADING_DOCTORS, payload: status })
}

export const errorData = (errMsg) => (dispatch) => {
    console.log(errMsg);
    dispatch({ type: ActionType.ERROR_DOCTORS, payload: errMsg })
}