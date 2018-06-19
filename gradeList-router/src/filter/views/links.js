import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setFilter} from '../action';
import { Link } from "react-router-dom";


const Flink = ({active, children, onClick, route}) => {
    if (active) {
        return <Link to={"/"+route}  className="filter selected">{children}</Link>
    } else {
        return <Link to={"/"+route}  className="filter not-selected" onClick={(ev) => {
                    onClick();}}>
                    {children}
                </Link>
    }
};

Flink.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    route: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.filter === ownProps.filter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setFilter(ownProps.filter));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Flink);
