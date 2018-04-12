import React, { Component } from 'react'
import withPlacesApi from "../external/withPlacesApi"
import GooglePlacesMapper from "../external/GooglePlacesMapper";

/**
 * Container that is used to retrieve a Landmark's details.
 * As it is a container, the rendering should be delegated to a presentational component.
 */
class LandmarkContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { landmark: null};
    }

    componentDidMount() {
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
                    this.setState({landmark: landmark});
                }.bind(this))
                .catch(function() {
                    console.log("There was an error while calling the Google Places API");
                });
        }
    }

    render() {
        const renderFunc = this.props.render;
        const landmark = this.state.landmark;
        if(renderFunc) {
            if(landmark) {
                return renderFunc(landmark);
            }
        } else {
            console.log("A render method should be mentioned");
        }

        return null;
    }
}

export default withPlacesApi(LandmarkContainer)