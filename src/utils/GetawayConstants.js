const GetawayConstants = {
    dxHost: "http://localhost:8080",
    googlePlacesApiKey: "AIzaSyBVs-p_AiWF1fOcqBXr5mXqxX5oNcGT6H4",
    googleMapsApiKey: "AIzaSyAJB4T6gOzkGQBR_NRWNON44SyCKLAb8C8",
    /** The URL from where the Google API library can be retrieved */
    GOOGLE_API_URL: function() { return "https://maps.googleapis.com/maps/api/js?key=" + this.googlePlacesApiKey
        + "&libraries=places"; }
};

export default GetawayConstants