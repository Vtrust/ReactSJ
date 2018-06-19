import React, { Component } from 'react';
import { Route } from "react-router-dom";
import {Switch} from 'react-router';

import {view as GradeList} from './grade/'
import {view as Filter} from './filter/';
import notfound from './404/404'

class GradeApp extends Component {
  render() {
    return (
        <div>
          <div className="TopBar">
            <Filter/>
          </div>
          <Switch>
          <Route exact path="/" component={GradeList} />
          <Route exact path="/CHOSE" component={GradeList} />
          <Route exact path="/NOCHOSE" component={GradeList} />
          <Route exact path="*" component={notfound} />
          </Switch>
        </div>
    );
  }
}

export default GradeApp;
