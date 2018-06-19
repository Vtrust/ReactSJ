import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Tile from './tile';
import './tiles.css';
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';


const Tiles = ({sTiles}) => (
    <TransitionGroup className="tile-container">
        {sTiles.map(tile =>
            <CSSTransition
            key={tile.id}
            timeout={300}
            classNames="fade">
                <Tile key={'tile-'+tile.id} {...tile}></Tile>
            </CSSTransition>
        )}
    </TransitionGroup>
);

Tiles.propTypes = {
    sTiles: PropTypes.array.isRequired
};

const showTiles = tiles => {
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
    console.log("state.game.tiles",state.game.tiles);
  return {
    sTiles: showTiles(state.game.tiles),
    documentWidth:state.game.documentWidth
  };
};

export default connect(mapStateToProps)(Tiles);
