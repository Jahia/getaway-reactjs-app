import React, {Component} from 'react'
/* import '../../styles/PageComponents/DestinationPanel.css'; TODO review this */
/* import '../../styles/style-destination.css'; */
import Banner from "../generic/Banner";
import Header from "../generic/Header";
import Footer from "../generic/Footer";
import DestinationDetails from "./DestinationDetails";
import DestiLandmarkRESTContainer from "./landmarks/DestiLandmarkRESTContainer";
import {graphql} from "react-apollo";
import gql from "graphql-tag";
import GetawayConstants from "../../utils/GetawayConstants";

const GQL_QUERY = gql`
query DestinationDetailsQuery($query: String!, $limit: Int, $language: String) {
    jcr(workspace:LIVE) {
        nodesByQuery(query: $query, limit: $limit) {
            nodes {
              name:displayName(language: $language)
              systemName:name
              country
              area:property(name: "area") {value}
              elevation:property(name: "elevation") {value}
              populationCount:property(name: "populationCount") {value}
              populationDate:property(name: "populationDate") {value}
              headline:property(name: "headline", language: $language) {value}           
              outline:property(name: "outline", language: $language) {value}
              latitude:property(name: "j:latitude") {value}
              longitude:property(name: "j:longitude") {value}
              landmarkPlaceIds: property(name: "landmarks") {values}
              headerPhoto: property(name: "headerPhoto") {
                  refNode {
                    url:nodeUrl
                  }
                }
            }
        }
    }
}`;

// TODO: should test that the name matched from the URL is valid, and prevent executing the Query if not
function mapPropsToOptions(props) {
    const destiName = props.match.params.destinationName;
    let options = null;
    if(destiName) {
        // search the destination based on desti' system name
        let query = "select * from [gant:destination] " +
            "where isdescendantnode('/sites/" + GetawayConstants.dxSiteKey + "/contents') and [j:nodename]='" + destiName + "'";

        options = {
            skip: false,
            variables: {
                query: query,
                limit: 1,
                language: "en"
            }
        };
    }

    console.log("Options: " + JSON.stringify(options));
    return options;
}

function mapResultsToProps(results) {
    console.log(results);
    if (results && results.destination && results.destination.jcr
        && results.destination.jcr.nodesByQuery.nodes && results.destination.jcr.nodesByQuery.nodes.length > 0) {
        return {destination: results.destination.jcr.nodesByQuery.nodes[0]}
    }
    return null;
}

class DestinationPanel extends Component {

    retrieveHeaderPhotoUrl(headerPhoto) {
        if(headerPhoto && headerPhoto.refNode) {
            return GetawayConstants.dxHost + headerPhoto.refNode.url;
        }

        return null;
    }

    render() {
        const destination = this.props.destination;
        if (!destination) return "Loading destination ...";

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
            )
        }

        return null;
    }
}

export default graphql(GQL_QUERY, {
    name: 'destination',
    props: mapResultsToProps,
    options: mapPropsToOptions
})(DestinationPanel)