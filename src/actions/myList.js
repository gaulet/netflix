import { getItemMyListTrue, getMyList } from "../selectors/myList"
import { filter } from "ramda"
export const ADD_PICTURE = "ADD_PICTURE";
export const DELETE_PICTURE = "DELETE_PICTURE";

export const setAddPicture = (elem = {}) => (dispatch, getState) => {
    const { bool } = getItemMyListTrue(getState());

    if (!bool) dispatch({ type: ADD_PICTURE, elem: elem });
};

export const setDeletePicture = (src = '') => (dispatch, getState) => {
    const newList = filter((elem) => elem.src !== src, getMyList(getState()));

    dispatch({ type: DELETE_PICTURE, newList: newList });
};
