import * as ActionType from '../ActionType';

const initState = {
    department: []
}

export const departmentReducer = (state = initState, action) => {
    console.log(action);
    switch(action.type){
        case ActionType.GET_DEPARTMENT_DATA:
            return{
                ...state,
                department: action.payload
            }
            case ActionType.ADD_DEPARTMENT_DATA:
                return{
                    ...state,
                    department: state.department.concat(action.payload)
                }
            case ActionType.DELETE_DEPARTMENT_DATA:
                return{
                    ...state,
                    department: state.department.filter((v) => v.id !== action.payload)
                }
                case ActionType.UPDATE_DEPARTMENT_DATA:
                return{
                    ...state,
                    department: state.department.map((v) => {
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