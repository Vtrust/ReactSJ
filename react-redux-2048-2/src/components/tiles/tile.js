import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

const TILE_WIDTH = 100;
const TILE_GAP = 10;

const Tile = (props) => {
    let {x, y,value} = props;
    const cx = classNames(
      "tile",
      `tile-${value}`
    );
    let cssy = x * ( TILE_WIDTH + TILE_GAP) + 'px';
    let cssx = y * ( TILE_WIDTH + TILE_GAP) + 'px';
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
    value: PropTypes.number.isRequired
};

export default Tile;
