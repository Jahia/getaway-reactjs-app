import React, {Component} from 'react'
import LandmarkContainer from "../landmarks/LandmarkContainer"
import LandmarkMap from "../landmarks/LandmarkMap"
import Footer from "../generic/Footer";
import Header from "../generic/Header";
import LandmarkReviews from "./LandmarkReviews";
import LandmarkInfo from "../landmarkDetails/LandmarkInfo"

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
                <section className="getawayMain">
                    <Header/>
                    <LandmarkContainer landmarkPlaceId={landmarkPlaceId} onlyMainFields={false}
                                       render={this.renderLandmarkDetails}
                                       key={landmarkPlaceId}/>
                    <Footer/>
                </section>
            );
        }
    }
}

export default (LandmarkPanel)