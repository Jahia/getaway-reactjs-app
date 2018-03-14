import React, {Component} from 'react'
import DestinationInfo from "./DestinationInfo"
import DestinationOutline from "./DestinationOutline"

class DestinationDetails extends Component {

    render() {
        return (
            <section className="component">
                <DestinationInfo />
                <DestinationOutline />
            </section>
        )
    }
}

export default DestinationDetails