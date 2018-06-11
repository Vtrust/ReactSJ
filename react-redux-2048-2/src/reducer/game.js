import * as ActionType from '../actions/actionType';
import {START_SCORE,SIZE} from '../utils/constants';
import {generateTiles,noBlockHorizantal,tile,newArrayTiles} from '../utils/support';
// import { moveTiles } from '../actions/actions';
let id = 1;

const defaultState =()=>{
    return {
        gameState: 'play',
        size: SIZE,
        score: START_SCORE,
        tiles: generateTiles(SIZE, SIZE),
        // grid: generateGrid(SIZE, SIZE),
    };
}

const getRandomCoordinate = tiles => {
    let i=0;
    while(i<10){
        i++;
       
        let x = parseInt(Math.random()*SIZE,10);
        let y = parseInt(Math.random()*SIZE,10);

        if(tiles[x][y].value===null){
            return {x,y}
        }
    }

    for(let x=0; x<SIZE; x++){
        for(let y=0; y<SIZE; y++){
            if(tiles[x][y].value===null){
                return {x,y}
            }
        }
    }

    return null;
};

const newTiles = (tiles,n) => {
    let pot,x,y
    for(let i=0;i<n;i++){
        pot = getRandomCoordinate(tiles);
        if(!pot) return tiles
        // x=pot.x;
        // y=pot.y;
        x=1;
        y=1;

        tiles[x][y].id = id++;
        tiles[x][y].x=x;
        tiles[x][y].y=y;
        tiles[x][y].value = Math.random() > 0.8 ? 4 : 2;
    }
    return tiles;
}

const moveLeft = (tiles)=>{
    for(let i=0;i<tiles.length;i++){
        for(let j=1;j<tiles[i].length;j++){
            if(tiles[i][j].value===null) continue;
            for(let k=0;k<j;k++){
                if(tiles[i][k].value===null&&noBlockHorizantal(i,k,j,tiles)){
                    //move
                    console.log("move");
                    tiles[i][k]=tiles[i][j];
                    tiles[i][j]=tile();
                    continue;
                }else if(tiles[i][k].value===tiles[i][j].value&&noBlockHorizantal(i,k,j,tiles)){
                    //move
                    //add
                    // tiles[i][k].id=tiles[i][j].id;
                    // tiles[i][k].value+=tiles[i][j].value;
                    // tiles[i][j]=tile();
                }
            } 
        }
    }
    return tiles;
}

//TODO save game
const initState = defaultState();

//=======================================================================
//action init 
const newGame = state => {
    console.log("newGame");
    //初始化
    //state = defaultState();
    let tiles = newTiles(state.tiles,1);

    return {...state,tiles: tiles};
}

const newTile = state => {
    let newData = Object.assign({}, state); 
    let tiles = newTiles(newData.tiles,1);
    return {...state,tiles: tiles};
}

const moveTiles = (state,direction) => {
    let tiles = newArrayTiles(state.tiles); 
    // let tiles = state.tiles;

    tiles[2][2].x = tiles[1][1].x;
    tiles[2][2].y = tiles[1][1].y;
    tiles[2][2].value = tiles[1][1].value;

    tiles[1][1] = tile();
   
    // let newtiles = moveLeft(tiles);
    // // switch(direction){
    // //     case 'left':
    // //     console.log("left-----------")

    // //     break;
    // //     default:
    // //     break;
    // // }
    // return {...state,tiles: newtiles};
    //let newState =  {...state,tiles: moveLeft(tiles)}

    //console.log("moveTiles2",newState);
    //console.log("moveTiles1",state); 
    // return Object.assign({}, state, {
    //     tiles:moveLeft(tiles1)
    // });
    return {...state,tiles: tiles};
}

export default (state = initState, action) => {
    switch(action.type){
        case ActionType.NEW_GAME:
            return newGame(state);
        case ActionType.NEW_TILE:
            return newTile(state);
        case ActionType.MOVE_TILES:
            return moveTiles(state,action.direction);
        default:
            return state;
    }

}