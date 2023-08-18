import { createSlice } from "@reduxjs/toolkit"

const initState = {
    item: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initState,
    reducers: {
        addtocart: (state, action) => {
            console.log(action);
            let item = state.item.some((v) => v.pid == action.payload.pid);
            console.log(item);

            if (item) {
                let index = state.item.findIndex((v) => v.pid == action.payload.pid);
                state.item[index].qty++
            } else {
                state.item.push(action.payload);
            }

            console.log(item, state);

            state.item = state.item
        },
        incrementQty: (state, action) => {
            console.log(state.item, action.payload);

            let indexInc = state.item.findIndex((v) => v.pid === action.payload);
            state.item[indexInc].qty++;

            state.item = state.item
        },
        decrementQty: (state, action) => {
            console.log(state.item, action.payload);

            let indexDec = state.item.findIndex((v) => v.pid === action.payload);

            if (state.item[indexDec].qty > 1) {
                state.item[indexDec].qty--;
            }

            state.item = state.item
        },
        removeItem: (state, action) => {
            console.log(state.item, action.payload);

            let delet = state.item.findIndex((v) => v.pid === action.payload);

                console.log(delet);
                state.item.splice(delet,1);

                state.item = state.item
        }
    }
})

export const {addtocart,incrementQty, decrementQty, removeItem } = cartSlice.actions

export default cartSlice.reducer