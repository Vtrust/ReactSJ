import * as ActionTypes from './actionTypes';

const getRandomCoordinate = cells => {
    let i=0;
    while(i<10){
        i++;
        let col = parseInt(Math.random()*4,10);
        let row = parseInt(Math.random()*4,10);
        if(cells[col][row]===null){
            return {col,row};
        }
    }

    console.log("getRandomCoordinate",cells);
    for(let row=0;row<cells.length;row++){
        for(let col=0;col<cells[row].length;col++){
            if(cells[row][col]===null){
                return {col,row}
            }
        }
    }

    return null;
};

export const generateNewCell = () => (dispatch, getState) => {
   console.log(getState());
    let { cells } = getState();
    let coord = getRandomCoordinate(cells);
    if (coord) {
        console.log("generateNewCell",coord);
      dispatch({
        type: ActionTypes.GENERATE_NEW_CELL,
        number: Math.random() > 0.8 ? 4 : 2,
        ...coord
      });
      return true;
    }
    return false;
};