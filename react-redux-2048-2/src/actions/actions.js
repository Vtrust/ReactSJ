import * as ActionType from './actionType';

export const newGame = ()=>({
    type:ActionType.NEW_GAME
})

export const newTile = ()=>({
    type:ActionType.NEW_TILE
})

export const moveTiles = (direction)=>({
    type:ActionType.MOVE_TILES,
    direction:direction
})
