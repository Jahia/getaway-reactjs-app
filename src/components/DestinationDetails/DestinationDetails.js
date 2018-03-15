import React, {Component} from 'react'
import DestinationInfo from "./DestinationInfo"
import DestinationOutline from "./DestinationOutline"

class DestinationDetails extends Component {

    render() {
        return (
            <component>
                <DestinationInfo area={this.props.area} elevation={this.props.elevation}
                                 populationCount={this.props.populationCount} populationDate={this.props.populationDate}
                                 title={this.props.title}/>
                <DestinationOutline desc={this.props.desc}/>
            </component>
        )
    }
}

export default DestinationDetails