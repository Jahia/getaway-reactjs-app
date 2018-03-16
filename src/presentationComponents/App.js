import React, {Component} from 'react';
import '../styles/App.css';
import DestinationPanel from "../components/DestinationDetails/DestinationPanel";
import HomePanel from "./pageComponents/HomePanel";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {destination: null}
    }

    changeDestination(destID) {
        this.setState({destination: destID})
    }

    render() {
        console.log("Destination: ", this.state.destination);
        return (
            <component>
                {this.state.destination ?
                    (<DestinationPanel destination={this.state.destination}
                                       changeDestinationCB={(destID) => this.changeDestination(destID)}/>) :
                    (<HomePanel changeDestinationCB={(destID) => this.changeDestination(destID)}/>)}
            </component>
        );
    }
}

export default App;