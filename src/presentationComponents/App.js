import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from '../logo.svg';    /* TODO seems unused */
import '../styles/style.css';     /* TODO review this */
/* import '../styles/App.css';  TODO review this */
import DestinationPanel from "./pageComponents/DestinationPanel";
import HomePanel from "./pageComponents/HomePanel";

class App extends Component {
  render() {
    return (
      <div className = "App">
          <Switch>
              <Route exact path = "/" component = {HomePanel} />
              <Route exact path = "/destination/:destinationName" component = {DestinationPanel} />
          </Switch>
      </div>
    );
  }
}

export default App;