import { createSelector } from 'reselect';
import { prop, filter, slice } from 'ramda';

export const getPicture = prop('picture');

export const getAllPicture = createSelector(getPicture);

export const getSearchPicture = (string) => createSelector(
    getPicture,
    (state) => {
        if (string !== "") return filter((elem) => string === slice(0, string.length, elem.name), state)
        return []
    }
)
