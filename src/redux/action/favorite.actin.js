import * as ActionType from "../ActionType";

export const favoriteItem = (id) => (dispatch) => {
    dispatch({type: ActionType.FAVORITE_ITEM , payload: {pid: id}});
}