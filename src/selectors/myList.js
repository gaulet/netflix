import { prop, find } from 'ramda';
import { createSelector } from 'reselect';

export const getMyList = prop('myList');

export const getItemMyListTrue = (src) => createSelector(
    getMyList,
    (tab) => find((elem) => elem.src === src)(tab) !== undefined
);