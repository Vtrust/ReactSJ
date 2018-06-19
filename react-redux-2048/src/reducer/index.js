import {createStore, combineReducers} from 'redux';
import game from './game'
// import thunk from 'redux-thunk';

const reducer = combineReducers({
    game
});
export default createStore(reducer);