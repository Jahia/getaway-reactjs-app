const GetawayConfigs = {
    dxHost: "http://localhost:8080",
    unomiHost: "http://localhost:8181",
    dxSiteKey: "getaway",
    dxToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJodHRwOi8vamFoaWEuY29tIiwic3ViIjoiYXBpIHZlcmlmaWNhdGlvbiIsInJlZmVyZXIiOlsiaHR0cDovLzEyNy4wLjAuMSIsImh0dHA6Ly9sb2NhbGhvc3QiXSwiaXNzIjoiZHgiLCJzY29wZXMiOlsiZ2V0YXdheSJdLCJpYXQiOjE1Mzg0NjU3NjQsImp0aSI6ImJiNjUyYmI2LTVlOGUtNGRmZC1hYjI3LWRlYzY4NWQxZmVmYiJ9.YolJyuSXGlvIN9_hL4eH6D9_oFHKwt005y3vfCuR2ZU",
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
