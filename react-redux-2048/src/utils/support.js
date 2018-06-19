export function generateTiles(height, width) {
    let tiles = [];

    for(let i=0;i<height;i++){
        tiles[i] = [];
        for(let j=0;j<width;j++){
            let tile = {
                id:null,
                x:null,
                y:null,
                value:null,
                merge:true
            }
          
            tiles[i][j]= tile;
        }
    }
  
    return tiles;
}

export const tile=()=>{
   return {
        id:null,
        x:null,
        y:null,
        value:null,
        merge:true
    }
}

export const resetMerge = (tiles) =>{
    for(let i=0;i<tiles.length;i++){
        for(let j=0;j<tiles[i].length;j++){
            tiles[i][j].merge = true;
        }
    }
    return tiles;
}


export const noBlockHorizantal=(row, col1, col2, cells)=>{
    for(let i=col1+1;i<col2;i++){
        if(cells[row][i].value!==null) return false;
    }
    return true;
}

export const noBlockVertical=(col, row1, row2, cells)=>{
    for(let i=row1+1;i<row2;i++){
        if(cells[i][col].value!==null) return false;
    }
    return true;
}


export const newArrayTiles = (tiles) => {
    let newTiles = [];
    for(let i=0;i<tiles.length;i++){
        [...newTiles[i]]= tiles[i];
    }
    return newTiles;
}