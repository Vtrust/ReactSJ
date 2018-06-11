import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Tile from './tile';
import './tiles.css';


const Tiles = ({sTiles}) => (
  <div className="tile-container">{sTiles.map(tile =>
    <Tile key={'tile-'+tile.id} {...tile}></Tile>
  )}</div>
);

Tiles.propTypes = {
    sTiles: PropTypes.array.isRequired
};

const showTiles = tiles => {
    console.log("showTiles");
  let sTiles = [];
  for(let x=0;x<tiles.length;x++){
    for(let y=0;y<tiles[x].length;y++){
      if(tiles[x][y].value===null){
        continue;
      }
      sTiles.push(tiles[x][y]);
    }
  }
  return sTiles;
};

const mapStateToProps = state => {
  return {
    sTiles: showTiles(state.game.tiles)
  };
};

export default connect(mapStateToProps)(Tiles);
