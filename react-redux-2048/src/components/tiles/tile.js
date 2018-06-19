import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";



let TILE_WIDTH = 100;
let TILE_GAP = 10;


const Tile = (props) => {
    let {x, y,value} = props;
    let documentWidth = window.screen.availWidth;
    const cx = classNames(
      "tile",
      `tile-${value}`
    );
    let cssy;
    let cssx;
    if(documentWidth<500){
      TILE_WIDTH = 20;
      TILE_GAP = 2;
      cssy = x * ( TILE_WIDTH + TILE_GAP)+"vw";
      cssx = y * ( TILE_WIDTH + TILE_GAP)+"vw";
    }else{
      TILE_WIDTH = 100;
      TILE_GAP = 10;
      cssy = x * ( TILE_WIDTH + TILE_GAP)+"px";
      cssx = y * ( TILE_WIDTH + TILE_GAP)+"px";
    }
    let style = {transform: `translate3d(${cssx}, ${cssy}, 0)`};
    return (
      <div className={cx} style={style}>
        <div className="tile-inner">{value}</div>
      </div>
    );
};

Tile.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    // documentWidth:PropTypes.number.isRequired
};

export default Tile;
