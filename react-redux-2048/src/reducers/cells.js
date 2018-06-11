import * as ActionTypes from '../actions/actionTypes';
import * as suport from '../utils/suport';

//初始化cells
const getInitialCells = size => {
    let cells = [];
    for (let i = 0; i < size; i++) {
      let row = cells[i] = [];
      for (let j = 0; j < size; j++) {
        row[j] = null;
      }
    }
    return cells;
};


const changeOneCell = (state,col,row,number)=>{
    let newState = state;
    newState[row][col] = number;
    return newState;
}

const moveCell = (state,opt)=>{
    let cells = state;
    console.log("moveCell",opt,cells);
        
    switch(opt){
        case 'left':
            for(let i=0;i<cells.length;i++){
                for(let j=1;j<cells[i].length;j++){
                    if(cells[i][j]===null) continue;
                    for(let k=0;k<j;k++){
                        if(cells[i][k]===null&&suport.noBlockHorizantal(i,k,j,cells)){
                            //move
                            cells[i][k]=cells[i][j];
                            cells[i][j]=null;
                            continue;
                        }else if(cells[i][k]===cells[i][j]&&suport.noBlockHorizantal(i,k,j,cells)){
                            //move
                            //add
                            cells[i][k]+=cells[i][j];
                            cells[i][j]=null;
                        }
                    } 
                }
            }
        break;
        default:
        break;
    }
    let newState = cells;
    return newState;
}


export default (state = [], action) => {
    switch(action.type){
        case ActionTypes.START_NEW_GAME:
            return state=getInitialCells(action.size);
        case ActionTypes.GENERATE_NEW_CELL:
            //console.log("GENERATE_NEW_CELL",action)
            //console.log("GENERATE_NEW_CELL",state);
            return changeOneCell(state,action.col,action.row,action.number);
        case ActionTypes.MOVE_CELL:
        console.log(".MOVE_CELL",action);
            return moveCell(state,action.opt);
        default:
            return state;
    }
}

