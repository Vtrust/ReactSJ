//生成游戏背景
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as actions from '../../actions';

import GameCells from '../GameCells/GameCells';
import GameOver from '../GameOver/GameOver';


import './GameBoard.css';


const BackgroundGrids =  ({size}) => {
    console.log("size",size);
    let row = i => {
        return new Array(size).fill().map((_, j) =>
          <div className="grid-cell" key={`grid-cell-${i * size + j}`}></div>
        );
      };
    let grids = new Array(size).fill().map((_, i) => row(i));
    
    return (
        <div className="grid-container">{grids}</div>
    );
}

BackgroundGrids.propTypes = {
    size: PropTypes.number.isRequired
};


const GameBoard = (props) => (
    <div className="game-board">
      {/* <HeaderBox /> */}
      <button onClick={props.startNewGame}/>
      <div className="game-box">
        <BackgroundGrids size={props.size}/>
        <GameCells/>
        {props.gameOver && <GameOver />}
      </div>
    </div>
);

GameBoard.propTypes = {
    size: PropTypes.number.isRequired,
    gameOver: PropTypes.bool.isRequired
};
const mapDispatchToProps = (dispatch) => {
    return {
      startNewGame: () => dispatch(actions.add()),
    };
};


const mapStateToProps = state => {
    return {
        size: state.size,
        gameOver: state.gameStatus === 'over1'
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(GameBoard);