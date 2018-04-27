import React, { Component } from 'react'
import GooglePlacesMapper from "../../external/GooglePlacesMapper";
import ContainerResultHandler from "../generic/ContainerResultHandler"
import {withPlacesApi} from "../../external";

/**
 * Container that is used to retrieve a Landmark's details.
 * As it is a container, the rendering should be delegated to a presentational component.
 */
class LandmarkContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            landmark: null,
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        const renderFunc = this.props.render;
        if(renderFunc) {
            const placesApi = this.props.placesApi;
            const placeId = this.props.landmarkPlaceId;
            // by default only the main fields are mapped
            const onlyMainFields = this.props.onlyMainFields;

            if(placeId) {
                placesApi.getPlaceDetails(placeId)
                    .then(function(place) {
                        const googlePlacesMapper = new GooglePlacesMapper();
                        let landmark = null;
                        if(onlyMainFields) {
                            landmark = googlePlacesMapper.retrieveLandmark(placeId, place);
                        } else {
                            landmark = googlePlacesMapper.retrieveFullLandmark(placeId, place);
                        }
                        this.setState({
                            landmark: landmark,
                            loading: false
                        });
                    }.bind(this))
                    .catch(function(error) {
                        this.setState({
                            landmark: null,
                            loading: false,
                            error: error
                        })
                    }.bind(this));
            }
        }
    }

    render() {
        const renderFunc = this.props.render;
        const {landmark, loading, error} = this.state;
        const redirectOnEmptyOrError = this.props.redirectOnEmptyOrError;
        if(!loading) {
            return (<ContainerResultHandler results={landmark}
                                            error={error}
                                            render={renderFunc}
                                            redirectOnEmptyOrError={redirectOnEmptyOrError}
                                            apiName={"Google Places API"}
            />);
        }

        return null;
    }
}

export default withPlacesApi(LandmarkContainer)