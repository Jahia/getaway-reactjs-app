import React, { Component } from 'react'
import LandmarkMap from "./LandmarkMap";
import DestiLandmarkCards from "./DestiLandmarkCards"

class DestiLandmarkView extends Component {

    render() {
        const landmarks = this.props.landmarks;
        if(landmarks) {
            return (
                <div>
                    <DestiLandmarkCards elements={landmarks}/>
                    <LandmarkMap destiGeoCoords={this.props.destiGeoCoords} landmarks={landmarks}/>
                </div>
            );
        }

        return null;
    }
}

export default (DestiLandmarkView)
