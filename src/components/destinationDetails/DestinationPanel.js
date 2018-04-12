import React, {Component} from 'react'
/* import '../../styles/PageComponents/DestinationPanel.css'; TODO review this */
/* import '../../styles/style-destination.css'; */
import Banner from "../generic/Banner";
import Header from "../generic/Header";
import Footer from "../generic/Footer";
import DestinationDetails from "./DestinationDetails";
import {DestiLandmarkContainer} from "./landmarks";
import {graphql} from "react-apollo";
import gql from "graphql-tag";

const GQL_QUERY = gql`
query DestinationDetailsQuery($uuid: String!, $language: String) {
    jcr(workspace:LIVE) {
        nodeById(uuid: $uuid) {
          name:displayName(language: $language)
          country
          area:property(name: "area") {value}
          elevation:property(name: "elevation") {value}
          populationCount:property(name: "populationCount") {value}
          populationDate:property(name: "populationDate") {value}
          headline:property(name: "headline", language: $language) {value}           
          outline:property(name: "outline", language: $language) {value}
          latitude:property(name: "j:latitude") {value}
          longitude:property(name: "j:longitude") {value}
        }
    }
}`;

// TODO: should test that the uuid matched from the URL is valid, and prevent executing the Query if not
function mapPropsToOptions(props) {
    let options = {
        skip: false,
        variables: {
            uuid: props.match.params.destinationUUID,
            language: "en"
        }
    };
    console.log("Options: " + JSON.stringify(options));
    return options
}

function mapResultsToProps(results) {
    console.log(results);
    if (results && results.destination && results.destination.jcr
        && results.destination.jcr.nodeById)
        return {elements: results.destination.jcr.nodeById};
    return null;
}

class DestinationPanel extends Component {
    render() {
        const destination = this.props.elements;
        if (!destination) return "Loading destination ...";
        const destinationName = destination.name;
        const destiLatitude = destination.latitude ? parseFloat(destination.latitude.value) : null;
        const destiLongitude = destination.latitude ? parseFloat(destination.longitude.value) : null;
        const destiGeoCoords = {
            lat: destiLatitude,
            long:destiLongitude
        }
        const destiUUID = this.props.match.params.destinationUUID;

        if (destinationName) {
            return (
                <section className="getawayMain">
                    <Header/>
                    <Banner destinationName={destinationName}
                            destinationCountry={destination.country}/>
                    <DestinationDetails area={destination.area}
                                        elevation={destination.elevation}
                                        populationCount={destination.populationCount}
                                        populationDate={destination.populationDate}
                                        headline={destination.headline}
                                        outline={destination.outline}
                                        latitude={destination.latitude}
                                        longitude={destination.longitude}/>
                    <DestiLandmarkContainer destiUUID={destiUUID} destiGeoCoords={destiGeoCoords} />
                    <Footer/>
                </section>
            )
        }
    }
}

export default graphql(GQL_QUERY, {
    name: 'destination',
    props: mapResultsToProps,
    options: mapPropsToOptions
})(DestinationPanel)