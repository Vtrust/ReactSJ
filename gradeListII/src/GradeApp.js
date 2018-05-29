import React, { Component } from 'react';

import {view as GradeList} from './grade/'
import {view as Filter} from './filter/';

class GradeApp extends Component {
  render() {
    return (
        <div>
            <GradeList/>
            <Filter/>
        </div>
    );
  }
}

export default GradeApp;
