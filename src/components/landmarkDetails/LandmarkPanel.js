import React, {Component} from 'react';
import LandmarkReviews from "./LandmarkReviews";
import LandmarkInfo from "./LandmarkInfo";
import {LandmarkContainer, LandmarkMap} from "../shared/landmarks";
import {Footer} from "../shared/generic";
import {MainPanel} from "../style";

class LandmarkPanel extends Component {

    renderLandmarkDetails(landmark) {
        const geoCoords = landmark.geoCoords;
        // just because it is expected by the map component
        const landmarks = [landmark];
        return (
            <div>
                <LandmarkMap centerGeoCoords={geoCoords} landmarks={landmarks}/>
                <LandmarkInfo landmarkName={landmark.name} locationName={landmark.locationName}/>
                <LandmarkReviews globalRating={landmark.rating} reviews={landmark.reviews}/>
            </div>
        );
    }

    render() {
        const landmarkPlaceId = this.props.match.params.externalId;

        if(landmarkPlaceId) {
            return (
                <MainPanel>
                    <LandmarkContainer landmarkPlaceId={landmarkPlaceId} onlyMainFields={false}
                                       render={this.renderLandmarkDetails}
                                       key={landmarkPlaceId}
                                       redirectOnEmptyOrError={true}
                    />
                    <Footer/>
                </MainPanel>
            );
        }
    }
}

export default (LandmarkPanel)