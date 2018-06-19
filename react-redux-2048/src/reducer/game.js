import * as ActionType from '../actions/actionType';
import uuidv4  from 'uuid/v4';
import moment from 'moment';
import {START_SCORE,SIZE} from '../utils/constants';
import {generateTiles,noBlockHorizantal,noBlockVertical,tile,resetMerge,documentWidth} from '../utils/support';

const defaultState =()=>{
    return {
        gameState: 'play',
        size: SIZE,
        score: START_SCORE,
        bestScore: START_SCORE,
        historyScore: [],
        tiles: generateTiles(SIZE, SIZE),
        documentWidth:window.screen.availWidth
    };
}

const startSavedGame = () =>{
    try {
        let game = localStorage.getItem('game');
        if(game!=={}) {
           
            let saveGame = JSON.parse(game);
            saveGame.documentWidth =window.screen.availWidth;
            return saveGame;
        }
    } catch(e){
        console.log(e)
        return false;
    }

}

//TODO save game
const initState = startSavedGame()||defaultState();



class Game{
    constructor({gameState,size,score,bestScore,tiles,historyScore}){
        this.gameState = gameState;
        this.size = size;
        this.score = score;
        this.bestScore = bestScore;
        this.historyScore = JSON.parse(JSON.stringify(historyScore));
        this.tiles = JSON.parse(JSON.stringify(tiles));
        // this.documentWidth =documentWidth;
    }

    newDocumentWidth = (documentWidth)=>{
        this.documentWidth = documentWidth;
        return {documentWidth:this.documentWidth};
    }

    getRandomCoordinate = (flag=true) => {
        const {tiles} = this;
        let i=0;
        if(flag){
            while(i<10){
                i++;
                let x = parseInt(Math.random()*SIZE,10);
                let y = parseInt(Math.random()*SIZE,10);
                if(tiles[x][y].value===null){
                    return {x,y}
                }
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

    newTiles = (n) => {
        const {tiles} = this;
        //gameover

        let pot,x,y
        for(let i=0;i<n;i++){
            pot = this.getRandomCoordinate(tiles);
            if(!pot) return tiles
            x=pot.x;
            y=pot.y;
    
            tiles[x][y].id = uuidv4();
            tiles[x][y].x=x;
            tiles[x][y].y=y;
            tiles[x][y].value = Math.random() > 0.8 ? 4 : 2;
        }
        this.saveGame();
        return {tiles:tiles};
    }

    moveDirection = direction => {
        console.log("moment()",moment().format("M/DD HH:mm"),direction)

        switch(direction){
            case 'left':{         
                return this.moveLeft();
            }
            case 'right':{
                return this.moveRight();
            }
            case 'up':{
                return this.moveUp();
            }
            case 'down':{
                return this.moveDown()
            }
            default:{
                //return {};
            }
        }
    }

    saveGame = () =>{

        //save
        try {
            localStorage.game = JSON.stringify({
                gameState:this.gameState,
                size:this.size,
                score:this.score,
                bestScore:this.bestScore,
                historyScore:this.historyScore,
                tiles:this.tiles
            });
            let game = localStorage.getItem('game');
            if(game) {
              console.log("hello",JSON.parse(game));
            }
        } catch(e){console.log(e)}
    }

    isGameOver = () =>{
        let {gameState} = this;
        if(this.getRandomCoordinate(false)!==null||this.canMove()){
            return {};
        }

        console.log('over!');
        this.historyScore.push({score:this.score,date:moment().format("M/DD HH:mm")});

        if(this.score>this.bestScore){
            this.bestScore = this.score;
        }
        console.log(this.bestScore,"this.bestScore");
        gameState = 'over';
        this.gameState = gameState;
        this.saveGame();

        return {gameState:gameState,bestScore: this.bestScore,historyScore:this.historyScore};
    }

    canMove = () => {
    
        if(this.canMoveLeft()||this.canMoveRight()||this.canMoveUp()||this.canMoveDown()){
            return true;
        }
        return false;
    }

    canMoveLeft = ()=>{
        const {tiles} = this;
        for(let i=0;i<tiles.length;i++){
            for(let j=1;j<tiles[i].length;j++){
                if(tiles[i][j].value!==null&&(tiles[i][j-1].value===null||tiles[i][j].value===tiles[i][j-1].value)){
                    return true;
                }
            }
        }
        return false;
    }

    canMoveRight = ()=>{
        const {tiles} = this;
        for(let i=0;i<tiles.length;i++){
            for(let j=0;j<tiles[i].length-1;j++){
                if(tiles[i][j].value!==null&&(tiles[i][j+1].value===null||tiles[i][j].value===tiles[i][j+1].value)){
                    return true;
                }
            }
        }
        return false;
    }

    canMoveUp = ()=>{
        const {tiles} = this;
        for(let i=1;i<tiles.length;i++){
            for(let j=0;j<tiles[i].length;j++){
                if(tiles[i][j].value!==null&&(tiles[i-1][j].value===null||tiles[i][j].value===tiles[i-1][j].value)){
                    return true;
                }
            }
        }
        return false;
    }

    canMoveDown = ()=>{
        const {tiles} = this;
        for(let i=0;i<tiles.length-1;i++){
            for(let j=0;j<tiles[i].length;j++){
                if(tiles[i][j].value!==null&&(tiles[i+1][j].value===null||tiles[i][j].value===tiles[i+1][j].value)){
                    return true;
                }
            }
        }
        return false;
    }

    moveLeft = ()=>{

        if(!this.canMoveLeft()) return {};
        const {tiles} = this;
        for(let i=0;i<tiles.length;i++){
            for(let j=1;j<tiles[i].length;j++){
                if(tiles[i][j].value===null) continue;
                for(let k=0;k<j;k++){
                    if(tiles[i][k].value===null&&noBlockHorizantal(i,k,j,tiles)){
                        //move
                        tiles[i][k].id=tiles[i][j].id;
                        tiles[i][k].x=i;
                        tiles[i][k].y=k;
                        tiles[i][k].value=tiles[i][j].value;
                        tiles[i][j]=tile();
                        continue;
                    }else if(tiles[i][k].value===tiles[i][j].value&&noBlockHorizantal(i,k,j,tiles)&&tiles[i][k].merge){
                        //move
                        //add
                        tiles[i][k].merge = false;
                        tiles[i][k].id=tiles[i][j].id;
                        tiles[i][k].value+=tiles[i][j].value;
                        this.score  += tiles[i][k].value;
                        tiles[i][j]=tile();
                    }
                } 
            }
        }

        this.tiles = resetMerge(tiles);

        return {...this.newTiles(1),...this.isGameOver(),score: this.score };
    }

    moveRight = ()=>{
        if(!this.canMoveRight()) return {};

        const {tiles} = this;
        for(let i=0;i<tiles.length;i++){
            for(let j=tiles[i].length-1;j>=0;j--){
                if(tiles[i][j].value===null) continue;
                for(let k=tiles[i].length-1;k>j;k--){
                    if(tiles[i][k].value===null&&noBlockHorizantal(i,j,k,tiles)){
                        //move
                        tiles[i][k].id=tiles[i][j].id;
                        tiles[i][k].x=i;
                        tiles[i][k].y=k;
                        tiles[i][k].value=tiles[i][j].value;
                        tiles[i][j]=tile();
                        continue;
                    }else if(tiles[i][k].value===tiles[i][j].value&&noBlockHorizantal(i,j,k,tiles)&&tiles[i][k].merge){
                        //move
                        //add
                        tiles[i][k].merge = false;
                        tiles[i][k].id=tiles[i][j].id;
                        tiles[i][k].value+=tiles[i][j].value;
                        this.score  += tiles[i][k].value;
                        tiles[i][j]=tile();
                    }
                } 
            }
        }
        this.tiles = resetMerge(tiles);
        return {...this.newTiles(1),...this.isGameOver(),score: this.score };
    }

    moveDown = ()=>{
        if(!this.canMoveDown()) return {};
        const {tiles} = this;
        for(let i=tiles.length-1;i>=0;i--){
            for(let j=0;j<tiles[i].length;j++){
                if(tiles[i][j].value===null) continue;
                for(let k=tiles.length-1;k>i;k--){
                    if(tiles[k][j].value===null&&noBlockVertical(j,i,k,tiles)){
                        //move
                        tiles[k][j].id=tiles[i][j].id;
                        tiles[k][j].x=k;
                        tiles[k][j].y=j;
                        tiles[k][j].value=tiles[i][j].value;
                        tiles[i][j]=tile();
                        continue;
                    }else if(tiles[k][j].value===tiles[i][j].value&&noBlockVertical(j,i,k,tiles)&&tiles[k][j].merge){
                        //move
                        //add
                        tiles[k][j].merge=false;
                        tiles[k][j].id=tiles[i][j].id;
                        tiles[k][j].value+=tiles[i][j].value;
                        this.score  += tiles[k][j].value;
                        tiles[i][j]=tile();
                    }
                } 
            }
        }
        this.tiles = resetMerge(tiles);
        return {...this.newTiles(1),...this.isGameOver(),score: this.score };
    }

    moveUp = ()=>{
        if(!this.canMoveUp()) return {};
        const {tiles} = this;
        for(let i=1;i<tiles.length;i++){
            for(let j=0;j<tiles[i].length;j++){
                if(tiles[i][j].value===null) continue;
                for(let k=0;k<i;k++){
                    if(tiles[k][j].value===null&&noBlockVertical(j,k,i,tiles)){
                        //move
                        tiles[k][j].id=tiles[i][j].id;
                        tiles[k][j].x=k;
                        tiles[k][j].y=j;
                        tiles[k][j].value=tiles[i][j].value;
                        tiles[i][j]=tile();
                        continue;
                    }else if(tiles[k][j].value===tiles[i][j].value&&noBlockVertical(j,k,i,tiles)&&tiles[k][j].merge){
                        //move
                        //add
                        tiles[k][j].merge = false;
                        //tiles[k][j].id=tiles[i][j].id;
                        tiles[k][j].value+=tiles[i][j].value;
                        this.score  += tiles[k][j].value;
                        tiles[i][j]=tile();
                    }
                } 
            }
        }
        this.tiles =resetMerge(tiles);
        return {...this.newTiles(1),...this.isGameOver(),score: this.score };
    }
}




export default (state = initState, action) => {
    let mat = new Game(state);
    switch(action.type){
        case ActionType.NEW_GAME:{
            const copy = JSON.parse(JSON.stringify(defaultState()));
            copy.bestScore = state.bestScore;
            copy.historyScore =  JSON.parse(JSON.stringify(state.historyScore));
            mat = new Game(copy);
            const result = mat.newTiles(2);
            return {...copy,...result};
        }
        case ActionType.MOVE_TILES:{
            console.log(action.direction);
            const result = mat.moveDirection(action.direction);
            return {...state,...result};
        }
        case ActionType.DOCUMENTWIDTH:{
            console.log("DOCUMENTWIDTH");
            const result = mat.newDocumentWidth(action.documentWidth);
            return {...state,...result}
        }
        default:
        const result = mat.newTiles(2);
        return {...state,...result};
    }

}