import React, { Component } from 'react';
import DestiLandmarkCards from "./DestiLandmarkCards";
import {LandmarkMap} from "../../shared/landmarks";

class DestiLandmarkView extends Component {

    render() {
        const landmarks = this.props.landmarks;
        if(landmarks) {
            return (
                <div>
                    <DestiLandmarkCards landmarks={landmarks}/>
                    <LandmarkMap centerGeoCoords={this.props.destiGeoCoords} landmarks={landmarks}/>
                </div>
            );
        }

        return null;
    }
}

export default (DestiLandmarkView)
