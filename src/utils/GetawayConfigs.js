const GetawayConfigs = {
    dxHost: "http://localhost:8080",
    unomiHost: "http://localhost:8181",
    dxSiteKey: "digitall",
    dxToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJodHRwOi8vamFoaWEuY29tIiwic3ViIjoiYXBpIHZlcmlmaWNhdGlvbiIsImlzcyI6ImR4Iiwic2NvcGVzIjpbImdldGF3YXkiXSwiaWF0IjoxNTU5MjMwODQ0LCJqdGkiOiI2NTRkYjgwOC1mMTY1LTQ2ZTMtYWM2Yi0zNDM3N2RjNjJhNmUifQ.YmViHIRef_lZ5hemehmiKAaL9XVBWOQnEpvw-p-xiso",
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
    URL_PARAM_SEP: "&",
    ERROR_PAGE_URL: "/error"
};

export default GetawayConfigs
