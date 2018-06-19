import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {newGame} from '../../actions/actions';
import './headerBox.css';

const ScoreBox = ({label,score}) => {
    return (
      <div className="score-box">
        <div className="score-lable">{label}</div>
        <div className="score-content">{score}</div>
        {/* {children} */}
      </div>
    );
};

ScoreBox.propTypes = {
    // label: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
};

const HeaderBox = (props) => {
    return (
      <div className="header-box">
        <h1 className="title">2048</h1>
        <ScoreBox score={props.score} label="SCORE"></ScoreBox>
        <ScoreBox score={props.bestScore} label="BEST" />
        <div className="desc-txt">
        <span className="bold">Play 2048 Game Online</span><br/>
        Join the numbers and get to the <span className="bold">2048 tile!</span>
      </div>
        <button className="new-game-btn" onClick={props.startNewGame}>New Game</button>
        {/* <ScoreBox score={props.bestScore} label="BEST" />
        <div className="desc-txt">
          <span className="bold">Play 2048 Game Online</span><br/>
          Join the numbers and get to the <span className="bold">2048 tile!</span>
        </div>
        <button className="new-game-btn" onClick={props.startNewGame}>New Game</button> */}
      </div>
    );
};

const mapStateToProps = (state) => {
  return{
    score:state.game.score,
    bestScore:state.game.bestScore
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onAnimationEnd: id => dispatch(cleanRecentAddedScore(id)),
    startNewGame: () => dispatch(newGame())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderBox);