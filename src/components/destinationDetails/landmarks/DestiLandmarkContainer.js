import React, { Component } from 'react'
import gql from "graphql-tag";
import {graphql} from "react-apollo/index";
import DestiLandmarkCards from "./DestiLandmarkCards"
import LandmarkMap from "./LandmarkMap";
import GooglePlacesMapper from "../../external/GooglePlacesMapper";
import withPlacesApi from "../../external/withPlacesApi";

const GQL_QUERY = gql`
query LandmarkQuery($query: String!){
  jcr {
    nodesByQuery(query: $query) {
      nodes {
        landmarkPlaceIds: property(name: "landmarks") {
          values
        }
      }
    }
  }
}`;

function mapPropsToOptions(props) {
    var query = "SELECT * FROM [gant:destination] WHERE [jcr:uuid]='" + props.destiUUID + "'";

    let options = {
        skip: false,
        variables: {
            query: query,
        }
    };
    console.log("Options: " + JSON.stringify(options));
    return options
}

/**
 * Returns the list of landmarks' place ids retrieved from the selected destination
 * @param {Object} results - The result of the GraphQL RQ
 * @return {Object} - the list of landmarks' place ids retrieved from the selected destination
 */
function mapResultsToProps(results) {
    if (results && results.destinations && results.destinations.jcr && results.destinations.jcr.nodesByQuery) {
        const destiNodes = results.destinations.jcr.nodesByQuery.nodes;
        if(destiNodes && destiNodes.length > 0 && destiNodes[0].landmarkPlaceIds) {
            // at this stage, due to the jcr request, only one destination is expected
            return {elements: destiNodes[0].landmarkPlaceIds.values}
        }
    }
    return null;
}

class DestiLandmarkContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            landmarks: {
                values: [],
                loading: true
            }
        };
    }

    /**
     * Builds the Promises to request the Google Places API for further details on the given places
     * @param {String[]} placeIds - Array of the placeIds to request
     * @return the Promises corresponding to the list of given placeIds
     */
    buildPlacesPromises(placeIds) {
        const placesApi = this.props.placesApi;
        if(placesApi && placeIds) {
            return placeIds.map(function(placeId) {
                return placesApi.getPlaceDetails(placeId)
                    .then(function(place) {
                        const googlePlacesMapper = new GooglePlacesMapper();
                        return googlePlacesMapper.retrieveLandmark(place);
                    })
                    .catch((err) => {
                        console.log("There was an error calling the Google Places API on the following placeId: "
                            + placeId + "/ Error message: " + err.message);
                    });
            });
        }

        return null;
    }

    /**
     * Helps to figure out when the GraphQl elements are actually retrieved to the Google Places API
     * Method is called whenever the state of the props will change.
     * @param {Object} nextProps - Corresponds to the new state of the props
     */
    componentWillReceiveProps(nextProps) {
        const placeIds = nextProps.elements;
        const placesPromises = this.buildPlacesPromises(placeIds);

        if(placesPromises && placesPromises.length > 0) {
            // once all the places' details, request component re-redendering
            Promise.all(placesPromises).then(function(results) {
                this.setState({
                    landmarks: {
                        values: results,
                        loading: false
                    }
                });
            }.bind(this));
        } else {
            // if nothing to request, then landmarks' load is done
            const newState = Object.assign({}, this.state, {
                landmarks: {
                    loading: false
                }
            });
            this.setState(newState);
        }
    }

    render() {
        const landmarks = this.state.landmarks;
        if(landmarks && !landmarks.loading) {
            if(landmarks.values && landmarks.values.length > 0) {
                /* max could have been mentioned in the DestiLandmarlCards and LandmarkMap component
                but it avoids processing the list twice */
                const max = this.props.max;
                const landmarksToDisplay = max ? landmarks.values.slice(0, max) : landmarks.values;
                return (
                    <div>
                        <DestiLandmarkCards elements={landmarksToDisplay}/>
                        <LandmarkMap destiGeoCoords={this.props.destiGeoCoords} landmarks={landmarksToDisplay}/>
                    </div>
                );
            } else {
                return null;
            }
        }

        return "Loading landmarks ...";
    }
}

export default graphql(GQL_QUERY, {
    name: 'destinations',
    props: mapResultsToProps,
    options: mapPropsToOptions
})(withPlacesApi(DestiLandmarkContainer))
