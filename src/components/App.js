import React, {Component} from 'react';
import {withRouter, Route, Switch} from 'react-router-dom';
import { TransitionGroup, CSSTransition as OriginalCSSTransition } from 'react-transition-group';
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

class App extends Component {
    componentWillReceiveProps(nextProps) {
        this.previousView = this.props.location;
    }

    render() {
        const   { location }    =   this.props;
        const   currentKey      =   location.pathname.split('/')[1] || '/';
        const   timeout         =   {enter: 500, exit: 1000};
        const   modal           =   location.state && location.state.to === 'modal';
        return (
            <Layout>

                <div className="view-container">
                    <Switch location={modal ? this.previousView : location}>
                        <Route exact path="/" component={HomePanel}/>
                        <Route exact path="/random/destination/" component={RandomDestination}/>
                        {!modal &&
                            <Route path="*" component={NotFoundPanel} />
                        }
                    </Switch>
                </div>

                <TransitionGroup>
                    <CSSTransition
                        timeout={timeout}
                        classNames="modal"
                        key={currentKey}
                        mountOnEnter
                        appear>
                            <div className="modal-container" >
                                <Switch location={location}>
                                    <Route exact path="/destination/:destinationName" component={DestinationPanel} modal={modal}/>
                                    <Route exact path="/landmark/:externalId" component={LandmarkPanel}/>
                                </Switch>
                            </div>
                    </CSSTransition>
                </TransitionGroup>
            </Layout>
        );
    }
}

export default withRouter(App);