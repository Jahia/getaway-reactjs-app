import React, {Component} from 'react'
import LandmarkContainer from "../landmarks/LandmarkContainer"
import LandmarkMap from "../landmarks/LandmarkMap"
import Footer from "../generic/Footer";
import Header from "../generic/Header";
import LandmarkReviews from "./LandmarkReviews";
import MoreReviews from "./MoreReviews";

class LandmarkPanel extends Component {

    renderLandmarkDetails(landmark) {
        const geoCoords = landmark.geoCoords;
        // just because it is expected by the map component
        const landmarks = [landmark];
        return (
            <div>
                <LandmarkMap centerGeoCoords={geoCoords} landmarks={landmarks}/>
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
                    <MoreReviews/>
                    <Footer/>
                </section>
            );
        }
    }
}

export default (LandmarkPanel)