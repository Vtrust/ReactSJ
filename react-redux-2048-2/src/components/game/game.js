import React, { Component } from 'react';
import GameBoard from '../gameBoard/gameBoard';
import { connect } from 'react-redux';
// import * as suport from '../../utils/suport';
import {newGame,moveTiles} from '../../actions/actions';

// import PropTypes from 'prop-types';

class Game extends Component {

    componentDidMount () {
        this.props.NewGame();
        this.handleKeyPress = this.handleKeyPress.bind(this);
        // this.handleSwiped = this.handleSwiped.bind(this);
        window.addEventListener('keydown', this.handleKeyPress);
    }

    //键盘监听
    handleKeyPress (ev) {
        let { key } = ev;
        let match = key.toLowerCase().match(/arrow(up|right|down|left)/);
        console.log("match",match[1]);
    
        if (match) {
            // this.props.NewGame();
            this.props.MoveTiles(match[1]);
            ev.preventDefault();
        }
    }

    render () {
        return  <GameBoard />
    }
}

const mapStateToProps = (state) => {
    return {
        // size: state.size,
    //   tiles: state.tiles,
    //   score: state.scores.score,
        // cells:state.cells,
        // gameStarted: state.gameStatus === 'playing'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        NewGame: () => dispatch(newGame()),
    //   setGameOver: () => dispatch(actions.setGameOver()),
    //   generateNewTile: () => dispatch(actions.generateNewTile()),
        MoveTiles: direction => dispatch(moveTiles(direction)),
    //   addScore: score => dispatch(actions.addScore(score)),
    //   updateBestScore: score => dispatch(actions.updateBestScore(score))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);