import React, {Component} from 'react'
import DestinationInfo from "./DestinationInfo"
import DestinationOutline from "./DestinationOutline"

class DestinationDetails extends Component {

    render() {
        return (
            <component>
                <DestinationInfo area={this.props.area} elevation={this.props.elevation}
                populationCount={this.props.populationCount} populationDate={this.props.populationDate}/>
                <DestinationOutline />
            </component>
        )
    }
}

export default DestinationDetails