import React, {Component} from 'react';
import DestinationDetails from "./DestinationDetails";
import {DestiLandmarksContainer} from "./landmarks"
import DXMapper from "../external/DXMapper";
import {Banner} from "../shared/generic";
import {withRouter} from 'react-router-dom';
import unomiTracker from 'unomi-analytics';
import GetawayConfigs from '../../utils/GetawayConfigs';

class DestinationPanelView extends Component {

    constructor(props) {
        super(props);
        // Adds optional data before sending page event
        window.digitalData = {
            "page": {
                "pageInfo": {
                    "destinationURL": window.location.href,
                    "pageID": "",
                    "pageName": "",
                    "pagePath": window.pathname,
                    "referringURL": window.origin,
                    "tags": ["destination"],
                },
                "attributes": {},
                "consentTypes": []
            },
            "scope": GetawayConfigs.dxSiteKey
        };
        unomiTracker.page();
    }

    render() {
        const destination = this.props.destination;
        if (destination) {
            const dxMapper = new DXMapper();
            const headerPhotoUrl = dxMapper.retrieveHeaderPhotoUrl(destination);


            if (destination.name && destination.systemName) {
                return (
                    <span>
                        <Banner destinationName={destination.name}
                                destinationCountry={destination.country}
                                headerPhoto={headerPhotoUrl}/>

                        <DestinationDetails area={destination.info.area}
                                            elevation={destination.info.elevation}
                                            populationCount={destination.info.populationCount}
                                            populationDate={destination.info.populationDate}
                                            headline={destination.headline}
                                            outline={destination.outline}
                                            latitude={destination.geoTag.latitude}
                                            longitude={destination.geoTag.longitude}/>
                        <DestiLandmarksContainer max="5" placeIds={destination.landmarkPlaceIds} destiGeoCoords={destination.geoTag}/>
                    </span>
                )
            }
        }
        return null;
    }
}

export default withRouter(DestinationPanelView)