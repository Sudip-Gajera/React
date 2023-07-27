import * as Actiontype from "../ActionType";

const initState = {
    medicineData: []
}

export const medicineReducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case Actiontype.GET_MEDICINE:
            return {
                ...state,
                medicineData: action.payload
            }
        case Actiontype.ADD_MEDICINE:
            return {
                ...state,
                medicineData: state.medicineData.concat(action.payload)
            }
        case Actiontype.DELETE_DOCTORS:
            return {
                ...state,
                medicineData: state.medicineData.filter((v) => v.id != action.payload)
            }
        case Actiontype.UPDATE_MEDICINE:
            return {
                ...state,
                medicineData: state.medicineData.map((v) => {
                    if(v.id === action.payload.id) {
                        return action.payload
                    }else{
                        return v
                    }
                })
            }
        default:
            return state

    }
}
