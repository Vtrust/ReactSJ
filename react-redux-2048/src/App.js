import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Scores from "./pages/Scores";
import {CSSTransitionGroup} from "react-transition-group";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TopBar">
          <Link to="/">Home</Link>
          <Link to="/scores">Scores</Link>
        </div>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnter={true}
          transitionLeave={true}
          transitionEnterTimeout={500} 
          transitionLeaveTimeout={300}>
            <Route exact path="/" component={Home} />
            <Route exact path="/scores" component={Scores} />
        </CSSTransitionGroup>
      </div>
    );
  }
}
export default App;