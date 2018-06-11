import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import * as actions from '../actions/';
import GameCell from './GameCell';
import './GameCells.css';


const GameCells = ({makeCells}) => (
  <div className="cell-container">{makeCells.map(cell =>
    <GameCell key={'cell-'+cell.key} {...cell}></GameCell>
  )}</div>
);

GameCells.propTypes = {
  makeCells: PropTypes.array.isRequired
};

const makeCell = cells => {
  let makeCells = [];
  for(let i=0;i<cells.length;i++){
    for(let j=0;j<cells[i].length;j++){
      if(cells[i][j]===null){
        continue;
      }
      let cell={
        col:j,
        row:i,
        number:cells[i][j],
        key:i+'-'+j,
      }
      makeCells.push(cell);
    }
  }
  return makeCells;
};

const mapStateToProps = state => {
  console.log(state.cells);
  return {
    makeCells: makeCell(state.cells)
  };
};

export default connect(mapStateToProps)(GameCells);
