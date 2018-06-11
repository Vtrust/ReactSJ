import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './gameOver.css';


let GameOver = ({dispatch}) => {
  return <div className="game-over">
    <h1 className="title">Game Over!</h1>
    <button>Try Again</button>
  </div>;
};

GameOver.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(GameOver);
