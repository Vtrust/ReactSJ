import React, { Component } from 'react';
import GameBoard from '../GameBoard/GameBoard';
import { connect } from 'react-redux';
import * as suport from '../../utils/suport';
import * as actions from '../../actions';

// import PropTypes from 'prop-types';

class Game extends Component {
    render () {
        return  <GameBoard />
    }


    componentDidMount () {
        this.props.startNewGame();
        this.handleKeyPress = this.handleKeyPress.bind(this);
        // this.handleSwiped = this.handleSwiped.bind(this);
        window.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount () {
        window.removeEventListener('keydown', this.handleKeyPress);
    }

    //键盘监听
    handleKeyPress (ev) {
 
        let { key } = ev;
        //console.log("helll",key);
        // if (!this.props.gameStarted) return;
        let match = key.toLowerCase().match(/arrow(up|right|down|left)/);
        console.log("match",match);
    
        if (match) {
            console.log("ok");
          this.move(match[1]);
          ev.preventDefault();
        }
    }

    move (opt) {
       
        let {cells} = this.props
        if(this.canMove(opt,cells)){
            this.props.moveBoard(opt);
        }
       
    }

    canMove (opt,cells){
        let canMove = false
        switch(opt){
            case 'left':
            if(suport.canMoveLeft(cells)){
                canMove = true;
            }
            break;
            default:
            canMove = false;
        }

        return canMove;
    }
    
}





const mapStateToProps = (state) => {
    return {
        size: state.size,
    //   tiles: state.tiles,
    //   score: state.scores.score,
        cells:state.cells,
        gameStarted: state.gameStatus === 'playing'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      startNewGame: () => dispatch(actions.startNewGame()),
    //   setGameOver: () => dispatch(actions.setGameOver()),
    //   generateNewTile: () => dispatch(actions.generateNewTile()),
      moveBoard: opt => dispatch(actions.moveBoard(opt)),
    //   addScore: score => dispatch(actions.addScore(score)),
    //   updateBestScore: score => dispatch(actions.updateBestScore(score))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);