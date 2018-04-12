import React, { Component } from 'react'
import GooglePlacesMapper from "../../external/GooglePlacesMapper";
import DestiLandmarkView from "../../destinationDetails/landmarks/DestiLandmarkView";
import withPlacesApi from "../../external/withPlacesApi";


class DestiLandmarkRESTContainer extends Component {

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
                        return googlePlacesMapper.retrieveLandmark(placeId, place);
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
     */
    componentDidMount() {
        const placeIds = this.props.placeIds;
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
                // max used here if the max is mentioned (the given placeIds list is not already limited)
                const max = this.props.max;
                const landmarksToDisplay = max ? landmarks.values.slice(0, max) : landmarks.values;
                return (
                    <DestiLandmarkView landmarks={landmarksToDisplay} destiGeoCoords={this.props.destiGeoCoords}/>
                );
            } else {
                return null;
            }
        }

        return "Loading landmarks ...";
    }
}

export default withPlacesApi(DestiLandmarkRESTContainer)
