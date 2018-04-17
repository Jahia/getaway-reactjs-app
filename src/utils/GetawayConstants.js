const GetawayConstants = {
    dxHost: "http://localhost:8080",
    dxSiteKey: "digitall",
    googlePlacesApiKey: "AIzaSyBVs-p_AiWF1fOcqBXr5mXqxX5oNcGT6H4",
    googleMapsApiKey: "AIzaSyAJB4T6gOzkGQBR_NRWNON44SyCKLAb8C8",
    /** The URL from where the Google API library can be retrieved */
    GOOGLE_API_URL: function() {return "https://maps.googleapis.com/maps/api/js?key=" + this.googlePlacesApiKey
        + "&libraries=places";},
    WIKIPEDIA_DOMAIN_URL: "https://en.wikipedia.org",
    WIKIPEDIA_PAGE_URL: function() {return this.WIKIPEDIA_DOMAIN_URL + "/wiki?curid=";},
    WIKIPEDIA_API_URL: function() {return this.WIKIPEDIA_DOMAIN_URL + "/w/api.php";},
    WIKIPEDIA_CONSTRAINED_DOMAIN: "*",
    WIKIPEDIA_EXTRACT_MAX_LENGTH: 200,
    URL_PARAM_SEP: "&"
};

export default GetawayConstants
