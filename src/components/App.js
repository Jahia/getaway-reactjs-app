import React, {Component} from 'react';
import {withRouter, Route, Switch} from 'react-router-dom'
import { TransitionGroup, CSSTransition as OriginalCSSTransition } from 'react-transition-group'
import {DestinationPanel, RandomDestination} from "./destinationDetails/";
import {HomePanel} from "./home";
import {LandmarkPanel} from "./landmarkDetails";
import {NotFoundPanel} from "./shared";
import Layout from './Layout';
import '../styles/App.css';

class CSSTransition extends OriginalCSSTransition {
    onEntered = () => {
        // Do not remove enter classes when active
    }
}
window.onbeforeunload = function() {
    console.log("test     :"  + this.props.state.meta.from)
}

class App extends Component {
    componentWillReceiveProps(nextProps) {
        this.previousView = this.props.location;
    }

    render() {
        const   { location }    =   this.props;
        const   currentKey      =   location.pathname.split('/')[1] || '/';
        const   timeout         =   {enter: 450, exit: 400};
        const   modal           =   location.state && location.state.to === 'modal';
        const   position        =   modal ? location.state.meta.from : {};

        return (
            <Layout>
                <div className="view-container">
                    <Switch location={modal ? this.previousView : location}>
                        <Route exact path="/" component={HomePanel}/>
                        <Route exact path="/random/destination/" component={RandomDestination}/>
                        <Route component={NotFoundPanel}/>
                    </Switch>
                </div>
                <TransitionGroup>
                    <CSSTransition
                        timeout={timeout}
                        classNames="modal"
                        key={currentKey}
                        mountOnEnter
                        appear>
                        <div className="modal-container" style={position}>
                            <Switch location={location}>
                                <Route exact path="/destination/:destinationName" component={DestinationPanel}/>
                                <Route exact path="/landmark/:externalId" component={LandmarkPanel}/>
                            </Switch>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </Layout>

        )
    }

}




export default withRouter(App);