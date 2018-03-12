import React, { Component } from 'react'
import GooglePlacesMapper from "./GooglePlacesMapper";
import scriptLoader from "react-async-script-loader";
import LandmarkCard from "../presentationComponents/LandmarkCard";

/** The Google API's Authentification key */
const GOOGLE_API_KEY = "AIzaSyBVs-p_AiWF1fOcqBXr5mXqxX5oNcGT6H4";

/** The URL from where the Google API library can be retrieved */
const GOOGLE_API_URL = "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_API_KEY
    + "&libraries=places";

/** The id of the div in which the Google Maps' details are stored */
const GOOGLE_MAP_CONTAINER_ID = 'google_map_container';

/**
 * Components that helps for the transactions with the Google API
 */
class GooglePlacesApiProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        // required as we use this.setState() in the method
        this.processPlaceDetailsRP = this.processPlaceDetailsRP.bind(this);
    }

    /**
     * Call and store the given landmark's details
     */
    getPlaceDetails() {
        const request = this.buildGetLandmarkRQ();
        const placesService = this.initGooglePlacesService();
        placesService.getDetails(request, this.processPlaceDetailsRP);
    }

    /**
     * Builds the Google request needed to retrieve the given landmark
     * @param {Number} i - The index of the landmark card in the list
     * @return {Object} - The built request
     */
    buildGetLandmarkRQ() {
        const placeId = this.props.placeId;
        return {
            placeId: placeId
        };
    }

    /**
     * Initializes the Google Maps service
     * @return {Object} - The initialized Google Maps service
     */
    initGooglePlacesService() {
        const googleMaps = window.google.maps;
        const mapContainer = document.getElementById(GOOGLE_MAP_CONTAINER_ID);
        const map = new googleMaps.Map(mapContainer);
        return new googleMaps.places.PlacesService(map);
    }

    /**
     * Processes the Google place details to store the required landmark details
     * @param {Object} place - The retrieved Google place object
     * @param {String} status - The status of the transaction with the Google API
     */
    processPlaceDetailsRP(place, status) {
        if(status == window.google.maps.places.PlacesServiceStatus.OK) {
            const googlePlacesMapper = new GooglePlacesMapper();
            const landmark = googlePlacesMapper.retrieveLandmark(place);
            this.setState({
                landmark: landmark
            });
        } else {
            console.log("There was an error while calling the Google Places API");
        }
    }

    /**
     * Helps to figure out when the external Google API is actually loaded.
     * Method is called whenever the state of the props will change.
     * @param {Object} nextProps - Corresponds to the new state of the props
     */
    componentWillReceiveProps(nextProps) {
        // if the script is loaded but wasn't already loaded
        if(nextProps.isScriptLoaded && !this.props.isScriptLoaded) {
            if(nextProps.isScriptLoadSucceed) {
                this.getPlaceDetails();
            }
        }
    }

    render() {
        const renderLandmark = this.props.renderLandmark;
        const landmark = this.state.landmark;
        if(renderLandmark) {
            if(landmark) {
                return (<LandmarkCard landmark = {landmark} key = {landmark.name} />);
            }
        } else {
            console.log("Please select a landmark rendering function")
        }
        return null;
    }
}

export default scriptLoader([
    GOOGLE_API_URL
])(GooglePlacesApiProvider)