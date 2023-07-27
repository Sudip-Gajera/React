import * as Actiontype from "../ActionType";

export const getMedicineData = () => (dispatch) => {
    try {
        fetch("http://localhost:3004/medicines")
            .then((res) => res.json())
            .then((data) => dispatch({ type: Actiontype.GET_MEDICINE, payload: data }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const addMedicineData = (data) => (dispatch) => {
    try{
        fetch("http://localhost:3004/medicines", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((data) => dispatch({ type: Actiontype.ADD_MEDICINE, payload: data }))
            .catch((error) => console.log(error))
    }catch(error) {
        console.log(error);
    }
}

export const deleteMedicineData = (id) => (dispatch) => {
    try{
        fetch("http://localhost:3004/medicines/" + id, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then(dispatch({ type: Actiontype.DELETE_MEDICINE, payload: id }))
            .catch((error) => console.log(error))
    }catch(error) {
        console.log(error);
    }
}

export const updateMedicineData = (data) => (dispatch) => {
    try{
        fetch("http://localhost:3004/medicines/" + data.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((data) => dispatch({ type: Actiontype.UPDATE_MEDICINE, payload: data }))
            .catch((error) => console.log(error))
    }catch(error) {
        console.log(error);
    }
}