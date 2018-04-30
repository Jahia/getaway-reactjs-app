import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {DestinationPanel, RandomDestination} from "./destinationDetails/";
import {HomePanel} from "./home";
import {LandmarkPanel} from "./landmarkDetails";
import {NotFoundPanel} from "./shared";
import '../styles/App.css';

class App extends Component {

    render() {
        return (
                <Switch>
                    <Route exact path="/" component={HomePanel}/>
                    <Route exact path="/random/destination/" component={RandomDestination}/>
                    <Route exact path="/destination/:destinationName" component={DestinationPanel}/>
                    <Route exact path="/landmark/:externalId" component={LandmarkPanel}/>
                    <Route exact path="*" component={NotFoundPanel}/>
                    <Route exact path="/error" component={NotFoundPanel}/>
                </Switch>
        );
    }
}

export default App;