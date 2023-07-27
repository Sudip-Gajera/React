import * as ActionType from "../ActionType";

const initState = {
    item: []
}

export const cartReducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.ADD_TO_CART:

            let item = state.item.some((v) => v.pid === action.payload.pid);
            console.log(item);

            if (item) {
                let index = state.item.findIndex((v) => v.pid === action.payload.pid);
                state.item[index].qty++
            } else {
                state.item.push(action.payload);
            }

            console.log(item, state);

            return {
                item: state.item
                // ...state
            }

        case ActionType.INC_QTY:
            console.log(state.item, action.payload);

            let indexInc = state.item.findIndex((v) => v.pid === action.payload);
            state.item[indexInc].qty++;

            return {
                item: state.item
                // ...state
            };

        case ActionType.DEC_QTY:
            console.log(state.item, action.payload);

            let indexDec = state.item.findIndex((v) => v.pid === action.payload);

            if (state.item[indexDec].qty > 1) {
                state.item[indexDec].qty--;
            }


            return {
                item: state.item
                // ...state
            };


        case ActionType.REMOVE_ITEM:
            console.log(state.item, action.payload);

            let delet = state.item.findIndex((v) => v.pid === action.payload);

                console.log(delet);
                state.item.splice(delet,1);
            


            return {
                item: state.item
                // ...state
            };


        default:
            return state
    }
}