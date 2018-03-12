import React, { Component } from 'react'
import GooglePlacesMapper from "./GooglePlacesMapper";
import scriptLoader from "react-async-script-loader";
import LandmarkCard from "../presentationComponents/LandmarkCard";

const GOOGLE_API_KEY = "AIzaSyBVs-p_AiWF1fOcqBXr5mXqxX5oNcGT6H4";
const GOOGLE_API_URL = "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_API_KEY
    + "&libraries=places";
const GOOGLE_MAP_CONTAINER_ID = 'google_map_container';


class GooglePlacesApiProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        // required as we use this.setState() in the method
        this.processPlaceDetailsRP = this.processPlaceDetailsRP.bind(this);
    }

    buildGetLandmarkRQ() {
        const placeId = this.props.placeId;
        return {
            placeId: placeId
        };
    }

    getPlaceDetails() {
        const request = this.buildGetLandmarkRQ();
        const placesService = this.initGooglePlacesService();
        placesService.getDetails(request, this.processPlaceDetailsRP);
    }

    initGooglePlacesService() {
        const googleMaps = window.google.maps;
        const mapContainer = document.getElementById(GOOGLE_MAP_CONTAINER_ID);
        const map = new googleMaps.Map(mapContainer);
        return new googleMaps.places.PlacesService(map);
    }

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

    componentWillReceiveProps(nextProps) {
        // if the script is loaded but wasn't already loaded
        if(nextProps.isScriptLoaded && !this.props.isScriptLoaded) {
            if(nextProps.isScriptLoadSucceed) {
                this.getPlaceDetails();
            }
        }
    }

    render() {
        const landmark = this.state.landmark;
        if(landmark) {
            return (<LandmarkCard landmark = {landmark} key = {landmark.name} />);
        }
        return "Loading landmarks ...";
    }
}

export default scriptLoader([
    GOOGLE_API_URL
])(GooglePlacesApiProvider)