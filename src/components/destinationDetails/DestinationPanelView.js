import React, {Component} from 'react'
import Banner from "../generic/Banner";
import Header from "../generic/Header";
import Footer from "../generic/Footer";
import DestinationDetails from "./DestinationDetails";
import DestiLandmarkRESTContainer from "./landmarks/DestiLandmarkRESTContainer";
import GetawayConstants from "../../utils/GetawayConstants";

class DestinationPanelView extends Component {

    retrieveHeaderPhotoUrl(headerPhoto) {
        if(headerPhoto && headerPhoto.refNode) {
            return GetawayConstants.dxHost + headerPhoto.refNode.url;
        }

        return null;
    }

    render() {

        const destination = this.props.destination;
        if(destination) {
            const destiSystemName = destination.systemName;
            const destiName = destination.name;
            const destiLatitude = destination.latitude ? parseFloat(destination.latitude.value) : null;
            const destiLongitude = destination.latitude ? parseFloat(destination.longitude.value) : null;
            const destiGeoCoords = {
                lat: destiLatitude,
                long:destiLongitude
            }
            const landmarkPlaceIds = destination.landmarkPlaceIds ? destination.landmarkPlaceIds.values : null;
            const headerPhotoUrl = this.retrieveHeaderPhotoUrl(destination.headerPhoto);

            if (destiName && destiSystemName) {
                return (
                    <section className="getawayMain">
                        <Header/>
                        <Banner destinationName={destiName}
                                destinationCountry={destination.country}
                                headerPhoto={headerPhotoUrl}/>
                        <DestinationDetails area={destination.area}
                                            elevation={destination.elevation}
                                            populationCount={destination.populationCount}
                                            populationDate={destination.populationDate}
                                            headline={destination.headline}
                                            outline={destination.outline}
                                            latitude={destination.latitude}
                                            longitude={destination.longitude}/>
                        <DestiLandmarkRESTContainer max="5" placeIds={landmarkPlaceIds} destiGeoCoords={destiGeoCoords}/>
                        <Footer/>
                    </section>
                );
            }
        }

        return null;
    }
}

export default (DestinationPanelView)