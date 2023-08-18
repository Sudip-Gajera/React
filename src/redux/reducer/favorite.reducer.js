import * as ActionType from "../ActionType";

const initState = {
    favItem: []
}

export const favReducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.FAVORITE_ITEM:

            let favItem = state.favItem.some((v) => v.pid === action.payload.pid);
            console.log(favItem);

            if (favItem) {
                
            } else {
                state.favItem.push(action.payload);
            }

            console.log(favItem, state);

            return {
                favItem: state.favItem
            }
        default:
            return state
    }
}