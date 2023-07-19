import * as ActionType from "../ActionType";

const initState = {
    doctors : [],
    loading : false,
    erroe : null
}

export const doctorReducer = (state = initState, action) => {
    switch(action.type) {
        case ActionType.GET_DOCTORS:
            return{
                ...state,
                doctors: action.payload
            }
            default: 
                return state;
    }
}
