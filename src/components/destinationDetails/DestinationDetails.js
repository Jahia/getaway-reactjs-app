import React, {Component} from 'react';
import DestinationInfo from "./DestinationInfo";
import DestinationOutline from "./DestinationOutline";

class DestinationDetails extends Component {

    render() {
        return (
            <div>
                <DestinationInfo area={this.props.area} elevation={this.props.elevation}
                                 populationCount={this.props.populationCount} populationDate={this.props.populationDate}
                                 headline={this.props.headline} latitude={this.props.latitude} longitude={this.props.longitude}/>
                <DestinationOutline outline={this.props.outline}/>
            </div>
        )
    }
}

export default DestinationDetails