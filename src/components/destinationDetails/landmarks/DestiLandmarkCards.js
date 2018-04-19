import React, { Component } from 'react'
import LandmarkCard from "../../landmarks/LandmarkCard";


class DestiLandmarkCards extends Component {

    /**
     * Renders a landmark card
     * @param {String} landmarkPlaceId - The Get away landmark that needs to be rendered
     * @return {Object} The landmark card rendered
     */
    renderLandmark(landmark) {
        if(landmark) {
            return (<LandmarkCard landmark={landmark} shouldHideName={true} key={landmark.name} />)
        }

        return null;
    }

    render() {
        const landmarks = this.props.landmarks;
        if(landmarks) {
            return (
                <section className="destinationLandmarks">
                    <h2>Landmarks</h2>
                    <div className="landmark-card-container">
                        {landmarks.map(landmark => (this.renderLandmark(landmark)))}
                    </div>
                </section>
            );
        }

        return null;
    }
}

export default (DestiLandmarkCards)
