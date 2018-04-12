import React, { Component } from 'react'
import LandmarkContainer from "./LandmarkContainer"
import LandmarkCard from "../landmarks/LandmarkCard"

class LandmarkCardContainer extends Component {

    renderLandmarkDetails(landmark) {
        return (<LandmarkCard landmark={landmark} key={landmark.name} />)
    }

    render() {
        const landmarkPlaceId = this.props.landmarkPlaceId;
        if(landmarkPlaceId) {
            return (<LandmarkContainer landmarkPlaceId={landmarkPlaceId} onlyMainFields={true}
                                       render={this.renderLandmarkDetails}
                                       key={landmarkPlaceId}/>);
        }
    }
}

export default (LandmarkCardContainer)