import React, { Component } from 'react'
import HorizontalList from "../../generic/HorizontalList";
import LandmarkCard from "../../landmarks/LandmarkCard";


class DestiLandmarkCards extends HorizontalList {

    /**
     * Renders a landmark card
     * @param {String} landmarkPlaceId - The Get away landmark that needs to be rendered
     * @param {Number} i - The index of the landmark card in the list
     * @return {Object} The landmark card rendered
     */
    renderElement(landmark, i) {
        if(landmark) {
            return (<LandmarkCard landmark={landmark} key={landmark.name} />)
        }

        return null;
    }

    render() {
        if(this.props.elements) {
            return (
                <section className="destinationLandmarks">
                    <h2>Landmarks</h2>
                    <div className="landmark-card-container">
                        {super.render()}
                    </div>
                </section>
            );
        }

        return null;
    }
}

export default (DestiLandmarkCards)
