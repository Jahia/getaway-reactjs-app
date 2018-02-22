import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from '../logo.svg';
import '../styles/App.css';
import MainDestinationCards from "./MainDestinationCards";
import MainLandmarkCards from "./MainLandmarkCards";
import HomePage from "./PageComponents/HomePage";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
              <Route exact path="/" component={HomePage} />
          </Switch>
      </div>
    );
  }
}

export default App;



