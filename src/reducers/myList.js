import { ADD_PICTURE, DELETE_PICTURE } from '../actions/myList'

const initialState = [
];

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_PICTURE:
            return [...state, action.elem]
        case DELETE_PICTURE:
            return action.newList
        default:
            return state;
    }
};
