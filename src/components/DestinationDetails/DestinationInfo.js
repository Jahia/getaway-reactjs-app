import React, {Component} from 'react'

class DestinationInfo extends Component {

    render() {
        return (
        /* Destination info */
        <section className="destinationInfo">
            <div className="info-container">
                <div className="info-element">
                    <i className="material-icons">filter_tilt_shift</i><b>Area</b><span>105.4 km²</span>
                </div>
                <div className="info-element">
                    <i className="material-icons">terrain</i><b>Elevation</b><span>35 m</span>
                </div>
                <div className="info-element">
                    <i className="material-icons">access_time</i><b>Local time</b><span id="destLocalTime"></span>
                </div>
                <div className="info-element">
                    <i className="material-icons">people</i><b>Population</b><span>2.244 million (2010)</span>
                </div>
            </div>
            <h2>"Timeless familiarity with instantly recognisable architectural icons."</h2>
        </section>
        )
    }
}

export default DestinationInfo