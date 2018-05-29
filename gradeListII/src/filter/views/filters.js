import React from 'react';
import Link from './links';
import {FilterTypes} from '../../constants'

import './style.css';

const Filters = () => {
    return (
        <p className="filters">
            <Link filter={FilterTypes.ALL}> {FilterTypes.ALL} </Link>
            <Link filter={FilterTypes.CHOSE}> {FilterTypes.CHOSE} </Link>
            <Link filter={FilterTypes.NOCHOSE}> {FilterTypes.NOCHOSE} </Link>
        </p>
    );
};

export default Filters;
