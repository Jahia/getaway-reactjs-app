/** The id of the DEFAULT div in which the Google Maps' details are stored */
const GOOGLE_MAP_CONTAINER_ID = 'google_map_container';

class GooglePlacesApi {

    /**
     * Call and store the given landmark's details
     */
    getPlaceDetails(placeId) {
        const googleMaps = window.google.maps;
        const request = this.buildGetLandmarkRQ(placeId);
        const placesService = this.initGooglePlacesService();

        return new Promise(function(resolve, reject) {
            placesService.getDetails(request, function(place, status) {
                if(status == googleMaps.places.PlacesServiceStatus.OK) {
                    resolve(place);
                } else {
                    reject(status);
                }
            });
        });
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
     * Initializes the Google Maps service
     * @return {Object} - The initialized Google Maps service
     */
    initGooglePlacesService() {
        const googleMaps = window.google.maps;
        const mapContainer = document.getElementById(GOOGLE_MAP_CONTAINER_ID);
        const map = new googleMaps.Map(mapContainer);
        return new googleMaps.places.PlacesService(map);
    }
}

export default GooglePlacesApi;