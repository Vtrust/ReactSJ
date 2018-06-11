export const  canMoveLeft = (cells)=>{
    for(let i=0;i<cells.length;i++){
        for(let j=1;j<cells[i].length;j++){
            if(cells[i][j]===null) continue;
            if(cells[i][j-1]===null||cells[i][j-1]===cells[i][j]){
                return true;
            }
        }
    }

    return false;
}

export const  noBlockHorizantal=(row, col1, col2, cells)=>{
    for(let i=col1+1;i<col2;i++){
        if(cells[row][i]!==null) return false;
    }
    return true;
}