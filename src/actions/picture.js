import { THEMES } from '../constants';

const SEARCH_PICTURE = "SEARCH_PICTURE";

export const setSearchPicture = (string = '') => (dispatch, getState) => {
    dispatch({ type: SEARCH_PICTURE, name: string });
};
