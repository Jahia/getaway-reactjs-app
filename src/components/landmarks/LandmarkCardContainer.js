import React, { Component } from 'react'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import LandmarkCard from "./LandmarkCard";
import withPlacesApi from "../external/withPlacesApi"
import GooglePlacesMapper from "../external/GooglePlacesMapper";

/**
 * Container that is used to retrieve a Landmark's details.
 * As it is a container, the rendering should be delegated to a presentational component.
 */
class LandmarkCardContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { landmark: null};
    }

    componentDidMount() {
        const placesApi = this.props.placesApi;
        const placeId = this.props.landmarkPlaceId;
        if(placeId) {
            placesApi.getPlaceDetails(placeId)
                .then(function(place) {
                    const googlePlacesMapper = new GooglePlacesMapper();
                    const landmark = googlePlacesMapper.retrieveLandmark(place);
                    this.setState({landmark: landmark});
                }.bind(this))
                .catch(function() {
                    console.log("There was an error while calling the Google Places API");
                });
        }
    }

    render() {
        const landmark = this.state.landmark;
        if(landmark) {
            return (<LandmarkCard landmark={landmark} key={landmark.name} />)
        }

        return null;
    }
}

export default withPlacesApi(LandmarkCardContainer)