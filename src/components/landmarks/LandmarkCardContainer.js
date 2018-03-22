import React, { Component } from 'react'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import GooglePlacesApiProvider from "../external/GooglePlacesApiProvider";
import LandmarkCard from "./LandmarkCard";

/**
 * Container that is used to retrieve a Landmark's details.
 * As it is a container, the rendering should be delegated to a presentational component.
 */
class LandmarkCardContainer extends Component {

    /**
     * Renders the Getaway landmark. Passed to a Provider in order to avoid to couple the container to a particular API.
     * @param {Object} landmark - The Getaway landmark that needs to be rendered
     * @return The rendered Getaway landmark
     */
    renderLandmark(landmark) {
        if(landmark) {
            return (<LandmarkCard landmark={landmark} key={landmark.name} />);
        }
    }

    render() {
        const placeId = this.props.landmarkPlaceId;

        // the function is passed to the child to decouple the API from the child rendering
        let landmarkRendering = (<GooglePlacesApiProvider placeId = {placeId} renderLandmark = {this.renderLandmark} />);
        if(landmarkRendering) {
            return landmarkRendering;
        }

        return "Loading landmarks ...";
    }
}

export default LandmarkCardContainer