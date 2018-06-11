import * as ActionTypes from './actionTypes';
import {generateNewCell} from './cells';

export const startNewGame = () => (dispatch, getState) => {
    console.log("startNewGame");
    dispatch({
      type: ActionTypes.START_NEW_GAME,
      size: getState().size
    });
    dispatch(generateNewCell());
    dispatch(generateNewCell());
    dispatch(generateNewCell());
};

export const add = () => (dispatch, getState) => {
    dispatch(generateNewCell());
    dispatch(generateNewCell());
    dispatch(generateNewCell());
};

export const moveBoard = (opt) => (dispatch, getState) => {

    dispatch({
        type: ActionTypes.MOVE_CELL,
        opt:opt
    });
}

export * from './cells';