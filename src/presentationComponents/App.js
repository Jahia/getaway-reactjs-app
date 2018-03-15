import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from '../logo.svg';    /* TODO seems unused */
/* import '../styles/App.css';  TODO review this */
import DestinationPanel from "../components/DestinationDetails/DestinationPanel";
import HomePanel from "./pageComponents/HomePanel";

class App extends Component {
  render() {
    return (
      <component>
          <Switch>
              <Route exact path = "/" component = {HomePanel} />
              <Route exact path = "/destination/:destinationName" component = {DestinationPanel} />
          </Switch>
      </component>
    );
  }
}

export default App;