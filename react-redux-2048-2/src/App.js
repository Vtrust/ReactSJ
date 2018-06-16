import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Scores from "./pages/scores";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TopBar">
          <Link to="/">Home</Link>
          <Link to="/scores">Scores</Link>
        </div>
            <Route exact path="/" component={Home} />
            <Route exact path="/scores" component={Scores} />
      </div>
    );
  }
}
export default App;