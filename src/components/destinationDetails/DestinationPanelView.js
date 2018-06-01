import React, {Component} from 'react';
import DestinationDetails from "./DestinationDetails";
import {DestiLandmarksContainer} from "./landmarks"
import DXMapper from "../external/DXMapper";
import {Banner} from "../shared/generic";
import {withRouter} from 'react-router-dom';
import { Footer } from "./../shared/generic/index";

class DestinationPanelView extends Component {

    render() {
        const   destination =   this.props.destination;

        if(destination) {
            const destiSystemName   =   destination.systemName;
            const destiName         =   destination.name;
            const destiLatitude     =   destination.latitude ? parseFloat(destination.latitude.value) : null;
            const destiLongitude    =   destination.latitude ? parseFloat(destination.longitude.value) : null;
            const destiGeoCoords    =   {
                lat: destiLatitude,
                long:destiLongitude
            }
            const landmarkPlaceIds  =   destination.landmarkPlaceIds ? destination.landmarkPlaceIds.values : null;
            const dxMapper          =   new DXMapper();
            const headerPhotoUrl    =   dxMapper.retrieveHeaderPhotoUrl(destination);


            if (destiName && destiSystemName) {
                return(
                    <span>
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
                        <DestiLandmarksContainer max="5" placeIds={landmarkPlaceIds} destiGeoCoords={destiGeoCoords}/>
                        <Footer/>
                    </span>
                )
            }
        }
        return null;
    }
}

export default withRouter(DestinationPanelView)