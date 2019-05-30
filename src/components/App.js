import React, {Component} from 'react';
import {withRouter, Route, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition as OriginalCSSTransition} from 'react-transition-group';
import {DestinationPanel} from "./destinationDetails/";
import {HomePanel} from "./home";
import {LandmarkPanel} from "./landmarkDetails";
import {NotFoundPanel} from "./shared";
import Layout from './Layout';
import '../styles/App.css';
import {CloudinaryContext} from 'cloudinary-react';


class CSSTransition extends OriginalCSSTransition {
    onEntered = () => {
        // Do not remove enter classes when active
    }
}

class App extends Component {

    render() {
        const {location} = this.props;
        const currentKey = location.pathname.split('/')[1] || '/';
        const timeout = {enter: 0, exit: 1000};

        return (
            <CloudinaryContext cloudName='cedric-mailleux'>
            <TransitionGroup>
                <CSSTransition timeout={timeout} classNames="panel" key={currentKey} mountOnEnter appear>
                   <div className="panel-container">
                       <Layout>
                           <Switch location={location}>
                               <Route exact path="/" component={HomePanel}/>
                               <Route exact path="/destination/:destinationName" component={DestinationPanel}/>
                               <Route exact path="/landmark/:externalId" component={LandmarkPanel}/>
                               <Route path="*" component={NotFoundPanel}/>
                           </Switch>
                       </Layout>
                    </div>
                </CSSTransition>
            </TransitionGroup>
            </CloudinaryContext>
        );
    }

}

export default withRouter(App);