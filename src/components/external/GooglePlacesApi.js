/** The id of the DEFAULT div in which the Google Maps' details are stored */
const GOOGLE_MAP_CONTAINER_ID = 'google_map_container';

class GooglePlacesApi {

    constructor() {
        this.placesService = null;
    }
    /**
     * Call and store the given landmark's details
     */
    getPlaceDetails(placeId) {
        const googleMaps = window.google.maps;
        const request = this.buildGetLandmarkRQ(placeId);

        const placesService = this.getGooglePlacesService();
        if(placesService) {
            return new Promise(function(resolve, reject) {
                placesService.getDetails(request, function(place, status) {
                    if(status == googleMaps.places.PlacesServiceStatus.OK) {
                        resolve(place);
                    } else {
                        reject(status);
                    }
                });
            });
        } else {
            console.log("The Google Places service is not initialized correctly");
        }
    }

    /**
     * Builds the Google request needed to retrieve the given landmark
     * @param {Number} i - The index of the landmark card in the list
     * @return {Object} - The built request
     */
    buildGetLandmarkRQ(placeId) {
        return {
            placeId: placeId
        };
    }

    /**
     * Retrieve the Google Places service or Initializes it
     * @return {Object} - The initialized Google Places service
     */
    getGooglePlacesService() {
        if(!this.placesService) {
            this.initGooglePlacesService();
        }

        return this.placesService;
    }

    /**
     * Initializes the Google Places service
     * @return {Object} - The initialized Google Maps service
     */
    initGooglePlacesService() {
        const googleMaps = window.google.maps;
        // as long as the service is not initialize in a React component accessing the DOM will work
        const mapContainer = document.createElement("google_map_container");
        const map = new googleMaps.Map(mapContainer);
        this.placesService = new googleMaps.places.PlacesService(map);
    }
}

export default GooglePlacesApi;