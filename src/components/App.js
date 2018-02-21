import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from '../logo.svg';
import '../styles/App.css';
import MainDestinationCards from "./MainDestinationCards";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
              <Route exact path="/" component={MainDestinationCards} />
          </Switch>
      </div>
    );
  }
}

export default App;



