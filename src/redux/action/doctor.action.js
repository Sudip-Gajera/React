import * as ActionType from "../ActionType";

export const getDoctorsData = () => (dispatch) => {
    fetch("http://localhost:3004/doctors")
        .then(res => res.json())
        .then(data => dispatch({ type: ActionType.GET_DOCTORS, payload: data }))
        .catch(error => console.log(error))
}


export const addDoctorData = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3004/doctors" , {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
        })

            .then(response => response.json())
            .then(data => console.log(data))
    } catch (error) {
        console.log(error);
    }
}