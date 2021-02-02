import { API } from '../actions/apiMarvel';


const initialState = [
];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case API.data:
      return [...action.data ];
    default:
      return state;
  }
};
