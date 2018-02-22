import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from '../logo.svg';
import '../styles/App.css';
import DestinationPanel from "./PageComponents/DestinationPanel";
import HomePanel from "./PageComponents/HomePanel";

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



