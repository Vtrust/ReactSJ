import React from 'react';
import PropTypes from 'prop-types';
// import * as actions from '../actions/';
// import { connect } from 'react-redux';

const CELL_WIDTH = 100;
const CELL_GAP = 10;

const GameCell = (props) => {
    let {col, row} = props;
    let classMap = {
      cell:true,
      [`cell-${props.number}`]: true,
    };
    let classNames = Object.keys(classMap).filter(cls => !!classMap[cls]).join(' ');
    let x = col * ( CELL_WIDTH + CELL_GAP) + 'px';
    let y = row * ( CELL_WIDTH + CELL_GAP) + 'px';
    let style = {transform: `translate3d(${x}, ${y}, 0)`};
    return (
      <div className={classNames} style={style}>
        <div className="cell-inner">{props.number}</div>
      </div>
    );
};

GameCell.propTypes = {
    col: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired
};

export default GameCell;
