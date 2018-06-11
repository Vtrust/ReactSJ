import {createStore, combineReducers,applyMiddleware} from 'redux';
import cells from './reducers/cells'
import thunk from 'redux-thunk';


let gameCells = [];
for(let i=0;i<4;i++){
    gameCells[i]=[]
    for(let j=0;j<4;j++){
        gameCells[i][j]=64;
    }
}
gameCells[2][3] = null;
const reducer = combineReducers({
    size: () => 4,
    gameStatus:()=>'over',
    cells:cells
});
export default createStore(reducer,applyMiddleware(thunk));