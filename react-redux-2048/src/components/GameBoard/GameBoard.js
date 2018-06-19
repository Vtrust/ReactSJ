//生成游戏背景
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Tiles from '../tiles/tiles';
import GameOver from '../gameOver/gameOver';
import HeaderBox from '../headerBox/headerBox';


import './gameBoard.css';


const BackgroundGrids =  ({size}) => {
    console.log("size",size);
    let row = i => {
        return new Array(size).fill().map((_, j) =>
          <div className="grid-tiles" key={`grid-tiles-${i * size + j}`}></div>
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
      <HeaderBox/>
      {/* <button onClick={props.startNewGame}/> */}
      <div className="game-box">
        <BackgroundGrids size={props.size}/>
        <Tiles/>
        {props.gameState && <GameOver />}
      </div>
    </div>
);

GameBoard.propTypes = {
    size: PropTypes.number.isRequired,
    gameState: PropTypes.bool.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
    
    };
};


const mapStateToProps = state => {
    return {
        score: state.game.score,
        size: state.game.size,
        gameState: state.game.gameState === 'over'
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(GameBoard);