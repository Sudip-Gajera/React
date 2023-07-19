import * as ActionType from "../ActionType";

const initState = {
    count: 0
}

export const counterReducer = (state=initState, action) => {
    switch(action.type) {
        case ActionType.INCREMENT_COUNTER:
            return{
                count: state.count + 1
            }
        case ActionType.DECREMENT_COUNTER:
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}