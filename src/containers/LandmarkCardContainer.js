import React, { Component } from 'react'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import GooglePlacesApiProvider from "../external/GooglePlacesApiProvider";


class LandMarkCardContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { gapiFetched: false };
    }

    render() {
        const placeId = this.props.landmarkPlaceId;
        return (<GooglePlacesApiProvider placeId = {placeId} />);
        if(this.state.gapiFetched) {
            // Will display the landmarks
            return (<div>{placeId}</div>);
        }

        return "Loading";
    }
}

export default LandMarkCardContainer