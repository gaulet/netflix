import { combineReducers } from 'redux';
import theme from '../reducers/theme';
import picture from '../reducers/picture';
import myList from '../reducers/myList'

const rootReducer = combineReducers({ theme, picture, myList });

export default rootReducer;
