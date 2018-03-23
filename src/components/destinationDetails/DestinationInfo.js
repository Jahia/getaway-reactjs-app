import React, {Component} from 'react'
import LocalTime from "./LocalTime"

class DestinationInfo extends Component {

    render() {
        const area = this.props.area ? this.props.area.value + " km²" : "N/A";
        const elevation = this.props.elevation ? this.props.elevation.value + " m" : "N/A";
        let population = "N/A";
        if(this.props.populationCount) {
            const populationCount = this.props.populationCount.value;
            population = populationCount > 1000000 ? (populationCount/1000000 + " million") : populationCount;
            if (this.props.populationDate) population += " (" + this.props.populationDate.value + ")"
        }
        const headline = this.props.headline ? "\"" + this.props.headline.value + "\"" : "";

        return (
        /* Destination info */
        <section className="destinationInfo">
            <div className="info-container">
                <div className="info-element">
                    <i className="material-icons">filter_tilt_shift</i><b>Area</b><span>{area}</span>
                </div>
                <div className="info-element">
                    <i className="material-icons">terrain</i><b>Elevation</b><span>{elevation}</span>
                </div>
                <div className="info-element">
                    <i className="material-icons">access_time</i><b>Local time</b><span id="destLocalTime">
                    <LocalTime latitude={this.props.latitude}
                               longitude={this.props.longitude} /></span>
                </div>
                <div className="info-element">
                    <i className="material-icons">people</i><b>Population</b><span>{population}</span>
                </div>
            </div>
            <h2>{headline}</h2>
        </section>
        )
    }
}

export default DestinationInfo
