import * as ActionType from "../ActionType";

export const addtoCart = (id) => (dispatch) => {
    dispatch({type: ActionType.ADD_TO_CART , payload: {pid: id, qty: 1}});
}

export const incCart = (id) => (dispatch) => {
    dispatch({type: ActionType.INC_QTY , payload: id});
}

export const decCart = (id) => (dispatch) => {
    dispatch({type: ActionType.DEC_QTY , payload: id});
}

export const deleteCart = (id) => (dispatch) => {
    dispatch({type: ActionType.REMOVE_ITEM , payload: id});
}