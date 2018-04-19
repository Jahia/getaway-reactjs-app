import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import '../styles/App.css';
import DestinationPanel from "./destinationDetails/DestinationPanel";
import RandomDestination from "./destinationDetails/RandomDestination";
import HomePanel from "./home/HomePanel";
import LandmarkPanel from "./landmarkDetails/LandmarkPanel";
import NotFoundPanel from "./NotFoundPanel";

class App extends Component {

    render() {
        return (
            <component>
                <Switch>
                    <Route exact path="/" component={HomePanel}/>
                    <Route exact path="/random/destination/" component={RandomDestination}/>
                    <Route exact path="/destination/:destinationName" component={DestinationPanel}/>
                    <Route exact path="/landmark/:externalId" component={LandmarkPanel}/>
                    <Route exact path="*" component={NotFoundPanel}/>
                </Switch>
            </component>
        );
    }
}

export default App;