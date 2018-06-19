import {createStore, combineReducers} from 'redux';

import {reducer as gradeReducer} from './grade';
import {reducer as filterReducer} from './filter';

const reducer = combineReducers({
    grades: gradeReducer,
    filter: filterReducer
});
export default createStore(reducer);
